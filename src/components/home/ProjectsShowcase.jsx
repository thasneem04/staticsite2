import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2, Clock } from 'lucide-react';
import styles from './ProjectsShowcase.module.css';

const ProjectsShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projectsTableData = [
    {
      sno: '01',
      name: 'Jeddah Distribution Management Control Centre',
      sector: 'Power & Grid',
      client: 'SEC & Siemens',
      location: 'Jeddah, KSA',
      status: 'Completed',
      scope: '4,680 sqm Control Centre electrical, LV, and low current systems'
    },
    {
      sno: '02',
      name: 'Yanbu NGL High Voltage Feeder Cable Replacement',
      sector: 'Oil & Gas',
      client: 'Saudi Aramco',
      location: 'Yanbu, KSA',
      status: 'Completed',
      scope: '25km 13.4kV feeder cables from power plant to substation'
    },
    {
      sno: '03',
      name: 'LV Switchgear Upgrade at Building 54',
      sector: 'Healthcare & Utility',
      client: 'JHAH',
      location: 'Dhahran, KSA',
      status: 'Completed',
      scope: 'Complete shutdown, demolition, and installation of new switchgear'
    },
    {
      sno: '04',
      name: 'Provide 230V Panel Board & Power Supply Project',
      sector: 'Healthcare & Utility',
      client: 'JHAH',
      location: 'Dhahran, KSA',
      status: 'Completed',
      scope: 'Dry-type transformers, normal & emergency 230V panels, and fire alarm power'
    },
    {
      sno: '05',
      name: 'Civil Works & Installation of Capacitor Banks (13 Substations)',
      sector: 'Power & Grid',
      client: 'SEC / Siemens',
      location: 'Eastern Province, KSA',
      status: 'Completed',
      scope: 'Substation civil works, foundations, and capacitor banks installation'
    },
    {
      sno: '06',
      name: 'FMS (Flow Meter Skid) Control & Integration',
      sector: 'Petrochemical',
      client: 'Honeywell',
      location: 'KSA',
      status: 'Completed',
      scope: 'Instrumentation hook-up, wiring, and high-accuracy Flow Meter Skid commissioning'
    },
    {
      sno: '07',
      name: '10km Fiber Optic Cable & Cabinet Deployment',
      sector: 'Telecom & FOC',
      client: 'Detesd / Ericsson',
      location: 'Dammam, KSA',
      status: 'Completed',
      scope: 'FOC excavation, duct laying, cabinet installations, and optical fiber splicing'
    },
    {
      sno: '08',
      name: 'SIL-2 Fire & Gas PLC Control Panel Manufacturing',
      sector: 'Petrochemical',
      client: 'SABIC / Petrokemya',
      location: 'Jubail, KSA',
      status: 'Completed',
      scope: 'Staging, FAT, swing-frame panel modifications & field commissioning'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projectsTableData 
    : projectsTableData.filter(p => p.sector.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section className={`section-lg ${styles.projectsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h4 className="text-secondary">PROVEN TRACK RECORD</h4>
            <h2>100+ Projects Delivered Across the Kingdom</h2>
            <div className={styles.accentLine}></div>
            <p>Proven execution experience across Oil & Gas, Power Generation, Utilities, and Industrial Infrastructure.</p>
          </div>
        </div>

        {/* Featured Project Visual Cards */}
        <div className={styles.projectsGrid}>
          {/* Project 1 (Large) */}
          <div className={`${styles.projectCard} ${styles.projectLarge} animate-fade-up delay-100`}>
            <div className={styles.imgWrapper}>
              <img src="/images/header_projects.jpg" alt="Distribution Management Control Centre" />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.client}>SEC & Siemens</span>
                <span className={styles.location}><MapPin size={14} /> Jeddah, KSA</span>
              </div>
              <h3>Jeddah Distribution Management Control Centre</h3>
              <p>Complete electrical, low voltage, and low current works for a 4,680sqm control centre facility.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className={`${styles.projectCard} animate-fade-up delay-200`}>
            <div className={styles.imgWrapper}>
              <img src="/images/electrical_hv.jpg" alt="Yanbu NGL High Voltage" />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.client}>Saudi Aramco</span>
                <span className={styles.location}><MapPin size={14} /> Yanbu, KSA</span>
              </div>
              <h3>Yanbu NGL High Voltage Cable Replacement</h3>
              <p>25km of 13.4kV feeder cables from power plant to substation.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className={`${styles.projectCard} animate-fade-up delay-300`}>
            <div className={styles.imgWrapper}>
              <img src="/images/tech_expertise.jpg" alt="JHAH Switchgear Upgrade" />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.client}>JHAH</span>
                <span className={styles.location}><MapPin size={14} /> Dhahran, KSA</span>
              </div>
              <h3>LV Switchgear Upgrade at Building 54</h3>
              <p>Complete shutdown, demolition, and installation of new switchgear.</p>
            </div>
          </div>
        </div>

        {/* Structured Engineering Project Directory Table */}
        <div className={styles.tableContainer}>
          <div className={styles.tableHeaderBar}>
            <div>
              <h3>Major Project Executions</h3>
              <p>Verified delivery record for Saudi Arabia's leading energy & industrial entities</p>
            </div>
            <div className={styles.filterTabs}>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabActive : ''}`} 
                onClick={() => setActiveTab('all')}
              >
                All Projects
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'oil' ? styles.tabActive : ''}`} 
                onClick={() => setActiveTab('oil')}
              >
                Oil & Gas
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'power' ? styles.tabActive : ''}`} 
                onClick={() => setActiveTab('power')}
              >
                Power & Grid
              </button>
              <button 
                className={`${styles.tabBtn} ${activeTab === 'petrochemical' ? styles.tabActive : ''}`} 
                onClick={() => setActiveTab('petrochemical')}
              >
                Petrochemical
              </button>
            </div>
          </div>

          <div className={styles.tableResponsiveWrapper}>
            <table className={styles.projectTable}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Project Name & Scope</th>
                  <th>Sector</th>
                  <th>Client</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((proj) => (
                  <tr key={proj.sno}>
                    <td className={styles.snoCell}>{proj.sno}</td>
                    <td>
                      <strong>{proj.name}</strong>
                      <span className={styles.scopeText}>{proj.scope}</span>
                    </td>
                    <td><span className={styles.sectorTag}>{proj.sector}</span></td>
                    <td className={styles.clientName}>{proj.client}</td>
                    <td className={styles.locText}><MapPin size={13} /> {proj.location}</td>
                    <td>
                      <span className={styles.statusBadge}>
                        <CheckCircle2 size={13} /> {proj.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className={styles.bottomCTA}>
          <Link to="/projects" className={styles.primaryBtnLarge}>
            View All Projects Portfolio <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;

