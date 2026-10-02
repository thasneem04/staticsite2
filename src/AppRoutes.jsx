import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const isArabicPath = /^\/ar(?:\/|$)/.test(location.pathname);
    const nextLang = isArabicPath ? "ar" : "en";
    if (i18n.language !== nextLang) {
      i18n.changeLanguage(nextLang);
    }
  }, [location.pathname, i18n]);

  const renderRoutes = (prefix = "") => (
    <>
      {prefix ? <Route path={prefix} element={<Home />} /> : null}
      <Route path={`${prefix}/`} element={<Home />} />
      <Route path={`${prefix}/about`} element={<About />} />
      <Route path={`${prefix}/services`} element={<Services />} />
      <Route path={`${prefix}/projects`} element={<Projects />} />
      <Route path={`${prefix}/contact`} element={<Contact />} />
    </>
  );

  return (
    <>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            {renderRoutes("")}
            {renderRoutes("/ar")}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AppRoutes;
