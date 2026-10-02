const fs = require('fs');

// ── EN ──────────────────────────────────────────────────────────
const en = JSON.parse(fs.readFileSync('src/i18n/locales/en.json', 'utf8'));

en.home.panelSolutions.panels = [
  { name: 'PLC Panels',                  type: 'Automation & Process Control' },
  { name: 'Busbar Protection Panels',    type: 'Grid & Substation Protection' },
  { name: 'VFD Panels',                  type: 'Motor & Drive Speed Control' },
  { name: 'Busbar Protection Panels (Sec)', type: 'Relay & Isolation Systems' },
  { name: 'Transformer Protection Panels', type: 'High-Voltage Asset Protection' },
  { name: 'Annunciator Panels',          type: 'Audible & Visual Alarm Matrix' },
];

en.home.majorClients = {
  tier1: 'MAJOR CLIENTS',
  tier2: 'Under the Approval of',
  tier3: 'Major Brands and Suppliers',
  andMore: 'And many more',
  trust: {
    t1: 'TRUSTED BY', s1: 'Leading Organizations',
    t2: 'QUALITY PRODUCTS', s2: '& Solutions',
    t3: 'DELIVERING EXCELLENCE', s3: 'Across Industries',
    t4: 'PROVEN TRACK RECORD', s4: 'Of Successful Deliveries',
  }
};

fs.writeFileSync('src/i18n/locales/en.json', JSON.stringify(en, null, 2), 'utf8');
console.log('en.json done');

// ── AR ──────────────────────────────────────────────────────────
const ar = JSON.parse(fs.readFileSync('src/i18n/locales/ar.json', 'utf8'));

ar.home.panelSolutions.panels = [
  { name: 'لوحات تحكم PLC',                  type: 'الأتمتة والتحكم بالعمليات' },
  { name: 'لوحات حماية قضبان التوصيل',       type: 'حماية الشبكات والمحطات الفرعية' },
  { name: 'لوحات محركات التردد المتغير (VFD)', type: 'التحكم في سرعة المحركات' },
  { name: 'لوحات الحماية الثانوية (Busbar)',   type: 'أنظمة العزل والمرحلات' },
  { name: 'لوحات حماية المحولات',              type: 'حماية أصول الجهد العالي' },
  { name: 'لوحات الإنذار والتنبيه',            type: 'منظومة الإنذار المرئي والمسموع' },
];

ar.home.majorClients = {
  tier1: 'كبار العملاء',
  tier2: 'بموافقة ومتطلبات',
  tier3: 'كبار الموردين والعلامات التجارية',
  andMore: 'والمزيد من العملاء',
  trust: {
    t1: 'موثوق لدى', s1: 'المؤسسات الكبرى',
    t2: 'منتجات وحلول', s2: 'عالية الجودة',
    t3: 'تقديم التميز', s3: 'عبر مختلف القطاعات',
    t4: 'سجل حافل بالإنجازات', s4: 'من التسليمات الناجحة',
  }
};

fs.writeFileSync('src/i18n/locales/ar.json', JSON.stringify(ar, null, 2), 'utf8');
console.log('ar.json done');
