require('dotenv').config();
require('./db/database'); // initialises the DB file, schema, and default admin on first run

const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth');
const progressRoutes = require('./routes/progress');
const adminRoutes = require('./routes/admin');
const settingsRoutes = require('./routes/settings');
const dataRoutes = require('./routes/data');

const app = express();

app.use(express.json({ limit: '5mb' })); // 5mb headroom for base64 profile pictures
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api', progressRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', settingsRoutes);
app.use('/api', dataRoutes);

app.use(express.static(path.join(__dirname, 'public')));

// Single-page app: any non-API route falls back to index.html.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My School is running — open http://localhost:${PORT} in your browser.`);
});
