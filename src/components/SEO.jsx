import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ title, description, path, schema }) => {
  const siteUrl = 'https://acsarabia.com';
  const url = `${siteUrl}${path}`;
  const defaultImage = `${siteUrl}/images/hero_grand.webp`;

  const { i18n, t } = useTranslation();
  const lang = i18n.language || 'en';
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const siteName = lang === 'ar' ? 'شركة تازز للتحكم آلي الصناعية' : 'ACS Arabia';

  return (
    <Helmet htmlAttributes={{ lang, dir }}>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Hreflang Tags for Bilingual SEO */}
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${path.replace(/^\/ar/, '') || '/'}`} />
      <link rel="alternate" hrefLang="ar-SA" href={`${siteUrl}${path.replace(/^\/ar/, '') === '/' ? '/ar/' : '/ar' + path.replace(/^\/ar/, '')}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${path.replace(/^\/ar/, '') || '/'}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:alt" content={t('images.social')} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      {/* Google Site Verification */}
      {import.meta.env.VITE_GOOGLE_SITE_VERIFICATION && (
        <meta name="google-site-verification" content={import.meta.env.VITE_GOOGLE_SITE_VERIFICATION} />
      )}

      {/* Google Analytics 4 */}
      {import.meta.env.VITE_GA_MEASUREMENT_ID && (
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`}></script>
      )}
      {import.meta.env.VITE_GA_MEASUREMENT_ID && (
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${import.meta.env.VITE_GA_MEASUREMENT_ID}');
          `}
        </script>
      )}

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
