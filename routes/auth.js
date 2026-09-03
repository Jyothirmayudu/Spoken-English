const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db/database');
const { signToken, setAuthCookie, clearAuthCookie, requireAuth } = require('../middleware/auth');

const router = express.Router();

function publicUser(u){
  return {
    id: u.id,
    name: u.name,
    username: u.username,
    email: u.email,
    role: u.role,
    status: u.status,
    profilePic: u.profile_pic,
    bio: u.bio,
    createdAt: u.created_at,
  };
}

// ---------- Register (students only — admins are created via seeding) ----------
router.post('/register', (req, res) => {
  const { name, username, email, password, confirmPassword } = req.body || {};
  if(!name || !name.trim()) return res.status(400).json({ error: 'Please enter your name.' });
  if(!username || !/^[A-Za-z0-9_]{3,20}$/.test(username)){
    return res.status(400).json({ error: 'Username must be 3–20 characters: letters, numbers, and underscores only.' });
  }
  if(!email || !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ error: 'Please enter a valid email address.' });
  if(!password || password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters.' });
  if(confirmPassword !== undefined && password !== confirmPassword){
    return res.status(400).json({ error: 'Passwords do not match.' });
  }

  const usernameTaken = db.prepare(`SELECT id FROM users WHERE username = ?`).get(username.toLowerCase());
  if(usernameTaken) return res.status(409).json({ error: 'That username is already taken — please choose another.' });
  const emailTaken = db.prepare(`SELECT id FROM users WHERE email = ?`).get(email.toLowerCase());
  if(emailTaken) return res.status(409).json({ error: 'An account with that email already exists — try logging in instead.' });

  const hash = bcrypt.hashSync(password, 10);
  const info = db.prepare(
    `INSERT INTO users (name, username, email, password_hash, role, status) VALUES (?, ?, ?, ?, 'student', 'active')`
  ).run(name.trim(), username.toLowerCase(), email.toLowerCase(), hash);
  db.prepare(`INSERT INTO progress (user_id) VALUES (?)`).run(info.lastInsertRowid);

  const user = db.prepare(`SELECT * FROM users WHERE id = ?`).get(info.lastInsertRowid);
  const token = signToken(user);
  setAuthCookie(res, token);
  res.json({ user: publicUser(user) });
});

// ---------- Login (accepts email OR username; used by both "Log in" and "Admin" tabs) ----------
router.post('/login', (req, res) => {
  const { identifier, email, password } = req.body || {};
  const loginId = (identifier || email || '').trim().toLowerCase();
  if(!loginId || !password) return res.status(400).json({ error: 'Please enter your email/username and password.' });

  const user = db.prepare(`SELECT * FROM users WHERE email = ? OR username = ?`).get(loginId, loginId);
  if(!user) return res.status(401).json({ error: 'No account found with that email or username.' });
  if(!bcrypt.compareSync(password, user.password_hash)) return res.status(401).json({ error: 'Incorrect password.' });
  if(user.status === 'terminated'){
    return res.status(403).json({ error: 'This account has been deactivated. Please contact your administrator.' });
  }

  const token = signToken(user);
  setAuthCookie(res, token);
  res.json({ user: publicUser(user) });
});

router.post('/logout', (req, res) => {
  clearAuthCookie(res);
  res.json({ ok: true });
});

// ---------- Current user ----------
router.get('/me', requireAuth, (req, res) => {
  const user = db.prepare(`SELECT * FROM users WHERE id = ?`).get(req.user.id);
  if(!user) return res.status(404).json({ error: 'Account not found.' });
  if(user.status === 'terminated'){
    clearAuthCookie(res);
    return res.status(403).json({ error: 'This account has been deactivated.' });
  }
  res.json({ user: publicUser(user) });
});

// ---------- Update profile (name, bio, profile picture) ----------
router.put('/me/profile', requireAuth, (req, res) => {
  const { name, bio, profilePic } = req.body || {};
  const user = db.prepare(`SELECT * FROM users WHERE id = ?`).get(req.user.id);
  if(!user) return res.status(404).json({ error: 'Account not found.' });

  const newName = (typeof name === 'string' && name.trim()) ? name.trim() : user.name;
  const newBio = typeof bio === 'string' ? bio.slice(0, 300) : user.bio;
  const newPic = typeof profilePic === 'string' ? profilePic : user.profile_pic;

  db.prepare(`UPDATE users SET name = ?, bio = ?, profile_pic = ? WHERE id = ?`)
    .run(newName, newBio, newPic, user.id);

  const updated = db.prepare(`SELECT * FROM users WHERE id = ?`).get(user.id);
  // Re-issue the token so the name shown in the UI updates immediately.
  const token = signToken(updated);
  setAuthCookie(res, token);
  res.json({ user: publicUser(updated) });
});

// ---------- Change password ----------
router.put('/me/password', requireAuth, (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  if(!newPassword || newPassword.length < 6){
    return res.status(400).json({ error: 'New password must be at least 6 characters.' });
  }
  const user = db.prepare(`SELECT * FROM users WHERE id = ?`).get(req.user.id);
  if(!bcrypt.compareSync(currentPassword || '', user.password_hash)){
    return res.status(401).json({ error: 'Current password is incorrect.' });
  }
  const hash = bcrypt.hashSync(newPassword, 10);
  db.prepare(`UPDATE users SET password_hash = ? WHERE id = ?`).run(hash, user.id);
  res.json({ ok: true });
});

module.exports = router;
