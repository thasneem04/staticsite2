import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Monitor, LayoutDashboard, Network, Radio, Wifi } from 'lucide-react';
import styles from './CoreServicesPreview.module.css';

const CoreServicesPreview = () => {
  const services = [
    {
      id: 1,
      title: "PLC Automation & Control Systems",
      desc: "Custom engineered PLC panels with reliable components and clean wiring for precise control, seamless integration and long-term performance.",
      icon: <Settings size={32} />
    },
    {
      id: 2,
      title: "SCADA & RTU System Development",
      desc: "Scalable SCADA & RTU solutions for real-time monitoring, data acquisition, alarm management and enhanced process visibility.",
      icon: <Monitor size={32} />
    },
    {
      id: 3,
      title: "HMI Design & Configuration",
      desc: "Intuitive and user-friendly HMI screens that provide actionable insights and simplify operations for better decision making.",
      icon: <LayoutDashboard size={32} />
    },
    {
      id: 4,
      title: "Industrial Communication Networks",
      desc: "Robust communication architecture using industrial protocols to ensure high-speed and reliable data exchange.",
      icon: <Network size={32} />
    },
    {
      id: 5,
      title: "Remote Monitoring Solutions",
      desc: "Secure remote access and monitoring solutions that enable real-time support, reduced downtime and improved operational control.",
      icon: <Radio size={32} />
    },
    {
      id: 6,
      title: "Industrial IoT Integration",
      desc: "Connect devices and systems, collect critical data and unlock advanced analytics for smarter, data-driven operations.",
      icon: <Wifi size={32} />
    }
  ];

  return (
    <section className={`section-lg ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h4 className="text-secondary">WHAT WE DO</h4>
          <h2>Our Core Services</h2>
          <p>We design, build and deliver smart automation solutions that improve operational efficiency, ensure reliability and drive digital transformation across industries.</p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`${styles.serviceCard} animate-fade-up`} 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.cardNumber}>0{service.id}</div>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to="/services" className={styles.cardLink}>
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
        
        <div className={styles.bottomCTA}>
          <Link to="/services" className={styles.primaryBtnLarge}>
            View All Automation Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesPreview;
