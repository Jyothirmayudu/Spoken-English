const path = require('path');
const bcrypt = require('bcryptjs');
const Database = require('better-sqlite3');

const db = new Database(path.join(__dirname, 'speakpath.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    name          TEXT NOT NULL,
    email         TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role          TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student','admin')),
    status        TEXT NOT NULL DEFAULT 'active'  CHECK (status IN ('active','terminated')),
    profile_pic   TEXT,
    bio           TEXT,
    created_at    TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS progress (
    user_id           INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    completed_json     TEXT NOT NULL DEFAULT '[]',
    level_scores_json  TEXT NOT NULL DEFAULT '{}',
    quiz_stats_json    TEXT NOT NULL DEFAULT '{}',
    unlocked_json      TEXT NOT NULL DEFAULT '[1]',
    updated_at         TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

// Seed one default admin account on first run, so there's always a way in.
const adminExists = db.prepare(`SELECT id FROM users WHERE role = 'admin' LIMIT 1`).get();
if(!adminExists){
  const defaultEmail = 'admin@speakpath.local';
  const defaultPassword = 'admin123';
  const hash = bcrypt.hashSync(defaultPassword, 10);
  const info = db.prepare(
    `INSERT INTO users (name, email, password_hash, role, status) VALUES (?, ?, ?, 'admin', 'active')`
  ).run('Administrator', defaultEmail, hash);
  db.prepare(`INSERT INTO progress (user_id) VALUES (?)`).run(info.lastInsertRowid);

  console.log('\n============================================================');
  console.log(' First run: a default admin account has been created.');
  console.log(`   Email:    ${defaultEmail}`);
  console.log(`   Password: ${defaultPassword}`);
  console.log(' Log in via the Admin tab, then change this password from');
  console.log(' the Profile page as soon as possible.');
  console.log('============================================================\n');
}

module.exports = db;
