const express = require('express');
const db = require('../db/database');
const { requireAuth, requireAdmin } = require('../middleware/auth');

const router = express.Router();

function getSettings(){
  const row = db.prepare(`SELECT * FROM site_settings WHERE id = 1`).get();
  return {
    siteTitle: row.site_title,
    logoImage: row.logo_image,
    footerText: row.footer_text,
  };
}

// Public — the login screen needs this before anyone is authenticated.
router.get('/settings', (req, res) => {
  res.json(getSettings());
});

// Admin-only — update branding.
router.put('/admin/settings', requireAuth, requireAdmin, (req, res) => {
  const { siteTitle, logoImage, footerText } = req.body || {};
  const current = db.prepare(`SELECT * FROM site_settings WHERE id = 1`).get();

  const newTitle = (typeof siteTitle === 'string' && siteTitle.trim()) ? siteTitle.trim().slice(0, 60) : current.site_title;
  const newFooter = (typeof footerText === 'string' && footerText.trim()) ? footerText.trim().slice(0, 300) : current.footer_text;
  // logoImage: a string (new image) sets it, an explicit empty string clears
  // it back to the default icon, undefined leaves it unchanged.
  const newLogo = logoImage === undefined ? current.logo_image : (logoImage || null);

  db.prepare(`UPDATE site_settings SET site_title = ?, logo_image = ?, footer_text = ? WHERE id = 1`)
    .run(newTitle, newLogo, newFooter);

  res.json(getSettings());
});

module.exports = router;
