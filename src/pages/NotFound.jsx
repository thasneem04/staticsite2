import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const NotFound = () => {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'ar' ? '/ar' : '';

  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <SEO 
        title={t('seo.404Title')}
        description={t('seo.404Desc')}
        path={`${prefix}/404`}
      />
      <h1 style={{ fontSize: '3rem', color: '#0b4a36', marginBottom: '20px' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#334155' }}>{t('seo.404Title').split(' |')[0]}</h2>
      <p style={{ maxWidth: '500px', margin: '0 auto 40px', color: '#64748b' }}>
        {t('seo.404Desc')}
      </p>
      <Link 
        to={`${prefix}/`} 
        style={{ 
          display: 'inline-block', 
          backgroundColor: '#0b4a36', 
          color: 'white', 
          padding: '12px 30px', 
          borderRadius: '4px', 
          textDecoration: 'none', 
          fontWeight: '600' 
        }}
      >
        {t('nav.home')}
      </Link>
    </div>
  );
};

export default NotFound;
