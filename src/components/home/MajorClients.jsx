import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
   Data — company/brand names are proper nouns, stay in English
────────────────────────────────────────────────────────────── */
const MAJOR_CLIENTS = [
  { name: 'Honeywell',        logoUrl: '/images/logos/brands/honeywell.png',      color: '#FC2B19' },
  { name: 'Schneider Electric', logoUrl: '/images/logos/schneider.svg', color: '#3DCD58' },
  { name: 'Alderley',         logoUrl: '/images/logos/brands/alderley.png',        color: '#0061A0' },
  { name: 'Dräger',           logoUrl: null,   color: '#003087' },
  { name: 'HIMA',             logoUrl: '/images/logos/brands/hima.png',        color: '#E3000F' },
  { name: 'JGC',              logoUrl: '/images/logos/brands/jgc.png', color: '#E3000F' },
  { name: 'GE',               logoUrl: '/images/logos/ge.svg', color: '#3B7DC4' },
  { name: 'Omni®',            logoUrl: '/images/logos/brands/omni.png',        color: '#D31245' },
];

const APPROVALS = [
  { name: 'Saudi Aramco',    logoUrl: '/images/logos/brands/aramco.png',       color: '#006000' },
  { name: 'SABIC',           logoUrl: null,        color: '#005E9D' },
  { name: 'MARAFIQ',         logoUrl: '/images/logos/brands/marafiq.png',         color: '#006837' },
  { name: "MA'ADEN",         logoUrl: '/images/logos/brands/maaden.png',    color: '#C8102E' },
  { name: 'SADARA',          logoUrl: null,         color: '#003478' },
  { name: 'Saudi Energy',    logoUrl: null,         color: '#00843D' },
  { name: 'NWC',             logoUrl: '/images/logos/brands/nwc.png',         color: '#005DAA' },
  { name: 'NEOM',            logoUrl: null,         color: '#B59B6A' },
  { name: 'Royal Commission',logoUrl: null,         color: '#006837' },
  { name: 'MODON',           logoUrl: null,         color: '#00558B' },
  { name: 'Baker Hughes',    logoUrl: null, color: '#CC0000' },
  { name: 'Schlumberger',    logoUrl: '/images/logos/brands/slb.png', color: '#009DDC' },
  { name: 'Halliburton',     logoUrl: '/images/logos/brands/halliburton.png', color: '#E31837' },
  { name: 'Air Products',    logoUrl: '/images/logos/brands/air-products.png', color: '#003087' },
];

const SUPPLIERS = [
  { name: 'SIEMENS',          logoUrl: '/images/logos/brands/siemens.svg',             color: '#009999' },
  { name: 'ABB',              logoUrl: '/images/logos/brands/abb.svg',                 color: '#FF000F' },
  { name: 'Allen-Bradley',    logoUrl: '/images/logos/brands/allen-bradley.png',       color: '#E2001A' },
  { name: 'Rockwell Automation', logoUrl: '/images/logos/brands/rockwell-automation.png', color: '#E2001A' },
  { name: 'Omni®',            logoUrl: '/images/logos/brands/omni.png',             color: '#D31245' },
  { name: 'Weidmüller',       logoUrl: '/images/logos/brands/weidmuller.png',     color: '#F08B1D' },
  { name: 'PHOENIX CONTACT',  logoUrl: null,     color: '#000000' },
  { name: 'TRINITY',          logoUrl: null,             color: '#1B3F8B' },
  { name: 'Schneider Electric',logoUrl: '/images/logos/schneider.svg', color: '#3DCD58' },
  { name: 'RITTAL',           logoUrl: null,              color: '#E2001A' },
  { name: 'ABU NAYYAN',       logoUrl: '/images/logos/brands/abunayyan.png',             color: '#658B35' },
  { name: 'ABDUL KAREEM',     logoUrl: null,             color: '#C8102E' },
  { name: 'MIRAN',            logoUrl: null,             color: '#006341' },
  { name: 'B&R',              logoUrl: '/images/logos/brands/br.png',               color: '#000000' },
  { name: 'PEPPERL+FUCHS',    logoUrl: '/images/logos/brands/pepperl-fuchs.png',    color: '#008566' },
];

/* ──────────────────────────────────────────────────────────────
   Main Component
────────────────────────────────────────────────────────────── */
const MajorClients = () => {
  const { t } = useTranslation();

  const trustBadges = [
    { icon: <ShieldCheck size={20} />, titleKey: 'home.majorClients.trust.t1', subKey: 'home.majorClients.trust.s1' },
    { icon: <ThumbsUp size={20} />,    titleKey: 'home.majorClients.trust.t2', subKey: 'home.majorClients.trust.s2' },
    { icon: <Award size={20} />,       titleKey: 'home.majorClients.trust.t3', subKey: 'home.majorClients.trust.s3' },
    { icon: <CheckCircle2 size={20} />,titleKey: 'home.majorClients.trust.t4', subKey: 'home.majorClients.trust.s4' },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        {/* TIER 1 — MAJOR CLIENTS */}
        <div className={styles.tierContainer}>
          <div className={styles.tierHeader}>
            <div className={styles.headerLine}>
              <div className={styles.dotLeft} />
            </div>
            <h2 className={styles.tierTitle}>{t('home.majorClients.tier1')}</h2>
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

        {/* TIER 2 — UNDER THE APPROVAL OF */}
        <div className={styles.tierContainer}>
          <div className={styles.tierHeader}>
            <div className={styles.headerLine}></div>
            <h3 className={styles.tierTitleSmall}>{t('home.majorClients.tier2')}</h3>
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
              <span className={styles.moreText}>{t('home.majorClients.andMore')}</span>
            </div>
          </div>
        </div>

        {/* TIER 3 — MAJOR BRANDS AND SUPPLIERS */}
        <div className={styles.tierContainer}>
          <div className={styles.tierHeader}>
            <div className={styles.headerLine}></div>
            <h3 className={styles.tierTitleSmall}>{t('home.majorClients.tier3')}</h3>
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

      {/* TRUST RIBBON */}
      <div className={styles.trustRibbon}>
        <div className={styles.trustRow}>
          {trustBadges.map((b, i) => (
            <div className={styles.trustBadge} key={i}>
              <div className={styles.trustIcon}>{b.icon}</div>
              <div>
                <strong>{t(b.titleKey)}</strong>
                <span>{t(b.subKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default MajorClients;
