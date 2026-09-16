import fs from 'fs';
let c = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

// Wrap the LanguageSwitcher in a desktop-only span
c = c.replace(
  '<LanguageSwitcher />\n            <Link to={localizedPath("/contact")} className={styles.ctaButton}>',
  '<span className={styles.desktopOnlySwitcher}><LanguageSwitcher /></span>\n            <Link to={localizedPath("/contact")} className={styles.ctaButton}>'
);

// Add LanguageSwitcher to the mobile drawer just before the CTA wrapper
c = c.replace(
  '<div className={styles.mobileCtaWrapper}>',
  '<div className={styles.mobileSwitcherWrapper}><LanguageSwitcher /></div>\n        <div className={styles.mobileCtaWrapper}>'
);

fs.writeFileSync('src/components/Navbar.jsx', c, 'utf8');
console.log('Navbar patched successfully');
