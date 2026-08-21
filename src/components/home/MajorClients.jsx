import React, { useState } from 'react';
import { ShieldCheck, ThumbsUp, Award, CheckCircle2 } from 'lucide-react';
import styles from './MajorClients.module.css';

/* ──────────────────────────────────────────────────────────────
   LogoCard — renders an img with a styled-text fallback
────────────────────────────────────────────────────────────── */
const LogoCard = ({ name, logoUrl, sub, color, isLastRow }) => {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className={`${styles.logoCell} ${isLastRow ? styles.noBottomBorder : ''}`}>
      {imgOk && logoUrl ? (
        <img
          src={logoUrl}
          alt={name}
          className={styles.logoImg}
          onError={() => setImgOk(false)}
          loading="lazy"
        />
      ) : (
        <span
          className={styles.logoFallbackText}
          style={color ? { color } : undefined}
        >
          {name}
        </span>
      )}
      {sub && <span className={styles.logoSub}>{sub}</span>}
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────
   Data
────────────────────────────────────────────────────────────── */
const MAJOR_CLIENTS = [
  { name: 'Honeywell',        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Honeywell_logo.svg',      color: '#FC2B19' },
  { name: 'Schneider Electric', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Schneider_Electric_2007.svg',           color: '#3DCD58' },
  { name: 'Alderley',         logoUrl: null,        color: '#0061A0', sub: 'أولديرلي' },
  { name: 'Dräger',           logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Dr%C3%A4ger_Logo.svg',         color: '#003087' },
  { name: 'HEMA',             logoUrl: null,                                            color: '#E3000F' },
  { name: 'JGC',              logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/JGC_Corporation_logo.svg',             color: '#E3000F' },
  { name: 'GE',               logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg',              color: '#3B7DC4' },
  { name: 'Omni®',            logoUrl: null,        color: '#D31245' },
];

const APPROVALS = [
  { name: 'Saudi Aramco',    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/2/23/Saudi_Aramco_logo.svg',           sub: 'أرامكو السعودية' },
  { name: 'SABIC',           logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/SABIC_Logo.svg',            sub: 'سابك',            color: '#005E9D' },
  { name: 'MARAFIQ',         logoUrl: null,       sub: 'مرافق',           color: '#006837' },
  { name: "MA'ADEN",         logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Ma%27aden_Logo.svg',        sub: 'معادن',           color: '#C8102E' },
  { name: 'SADARA',          logoUrl: null,           sub: 'صدارة',           color: '#003478' },
  { name: 'Saudi Energy',    logoUrl: null,            sub: 'se',              color: '#00843D' },
  { name: 'NWC',             logoUrl: null,           sub: 'شركة المياه',     color: '#005DAA' },
  { name: 'NEOM',            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Neom_logo.svg',             sub: 'نيوم',            color: '#B59B6A' },
  { name: 'Royal Commission',logoUrl: null,          sub: 'الهيئة الملكية',  color: '#006837' },
  { name: 'MODON',           logoUrl: null,         sub: 'مدن',             color: '#00558B' },
  { name: 'Baker Hughes',    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Baker_Hughes_Logo.svg',      color: '#CC0000' },
  { name: 'Schlumberger',    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Schlumberger_logo.svg',              color: '#009DDC' },
  { name: 'Halliburton',     logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Halliburton_logo.svg',      color: '#E31837' },
  { name: 'Air Products',    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Air_Products_and_Chemicals_logo.svg',      color: '#003087' },
];

const SUPPLIERS = [
  { name: 'SIEMENS',          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg',           color: '#009999' },
  { name: 'ABB',              logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg',               color: '#FF000F' },
  { name: 'Allen-Bradley',    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Allen-Bradley_logo.svg', color: '#E2001A', sub: 'by Rockwell Automation' },
  { name: 'Rockwell Automation', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Rockwell_Automation_logo.svg', color: '#E2001A' },
  { name: 'Omni®',            logoUrl: null,           color: '#D31245' },
  { name: 'Weidmüller',       logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Weidm%C3%BCller_Logo.svg',         color: '#F08B1D' },
  { name: 'PHOENIX CONTACT',  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Phoenix_Contact_logo.svg',     color: '#000000' },
  { name: 'TRINITY',          logoUrl: null,                                               color: '#1B3F8B' },
  { name: 'Schneider Electric',logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Schneider_Electric_2007.svg',               color: '#3DCD58' },
  { name: 'RITTAL',           logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Rittal_logo.svg',             color: '#E2001A' },
  { name: 'ABU NAYYAN',       logoUrl: null,                                               color: '#658B35', sub: 'أبونيان' },
  { name: 'ABDUL KAREEM',     logoUrl: null,                                               color: '#C8102E', sub: 'عبد الكريم' },
  { name: 'MIRAN',            logoUrl: null,                                               color: '#006341', sub: 'ميران' },
  { name: 'B&R',              logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/55/B%26R_Logo.svg',      color: '#000000', sub: 'A member of the ABB Group' },
  { name: 'PEPPERL+FUCHS',    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Pepperl%2BFuchs_Logo.svg',      color: '#008566' },
];

/* ──────────────────────────────────────────────────────────────
   Main Component
────────────────────────────────────────────────────────────── */
const MajorClients = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        {/* ══════════════════════════════════════════════════════
            TIER 1 — MAJOR CLIENTS
        ══════════════════════════════════════════════════════ */}
        <div className={styles.tierContainer}>
          <div className={styles.tierHeader}>
            <div className={styles.headerLine}>
              <div className={styles.dotLeft} />
            </div>
            <h2 className={styles.tierTitle}>MAJOR CLIENTS</h2>
            <div className={styles.headerLine}>
              <div className={styles.dotRight} />
            </div>
          </div>
          
          <div className={`${styles.gridBox} ${styles.grid4}`}>
            {MAJOR_CLIENTS.map((c, i) => (
              <LogoCard
                key={c.name}
                {...c}
                isLastRow={i >= MAJOR_CLIENTS.length - 4}
              />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            TIER 2 — UNDER THE APPROVAL OF
        ══════════════════════════════════════════════════════ */}
        <div className={styles.tierContainer}>
          <div className={styles.tierHeader}>
            <div className={styles.headerLine}></div>
            <h3 className={styles.tierTitleSmall}>Under the Approval of</h3>
            <div className={styles.headerLine}></div>
          </div>
          
          <div className={`${styles.gridBox} ${styles.grid5}`}>
            {APPROVALS.map((c, i) => (
              <LogoCard
                key={c.name}
                {...c}
                isLastRow={i >= 10}
              />
            ))}
            <div className={`${styles.logoCell} ${styles.noBottomBorder}`}>
              <span className={styles.moreText}>And many more</span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            TIER 3 — MAJOR BRANDS AND SUPPLIERS
        ══════════════════════════════════════════════════════ */}
        <div className={styles.tierContainer}>
          <div className={styles.tierHeader}>
            <div className={styles.headerLine}></div>
            <h3 className={styles.tierTitleSmall}>Major Brands and Suppliers</h3>
            <div className={styles.headerLine}></div>
          </div>
          
          <div className={`${styles.gridBox} ${styles.grid5}`}>
            {SUPPLIERS.map((c, i) => (
              <LogoCard
                key={c.name}
                {...c}
                isLastRow={i >= SUPPLIERS.length - 5}
              />
            ))}
          </div>
        </div>

      </div>

      {/* ── TRUST RIBBON ──────────────────────────────────── */}
      <div className={styles.trustRibbon}>
        <div className={styles.trustRow}>
          {[
            { icon: <ShieldCheck size={20} />, title: 'TRUSTED BY', sub: 'Leading Organizations' },
            { icon: <ThumbsUp size={20} />,    title: 'QUALITY PRODUCTS', sub: '& Solutions' },
            { icon: <Award size={20} />,       title: 'DELIVERING EXCELLENCE', sub: 'Across Industries' },
            { icon: <CheckCircle2 size={20} />,title: 'PROVEN TRACK RECORD', sub: 'Of Successful Deliveries' },
          ].map((b, i) => (
            <div className={styles.trustBadge} key={b.title}>
              <div className={styles.trustIcon}>{b.icon}</div>
              <div>
                <strong>{b.title}</strong>
                <span>{b.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default MajorClients;
