const express = require('express');
const db = require('../db/database');
const { requireAuth, requireAdmin } = require('../middleware/auth');
const { parseProgressRow } = require('./progress');

const router = express.Router();
router.use(requireAuth, requireAdmin);

function summarize(user, progress){
  const totalCompleted = progress.completed.length;
  const scores = Object.values(progress.levelScores);
  const avgScore = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;
  const subjectAttempts = Object.keys(progress.subjectStats || {}).length;
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    status: user.status,
    profilePic: user.profile_pic,
    classLevel: user.class_level,
    createdAt: user.created_at,
    conceptsCompleted: totalCompleted,
    levelsUnlocked: progress.unlocked.length,
    averageQuizScore: avgScore,
    subjectQuizzesAttempted: subjectAttempts,
  };
}

// ---------- List all students, split by status ----------
router.get('/students', (req, res) => {
  const users = db.prepare(`SELECT * FROM users WHERE role = 'student' ORDER BY created_at DESC`).all();
  const students = users.map(u => {
    const row = db.prepare(`SELECT * FROM progress WHERE user_id = ?`).get(u.id);
    return summarize(u, parseProgressRow(row));
  });
  res.json({
    active: students.filter(s => s.status === 'active'),
    terminated: students.filter(s => s.status === 'terminated'),
  });
});

// ---------- Full detail for one student ----------
router.get('/students/:id', (req, res) => {
  const user = db.prepare(`SELECT * FROM users WHERE id = ? AND role = 'student'`).get(req.params.id);
  if(!user) return res.status(404).json({ error: 'Student not found.' });
  const row = db.prepare(`SELECT * FROM progress WHERE user_id = ?`).get(user.id);
  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    status: user.status,
    profilePic: user.profile_pic,
    bio: user.bio,
    classLevel: user.class_level,
    createdAt: user.created_at,
    progress: parseProgressRow(row),
  });
});

// ---------- Terminate / reactivate ----------
router.post('/students/:id/terminate', (req, res) => {
  const info = db.prepare(`UPDATE users SET status = 'terminated' WHERE id = ? AND role = 'student'`).run(req.params.id);
  if(info.changes === 0) return res.status(404).json({ error: 'Student not found.' });
  res.json({ ok: true });
});

router.post('/students/:id/reactivate', (req, res) => {
  const info = db.prepare(`UPDATE users SET status = 'active' WHERE id = ? AND role = 'student'`).run(req.params.id);
  if(info.changes === 0) return res.status(404).json({ error: 'Student not found.' });
  res.json({ ok: true });
});

module.exports = router;
