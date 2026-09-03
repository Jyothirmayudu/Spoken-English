const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'speakpath-dev-secret-change-me';
const COOKIE_NAME = 'speakpath_token';

function signToken(user){
  return jwt.sign(
    { id: user.id, name: user.name, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '30d' }
  );
}

function setAuthCookie(res, token){
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
}

function clearAuthCookie(res){
  res.clearCookie(COOKIE_NAME);
}

function requireAuth(req, res, next){
  const token = req.cookies && req.cookies[COOKIE_NAME];
  if(!token) return res.status(401).json({ error: 'Not logged in.' });
  try{
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  }catch(err){
    return res.status(401).json({ error: 'Your session has expired — please log in again.' });
  }
}

function requireAdmin(req, res, next){
  if(!req.user || req.user.role !== 'admin'){
    return res.status(403).json({ error: 'Admin access required.' });
  }
  next();
}

module.exports = { JWT_SECRET, COOKIE_NAME, signToken, setAuthCookie, clearAuthCookie, requireAuth, requireAdmin };
