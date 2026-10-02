const fs = require('fs');
const files = [
  'src/components/home/CompanyIntro.jsx',
  'src/components/home/TrustValue.jsx',
  'src/components/home/FacilityTechnology.jsx',
  'src/components/home/ExpertiseGrid.jsx',
  'src/components/home/WhyChooseACS.jsx',
  'src/components/home/Industries.jsx',
  'src/components/home/PanelSolutions.jsx',
  'src/components/home/MajorClients.jsx',
  'src/components/home/ClientsWall.jsx',
  'src/components/home/StatementBanner.jsx',
  'src/components/home/PreFooterCTA.jsx',
  'src/components/home/CoreServicesPreview.jsx',
  'src/components/Footer.jsx',
  'src/pages/Contact.jsx',
  'src/components/Navbar.jsx',
  'src/components/home/Hero.jsx'
];
files.forEach(f => {
  try {
    const c = fs.readFileSync(f, 'utf8');
    const lines = c.split('\n');
    lines.forEach((line, i) => {
      const trimmed = line.trim();
      // Look for JSX text literals that are English, not translation calls
      if (
        (trimmed.match(/^[A-Z][a-zA-Z &,\/\\.()]{4,}$/) ||
         trimmed.match(/>[A-Z][a-zA-Z &,\/\\.()]{4,}</) ||
         trimmed.match(/^"[A-Z][a-zA-Z ]{4,}",$/)
        ) &&
        !trimmed.includes('t(') &&
        !trimmed.includes('//') &&
        !trimmed.includes('import') &&
        !trimmed.includes('className') &&
        !trimmed.includes('from ') &&
        !trimmed.includes('size={') &&
        !trimmed.includes('style=')
      ) {
        console.log(f + ':' + (i+1) + ': ' + trimmed);
      }
    });
  } catch(e) {}
});
