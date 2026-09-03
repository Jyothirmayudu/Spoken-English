const express = require('express');
const db = require('../db/database');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

function parseProgressRow(row){
  if(!row) return { completed: [], levelScores: {}, quizStats: {}, unlocked: [1] };
  return {
    completed: JSON.parse(row.completed_json || '[]'),
    levelScores: JSON.parse(row.level_scores_json || '{}'),
    quizStats: JSON.parse(row.quiz_stats_json || '{}'),
    unlocked: JSON.parse(row.unlocked_json || '[1]'),
  };
}

router.get('/progress', requireAuth, (req, res) => {
  const row = db.prepare(`SELECT * FROM progress WHERE user_id = ?`).get(req.user.id);
  res.json(parseProgressRow(row));
});

router.put('/progress', requireAuth, (req, res) => {
  const { completed, levelScores, quizStats, unlocked } = req.body || {};
  const completedJson = JSON.stringify(Array.isArray(completed) ? completed : []);
  const levelScoresJson = JSON.stringify(levelScores && typeof levelScores === 'object' ? levelScores : {});
  const quizStatsJson = JSON.stringify(quizStats && typeof quizStats === 'object' ? quizStats : {});
  const unlockedJson = JSON.stringify(Array.isArray(unlocked) && unlocked.length ? unlocked : [1]);

  const existing = db.prepare(`SELECT user_id FROM progress WHERE user_id = ?`).get(req.user.id);
  if(existing){
    db.prepare(`
      UPDATE progress
      SET completed_json = ?, level_scores_json = ?, quiz_stats_json = ?, unlocked_json = ?, updated_at = datetime('now')
      WHERE user_id = ?
    `).run(completedJson, levelScoresJson, quizStatsJson, unlockedJson, req.user.id);
  }else{
    db.prepare(`
      INSERT INTO progress (user_id, completed_json, level_scores_json, quiz_stats_json, unlocked_json)
      VALUES (?, ?, ?, ?, ?)
    `).run(req.user.id, completedJson, levelScoresJson, quizStatsJson, unlockedJson);
  }

  res.json({ ok: true });
});

module.exports = router;
module.exports.parseProgressRow = parseProgressRow;
