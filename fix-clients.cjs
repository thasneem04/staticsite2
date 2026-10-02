const fs = require('fs');

// Fix en.json clients list
const en = JSON.parse(fs.readFileSync('src/i18n/locales/en.json', 'utf8'));
en.about.clients.list = [
  "Saudi Aramco",
  "Saudi Electricity Company",
  "JHAH (Johns Hopkins Aramco Healthcare)",
  "Siemens",
  "SABIC",
  "Petro Rabigh",
  "Ma'aden",
  "Tasnee"
];
fs.writeFileSync('src/i18n/locales/en.json', JSON.stringify(en, null, 2), 'utf8');

// Fix ar.json clients list - company names stay in English as proper nouns
const ar = JSON.parse(fs.readFileSync('src/i18n/locales/ar.json', 'utf8'));
ar.about.clients.list = [
  "Saudi Aramco",
  "Saudi Electricity Company",
  "JHAH (Johns Hopkins Aramco Healthcare)",
  "Siemens",
  "SABIC",
  "Petro Rabigh",
  "Ma'aden",
  "Tasnee"
];
fs.writeFileSync('src/i18n/locales/ar.json', JSON.stringify(ar, null, 2), 'utf8');

console.log('Client lists synced in both JSON files');
