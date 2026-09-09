const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../db/database');
const { requireAuth, requireAdmin } = require('../middleware/auth');
const { parseProgressRow } = require('./progress');

const router = express.Router();

// Builds a complete, human-readable snapshot of every account and every
// student's progress. Password hashes are never included.
function buildFullExport(){
  const users = db.prepare(`SELECT * FROM users ORDER BY id`).all();
  return {
    exportedAt: new Date().toISOString(),
    totalAccounts: users.length,
    accounts: users.map(u => {
      const row = db.prepare(`SELECT * FROM progress WHERE user_id = ?`).get(u.id);
      return {
        id: u.id,
        name: u.name,
        username: u.username,
        email: u.email,
        role: u.role,
        status: u.status,
        classLevel: u.class_level,
        bio: u.bio,
        createdAt: u.created_at,
        progress: parseProgressRow(row),
      };
    }),
  };
}

// Admin-only: download a full JSON snapshot of the whole database, and
// also save a copy to db/backup.json so there's always a JSON mirror of
// the data sitting on disk alongside the SQLite file — not just inside it.
router.get('/admin/export-all', requireAuth, requireAdmin, (req, res) => {
  const data = buildFullExport();
  const json = JSON.stringify(data, null, 2);

  const backupPath = path.join(__dirname, '..', 'db', 'backup.json');
  try{
    fs.writeFileSync(backupPath, json);
  }catch(err){
    console.error('Could not write db/backup.json:', err.message);
  }

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename="my-school-full-backup.json"');
  res.send(json);
});

module.exports = router;
