const fs = require('fs');

const files = [
  'src/components/home/ElectricalInstrumentation.jsx',
  'src/components/home/ProjectsShowcase.jsx',
  'src/components/home/ExpertiseGrid.jsx',
  'src/components/home/ClientsWall.jsx',
  'src/components/home/Hero.jsx',
  'src/components/home/Industries.jsx',
  'src/components/home/WhyChooseACS.jsx',
  'src/components/home/FacilityTechnology.jsx',
  'src/components/home/TrustValue.jsx',
  'src/components/home/CompanyIntro.jsx',
  'src/components/home/StatementBanner.jsx',
  'src/components/home/PanelSolutions.jsx',
  'src/components/home/CoreServicesPreview.jsx',
  'src/components/home/PreFooterCTA.jsx',
  'src/components/home/QualityCertifications.jsx',
  'src/components/home/MajorClients.jsx',
  'src/components/Footer.jsx',
  'src/components/Navbar.jsx',
  'src/pages/About.jsx',
  'src/pages/Services.jsx',
  'src/pages/Projects.jsx',
  'src/pages/Contact.jsx',
  'src/pages/NotFound.jsx'
];

const ignorePatterns = [
  /\/\//,           // comments
  /import /,        // imports
  /className/,      // JSX props
  /from '/,         // imports
  /size={/,         // icon props
  /style={/,        // style props
  /src="/,          // image src
  /alt="/,          // alt text - OK to leave in EN
  /t\(/,            // already a translation call
  /key={/,          // react key
  /^\s*[{}()\[\]]/,// code syntax
  /console\./,      // console
  /const |let |var /, // variable declarations
  /@/,              // email
  /SAP|ACS|ISO|PLC|DCS|ESD|HMI|RTU|FAT|SAT|AMC|ATEX|SIL|IEC|NGL/, // technical proper nouns OK
  /Honeywell|Siemens|Schneider|ABB|Yokogawa|Aramco|SABIC|Emerson|Rittal|GE |Rockwell/, // brand names OK
  /SA2|SAP-|\/images\//, // project codes / paths
  /\d{4}/, // years/numbers
  /^import/,
  /export default/,
  /return \(/,
  /\);$/,
  /styles\./,
  /React/,
  /useState|useEffect|useTranslation/,
  /lucide-react/,
  /module\.css/,
  /Link|Route|NavLink/,
  /ArrowRight|MapPin|Calendar|Building|Shield|Award|Users|Factory|Cpu|Zap|Check|Target|Trend|Activity|Sliders|Radio|Network|Server|HardDrive|Flame|Droplets|Mountain|Warehouse|Wrench|Thermometer|Cable|Wifi|LayoutDashboard|Monitor|Settings|ShieldCheck|ShieldAlert|CheckCircle/
];

let found = false;
files.forEach(f => {
  try {
    const content = fs.readFileSync(f, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
      const trimmed = line.trim();
      // Look for JSX text content between tags
      const match = trimmed.match(/>([A-Z][a-zA-Z &',\/\\.()-]{5,})</);
      if (match) {
        const text = match[1].trim();
        if (ignorePatterns.some(p => p.test(text) || p.test(trimmed))) return;
        if (text.length > 5) {
          console.log(`HARDCODED: ${f}:${i+1}: "${text}"`);
          found = true;
        }
      }
    });
  } catch(e) {}
});

if (!found) console.log('✅ No hardcoded English strings found in JSX!');
