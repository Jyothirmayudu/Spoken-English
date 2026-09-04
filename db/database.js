const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const Database = require('better-sqlite3');

// Where the SQLite file lives. Locally this defaults to db/speakpath.db.
// On a host with ephemeral storage, set the DB_PATH environment variable
// to a location on a mounted persistent disk (e.g. /data/speakpath.db) —
// otherwise every redeploy or restart will silently wipe your data.
const dbPath = process.env.DB_PATH || path.join(__dirname, 'speakpath.db');
fs.mkdirSync(path.dirname(dbPath), { recursive: true });

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    name          TEXT NOT NULL,
    username      TEXT NOT NULL UNIQUE,
    email         TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role          TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student','admin')),
    status        TEXT NOT NULL DEFAULT 'active'  CHECK (status IN ('active','terminated')),
    profile_pic   TEXT,
    bio           TEXT,
    class_level   INTEGER,
    created_at    TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS progress (
    user_id            INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    completed_json      TEXT NOT NULL DEFAULT '[]',
    level_scores_json   TEXT NOT NULL DEFAULT '{}',
    quiz_stats_json     TEXT NOT NULL DEFAULT '{}',
    subject_stats_json  TEXT NOT NULL DEFAULT '{}',
    unlocked_json       TEXT NOT NULL DEFAULT '[1]',
    updated_at          TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

// Migrations for databases created before class_level / subject_stats_json existed.
const userColumnsNow = db.prepare(`PRAGMA table_info(users)`).all().map(c => c.name);
if(!userColumnsNow.includes('class_level')){
  db.exec(`ALTER TABLE users ADD COLUMN class_level INTEGER`);
}
const progressColumnsNow = db.prepare(`PRAGMA table_info(progress)`).all().map(c => c.name);
if(!progressColumnsNow.includes('subject_stats_json')){
  db.exec(`ALTER TABLE progress ADD COLUMN subject_stats_json TEXT NOT NULL DEFAULT '{}'`);
}

// Lightweight migration: if this is an existing database from before
// usernames were introduced, add the column and backfill values instead
// of requiring you to delete your database and start over.
const userColumns = db.prepare(`PRAGMA table_info(users)`).all().map(c => c.name);
if(!userColumns.includes('username')){
  db.exec(`ALTER TABLE users ADD COLUMN username TEXT`);
  const usersWithoutUsername = db.prepare(`SELECT id, email FROM users WHERE username IS NULL`).all();
  usersWithoutUsername.forEach(u => {
    const base = (u.email.split('@')[0] || ('user' + u.id)).toLowerCase().replace(/[^a-z0-9_]/g, '') || ('user' + u.id);
    let candidate = base;
    let n = 1;
    while(db.prepare(`SELECT id FROM users WHERE username = ? AND id != ?`).get(candidate, u.id)){
      candidate = base + n;
      n++;
    }
    db.prepare(`UPDATE users SET username = ? WHERE id = ?`).run(candidate, u.id);
  });
  db.exec(`CREATE UNIQUE INDEX IF NOT EXISTS idx_users_username ON users(username)`);
  console.log('Database upgraded: added usernames for existing accounts (derived from their email address).');
}

// Seed one default admin account on first run, so there's always a way in.
const adminExists = db.prepare(`SELECT id FROM users WHERE role = 'admin' LIMIT 1`).get();
if(!adminExists){
  const defaultUsername = 'admin';
  const defaultEmail = 'admin@speakpath.local';
  const defaultPassword = 'admin123';
  const hash = bcrypt.hashSync(defaultPassword, 10);
  const info = db.prepare(
    `INSERT INTO users (name, username, email, password_hash, role, status) VALUES (?, ?, ?, ?, 'admin', 'active')`
  ).run('Administrator', defaultUsername, defaultEmail, hash);
  db.prepare(`INSERT INTO progress (user_id) VALUES (?)`).run(info.lastInsertRowid);

  console.log('\n============================================================');
  console.log(' First run: a default admin account has been created.');
  console.log(`   Username: ${defaultUsername}`);
  console.log(`   Email:    ${defaultEmail}`);
  console.log(`   Password: ${defaultPassword}`);
  console.log(' Log in via the Admin tab, then change this password from');
  console.log(' the Profile page as soon as possible.');
  console.log('============================================================\n');
}

module.exports = db;
