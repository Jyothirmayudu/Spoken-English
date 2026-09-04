# SpeakPath — Spoken English Course (Full Application)

A day-by-day spoken English course with student accounts, progress tracking,
and an admin dashboard — built as a small Node.js + Express + SQLite app.

---

## 1. What's inside

```
speakpath-app/
├── server.js              Main server entry point
├── package.json
├── .env.example            Copy to .env to configure (optional for local use)
├── db/
│   └── database.js         SQLite schema + creates the DB file on first run
├── middleware/
│   └── auth.js             Login-session (JWT cookie) checking
├── routes/
│   ├── auth.js              Register / login / logout / profile / password
│   ├── progress.js          Save & load a student's course progress
│   └── admin.js              Student list, student detail, terminate/reactivate
└── public/                  Everything served to the browser
    ├── index.html
    ├── css/styles.css
    └── js/
        ├── content.js        The course content (48 → 96 topics, quizzes)
        ├── speech.js         Read-aloud engine (play/pause/seek/highlight)
        └── app.js            App logic: auth, dashboard, quiz, profile, admin
```

There's no build step — it's plain HTML/CSS/JS on the frontend, plain Node.js
on the backend. Nothing to compile.

---

## 2. Running it on your own machine (local)

**You need Node.js installed** (version 18 or later — the current LTS release
is fine). Get it from [nodejs.org](https://nodejs.org) if you don't have it.
That's the *only* software this needs.

Then, in a terminal, from inside the `speakpath-app` folder:

```bash
npm install
npm start
```

The first `npm install` downloads the few packages this uses (Express, a
SQLite library, password hashing, etc.) — it only needs to be done once.
`npm start` runs the server.

You'll see something like:

```
============================================================
 First run: a default admin account has been created.
   Username: admin
   Email:    admin@speakpath.local
   Password: admin123
 Log in via the Admin tab, then change this password from
 the Profile page as soon as possible.
============================================================
SpeakPath is running — open http://localhost:3000 in your browser.
```

Open **http://localhost:3000** in your browser. That's it — students can
register, log in, and work through the course; you can log in as admin with
the credentials printed above (change that password immediately from the
Profile page).

A file `db/speakpath.db` will appear — that's the actual SQLite database,
holding every account and every student's progress. Back it up like any
other file if you care about the data (there's also a per-student JSON
export button on the dashboard for a lighter, human-readable backup).

**Restarting:** stop the server with `Ctrl+C`, run `npm start` again. Your
data in `db/speakpath.db` persists between restarts — it's a real file on
disk, not in-memory.

---

## 3. Hosting it on the web

This now has a backend and a database, so it needs a host that runs Node.js
continuously — not a static-only host like GitHub Pages. Good, simple,
inexpensive (often free-tier) options:

- **[Render](https://render.com)** — connect a GitHub repo, it detects
  `npm start` automatically. Probably the easiest for a first deployment.
- **[Railway](https://railway.app)** — similarly simple, generous free tier.
- **[Fly.io](https://fly.io)** — a bit more configuration, more control.
- **Any VPS** (DigitalOcean, Linode, a spare server) if you want full control
  — install Node, copy this folder over, run it behind a process manager
  like `pm2` so it restarts if it crashes or the server reboots.

General steps for any of these:

1. Push this project to a GitHub repository (it already has a `.gitignore`
   that excludes `node_modules` and the database file — you don't want to
   commit either of those).
2. Connect that repo to your chosen host.
3. Set the **start command** to `npm start` and install command to
   `npm install` (most hosts detect this automatically from `package.json`).
4. Set an environment variable `JWT_SECRET` to a long random string (see
   `.env.example` for a one-line command that generates one) — this is what
   keeps login sessions secure. Don't skip this for a public deployment.
5. Deploy. The host will give you a public URL.

**One important note on SQLite + hosting:** SQLite stores everything in a
single file on disk. Most hosts' free tiers use *ephemeral* storage, meaning
the filesystem resets on every deploy or restart — which would wipe your
database. Look for your host's "persistent disk" or "volume" option (Render,
Railway, and Fly.io all offer one, sometimes on the free tier, sometimes a
small paid add-on) and point it at the `db/` folder. If you'd rather not deal
with that, most of these hosts also offer a free hosted Postgres database —
that's a bigger change (swapping the database library), so ask if you want
help moving to that route later.

---

## 4. Default admin account

On first run only, one admin account is created automatically:

- Username: `admin`
- Email: `admin@speakpath.local`
- Password: `admin123`

**Change this password immediately** (log in via the Admin tab → Profile →
Change password) — especially before hosting this anywhere public. There's
currently no UI for creating *additional* admin accounts; if you need a
second admin, ask and I can add that as an admin-only "promote to admin"
action.

---

## 5. What each login option does

- **Log in** — existing students (and admins) sign in here.
- **Sign up** — creates a new *student* account.
- **Admin** — same login, but only lets accounts with admin rights through;
  a student account trying this tab gets a clear error instead of being let
  in the wrong door.

---

## 6. Everything from the course app is still here

All 96 topics across 4 levels (24 topics each, organized into 6 days per
level), the 96-question quiz with hints and skip, the read-aloud player with
live word highlighting and drag-to-seek, and per-student JSON export — all
unchanged, just now backed by real accounts instead of one browser's local
storage.

## 7. School Subjects (Classes 3–10)

Alongside Spoken English, students now pick a class (3rd–10th) on first
login and get a subject dashboard for that class:

- **Live now, with real content:** Indian Mythology (choose Ramayana or
  Mahabharata), Indian History & Culture, Sports & GK, and Social Studies —
  which includes a State & Capital quiz that's freshly randomised from a
  28-state list every time it's opened.
- **Shown as "Coming soon":** Maths, English (grammar), Biology, Physical
  Science, Hindi, Telugu, and Computer. These need real, grade-board-aligned
  curriculum content, which is a substantial project of its own — the cards
  are there and wired up, just without content yet.

Admin can see each student's class, every subject quiz attempt (score,
correct/incorrect/skipped, last attempt date), alongside their Spoken
English progress, all in one detail view.

A couple of things worth knowing:
- **Question freshness:** the State & Capital quiz is genuinely regenerated
  each time from the state list. The other new subjects (Mythology, History,
  Sports & GK) use a fixed, well-checked question bank rather than pulling
  live from the internet — there's no safe, reliable way for an app to turn
  a random web page into a clean quiz question automatically. If you want
  true ever-changing questions later, that needs a real question-generation
  service (e.g. an LLM API) wired in deliberately, with its own API key and
  cost.
- **Search bar:** the dashboard search filters the signed-in student's own
  subjects and levels only. Student-to-student profile search was
  intentionally left out — since this now serves children (Class 3 and up),
  letting students browse each other's profiles isn't something I built in.
  Admin already has full search/visibility across all students.
