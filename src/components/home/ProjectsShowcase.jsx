import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2, Calendar, FileText, Building } from 'lucide-react';
import styles from './ProjectsShowcase.module.css';

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const topProjectsData = [
    {
      sno: '01',
      year: '2024',
      customer: 'Honeywell Turki Arabia Limited',
      acsProjectNo: 'SA24CA276',
      customerSapNo: 'SAP598',
      name: 'INSTALL C3/C4 REFRIGERATION UNITS AND STORAGE TANKS AT JNGLF (JUAYMAH)',
      category: 'Oil & Gas',
      location: 'Juaymah, KSA',
      desc: 'Turnkey installation, PLC automation and refrigeration control systems for C3/C4 storage tanks at Juaymah NGL Facility (JNGLF).'
    },
    {
      sno: '02',
      year: '2024 – 2025',
      customer: 'Honeywell Turki Arabia Limited',
      acsProjectNo: 'SA24CA304',
      customerSapNo: 'SAP-0661-Jafura',
      name: 'JAFURAH DEVELOPMENT PROGRAM PHASE FRACTIONATION FACILITIES BI 10-17537II RIYAS NGL',
      category: 'Gas & NGL',
      location: 'Jafurah / Riyas, KSA',
      desc: 'Process automation, instrumentation marshalling, and control cabinet integration for the Jafurah Unconventional Gas Development Program.'
    },
    {
      sno: '03',
      year: '2024',
      customer: 'Honeywell Turki Arabia Limited',
      acsProjectNo: 'SA24CA296',
      customerSapNo: 'SAP647',
      name: 'RTR PLANT15 AND PLANT488/493/J24 CCR RELOCATION',
      category: 'Refinery',
      location: 'Ras Tanura, KSA',
      desc: 'Central Control Room (CCR) relocation, system cutover, DCS marshalling, and loop testing for RTR Plant 15 and Plant 488/493/J24.'
    },
    {
      sno: '04',
      year: '2023',
      customer: 'Honeywell Turki Arabia Limited',
      acsProjectNo: 'SA23CA152',
      customerSapNo: 'SAP583',
      name: 'EXPAND MARINE TERMINAL - JUAYMAH NGL FRACTIONATION PLANT -OFFSHORE PACKAGE',
      category: 'Offshore & Marine',
      location: 'Juaymah Offshore, KSA',
      desc: 'Offshore marine terminal expansion, ATEX certified control panels, remote telemetry integration, and safety shutdown systems.'
    },
    {
      sno: '05',
      year: '2023',
      customer: 'Schneider Electric Systems Saudi Arabia',
      acsProjectNo: 'SA23CA210',
      customerSapNo: 'SA10054',
      name: 'ZULUF ONSHORE OIL FACILITIES PROJECT',
      category: 'Oil & Gas',
      location: 'Zuluf Field, KSA',
      desc: 'Onshore oil processing facilities automation, power distribution boards, ESD cabinets assembly and FAT verification.'
    },
    {
      sno: '06',
      year: '2023',
      customer: 'Schneider Electric Systems Saudi Arabia Co. Ltd.',
      acsProjectNo: 'SA23CA208',
      customerSapNo: 'SA-20301',
      name: 'UPG 110 & 33 KV JUAYMAH 11.04B 4374 & 43971 NGL 011 & 012 34.5 KV',
      category: 'Power & Substation',
      location: 'Juaymah, KSA',
      desc: '110kV and 33kV high-voltage substation upgrade, protection relay panels, and power automation for Juaymah NGL plants.'
    },
    {
      sno: '07',
      year: '2023',
      customer: 'Schneider Electric Systems Saudi Arabia Co. Ltd.',
      acsProjectNo: 'SA23CA206',
      customerSapNo: 'SA-20324',
      name: 'JUAYMAH 132/33-13.8 KV POWER TRANSFORMER (1X200MVA) REPLACEMENT FOR JUAYMAH 15 PLANT',
      category: 'Power & Substation',
      location: 'Juaymah, KSA',
      desc: '132/33-13.8 kV 200MVA power transformer protection, control interface cabling, and testing for Juaymah 15 Plant.'
    },
    {
      sno: '08',
      year: '2023',
      customer: 'Schneider Electric Systems Saudi Arabia Co. Ltd.',
      acsProjectNo: 'SA22CA064',
      customerSapNo: 'SA20179',
      name: 'MARJAN 230/13.8KV NETWORK UPGRADE PROJECT (MCC AND SWBD)',
      category: 'Power & Substation',
      location: 'Marjan Field, KSA',
      desc: '230/13.8kV electrical network upgrade, Motor Control Centre (MCC) interface modifications, and switchboard commissioning.'
    },
    {
      sno: '09',
      year: '2023',
      customer: 'Schneider Electric Saudi Arabia Co.Riyadh',
      acsProjectNo: 'SA22CA073',
      customerSapNo: 'Marjan Ph 2 -ksa',
      name: 'Power System Automation System – (PSA)',
      category: 'Power & Substation',
      location: 'Marjan Phase 2, KSA',
      desc: 'Complete Power System Automation (PSA) deployment, RTU telemetry integration, SCADA communication, and substation protocol testing.'
    },
    {
      sno: '10',
      year: '2024',
      customer: 'Honeywell Turki Arabia Limited',
      acsProjectNo: 'SA22CA098',
      customerSapNo: 'SAP-000494 - King Salman',
      name: 'KING SALMAN INTERNATIONAL COMPLEX FOR Maritime Industries and Services',
      category: 'Maritime & Infrastructure',
      location: 'Ras Al-Khair, KSA',
      desc: 'Industrial automation, power management, and marine terminal control infrastructure at the King Salman Global Maritime Complex.'
    },
    {
      sno: '11',
      year: '2024',
      customer: 'Honeywell Turki Arabia Limited',
      acsProjectNo: 'SA21CA022',
      customerSapNo: 'SAP-405 Rittal Cabinets - Marjan',
      name: 'TANAJIB OIL PLANT EXPANSION PROJECT FOR MARJAN DEVELOPMENT PROGRAM',
      category: 'Oil & Gas',
      location: 'Tanajib, KSA',
      desc: 'Rittal cabinet assembly, system staging, FAT verification, and marshaling hardware integration for the Tanajib mega-plant expansion.'
    },
    {
      sno: '12',
      year: '2024',
      customer: 'Honeywell Turki Arabia Limited',
      acsProjectNo: 'SA21CA002',
      customerSapNo: 'SAP-446',
      name: 'BERRI DOWNSTREAM PIPELINES PROJECT',
      category: 'Oil & Gas',
      location: 'Berri Field, KSA',
      desc: 'Downstream pipeline automation panels, remote RTU telemetry, valve actuation control, and field instrumentation commissioning.'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? topProjectsData
    : topProjectsData.filter(p => p.customer.toLowerCase().includes(activeFilter.toLowerCase()) || p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section className={`section-lg ${styles.projectsSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">PROVEN TRACK RECORD</h4>
            <h2>The Top Projects of the Past Four Years</h2>
            <div className={styles.accentLine}></div>
            <p>Verified execution of critical industrial automation, control panels, and substation engineering for major energy programs in Saudi Arabia.</p>
          </div>
        </div>

        {/* Featured Case Study Visuals */}
        <div className={styles.projectsGrid}>
          {/* Project Card 1 */}
          <div className={`${styles.projectCard} ${styles.projectLarge} animate-fade-up delay-100`}>
            <div className={styles.imgWrapper}>
              <img src="/images/header_projects.jpg" alt="Jafurah Development Program" />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.clientBadge}>Honeywell Turki Arabia</span>
                <span className={styles.locationBadge}><MapPin size={13} /> Jafurah / Riyas, KSA</span>
                <span className={styles.yearBadge}><Calendar size={13} /> 2024 – 2025</span>
              </div>
              <h3>JAFURAH DEVELOPMENT PROGRAM PHASE FRACTIONATION FACILITIES</h3>
              <p>ACS Project: SA24CA304 | SAP: SAP-0661-Jafura — Major fractionation control cabinets and instrumentation staging.</p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className={`${styles.projectCard} animate-fade-up delay-200`}>
            <div className={styles.imgWrapper}>
              <img src="/images/electrical_hv.jpg" alt="Zuluf Onshore Oil Facilities" />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.clientBadge}>Schneider Electric</span>
                <span className={styles.locationBadge}><MapPin size={13} /> Zuluf Field, KSA</span>
                <span className={styles.yearBadge}><Calendar size={13} /> 2023</span>
              </div>
              <h3>ZULUF ONSHORE OIL FACILITIES PROJECT</h3>
              <p>ACS Project: SA23CA210 | SAP: SA10054 — ESD cabinets, power boards, and system staging FAT.</p>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className={`${styles.projectCard} animate-fade-up delay-300`}>
            <div className={styles.imgWrapper}>
              <img src="/images/tech_expertise.jpg" alt="King Salman Maritime Complex" />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.clientBadge}>Honeywell Turki Arabia</span>
                <span className={styles.locationBadge}><MapPin size={13} /> Ras Al-Khair, KSA</span>
                <span className={styles.yearBadge}><Calendar size={13} /> 2024</span>
              </div>
              <h3>KING SALMAN INTERNATIONAL COMPLEX FOR MARITIME INDUSTRIES</h3>
              <p>ACS Project: SA22CA098 | SAP: SAP-000494 — Maritime control systems & power automation.</p>
            </div>
          </div>
        </div>

        {/* Structured Engineering Project Directory Table */}
        <div className={styles.tableContainer}>
          <div className={styles.tableHeaderBar}>
            <div>
              <h3>The Top Projects Directory Matrix</h3>
              <p>Major projects executed across the Kingdom of Saudi Arabia</p>
            </div>
            <div className={styles.filterTabs}>
              <button 
                className={`${styles.tabBtn} ${activeFilter === 'all' ? styles.tabActive : ''}`} 
                onClick={() => setActiveFilter('all')}
              >
                All Projects
              </button>
              <button 
                className={`${styles.tabBtn} ${activeFilter === 'honeywell' ? styles.tabActive : ''}`} 
                onClick={() => setActiveFilter('honeywell')}
              >
                Honeywell Projects
              </button>
              <button 
                className={`${styles.tabBtn} ${activeFilter === 'schneider' ? styles.tabActive : ''}`} 
                onClick={() => setActiveFilter('schneider')}
              >
                Schneider Electric Projects
              </button>
              <button 
                className={`${styles.tabBtn} ${activeFilter === 'power' ? styles.tabActive : ''}`} 
                onClick={() => setActiveFilter('power')}
              >
                Power &amp; Substation
              </button>
            </div>
          </div>

          <div className={styles.tableResponsiveWrapper}>
            <table className={styles.projectTable}>
              <thead>
                <tr>
                  <th>Year/s</th>
                  <th>Customer Name</th>
                  <th>ACS Project No</th>
                  <th>Customer SAP No</th>
                  <th>Project Name</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((proj) => (
                  <tr key={proj.sno}>
                    <td className={styles.yearCell}>
                      <strong>{proj.year}</strong>
                    </td>
                    <td className={styles.clientName}>
                      <div className={styles.clientCellInner}>
                        <Building size={14} className="text-secondary" />
                        <span>{proj.customer}</span>
                      </div>
                    </td>
                    <td className={styles.codeCell}>
                      <code>{proj.acsProjectNo}</code>
                    </td>
                    <td className={styles.sapCell}>
                      <span>{proj.customerSapNo}</span>
                    </td>
                    <td className={styles.projectNameCell}>
                      <strong>{proj.name}</strong>
                      <span className={styles.scopeText}>{proj.desc}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className={styles.bottomCTA}>
          <Link to="/projects" className={styles.primaryBtnLarge}>
            Explore Full Technical Project Scope <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;


