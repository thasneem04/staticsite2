import React from 'react';
import Hero from '../components/home/Hero';
import CompanyIntro from '../components/home/CompanyIntro';
import TrustValue from '../components/home/TrustValue';
import CoreServicesPreview from '../components/home/CoreServicesPreview';
import FacilityTechnology from '../components/home/FacilityTechnology';
import StatementBanner from '../components/home/StatementBanner';
import ExpertiseGrid from '../components/home/ExpertiseGrid';
import ElectricalInstrumentation from '../components/home/ElectricalInstrumentation';
import ProjectsShowcase from '../components/home/ProjectsShowcase';
import PanelSolutions from '../components/home/PanelSolutions';
import MajorClients from '../components/home/MajorClients';
import QualityCertifications from '../components/home/QualityCertifications';
import Industries from '../components/home/Industries';
import WhyChooseACS from '../components/home/WhyChooseACS';
import PreFooterCTA from '../components/home/PreFooterCTA';

const Home = () => {
  return (
    <div className="home-page-grand-redesign">
      <Hero />
      <CompanyIntro />
      <TrustValue />
      <CoreServicesPreview />
      <FacilityTechnology />
      <StatementBanner />
      <ExpertiseGrid />
      <ElectricalInstrumentation />
      <ProjectsShowcase />
      <PanelSolutions />
      <MajorClients />
      <QualityCertifications />
      <Industries />
      <WhyChooseACS />
      <PreFooterCTA />
    </div>
  );
};

export default Home;

