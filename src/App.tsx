/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */




import React, { useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { useRoute } from "./hooks/useRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import SEOManager from "./components/SEOManager";
import BackgroundEffects from "./components/BackgroundEffects";

// Keep Home statically imported for instant initial LCP on landing page
import Home from "./components/pages/Home";

// Dynamically import offscreen pages for bundle code splitting
const PageLoader = () => (
  <div className="min-h-[70vh] flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-secondary/20 border-t-secondary animate-spin" />
      <span className="text-xs text-muted font-mono tracking-widest uppercase">Loading...</span>
    </div>
  </div>
);

const About = dynamic(() => import("./components/pages/About"), { loading: () => <PageLoader /> });
const Products = dynamic(() => import("./components/pages/Products"), { loading: () => <PageLoader /> });
const ResearchDevelopment = dynamic(() => import("./components/pages/ResearchDevelopment"), { loading: () => <PageLoader /> });
const Quality = dynamic(() => import("./components/pages/Quality"), { loading: () => <PageLoader /> });
const BusinessPartners = dynamic(() => import("./components/pages/BusinessPartners"), { loading: () => <PageLoader /> });
const Careers = dynamic(() => import("./components/pages/Careers"), { loading: () => <PageLoader /> });
const NewsEvents = dynamic(() => import("./components/pages/NewsEvents"), { loading: () => <PageLoader /> });
const Contact = dynamic(() => import("./components/pages/Contact"), { loading: () => <PageLoader /> });
const LegalPage = dynamic(() => import("./components/pages/LegalPage"), { loading: () => <PageLoader /> });

export default function App() {
  const { currentRoute, params, navigate } = useRoute();
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = useCallback((message: string, type: "success" | "error") => {
    setToast({ message, type });
  }, []);

  const activePage = useMemo(() => {
    switch (currentRoute) {
      case "home":
        return <Home navigate={navigate} />;
      case "about":
        return <About />;
      case "products":
        return <Products params={params} showToast={showToast} />;
      case "research-development":
        return <ResearchDevelopment />;
      case "quality":
        return <Quality />;
      case "business-partners":
        return <BusinessPartners showToast={showToast} />;
      case "careers":
        return <Careers showToast={showToast} />;
      case "news-events":
        return <NewsEvents params={params} />;
      case "contact":
        return <Contact showToast={showToast} params={params} />;
      case "privacy-policy":
      case "terms":
      case "disclaimer":
      case "cookies":
        return <LegalPage type={currentRoute} />;
      default:
        return <Home navigate={navigate} />;
    }
  }, [currentRoute, params, navigate, showToast]);

  return (
    <div className="min-h-screen bg-[#FCFCFD] flex flex-col justify-between selection:bg-secondary selection:text-white relative overflow-hidden">
      <BackgroundEffects />
      <SEOManager currentRoute={currentRoute} params={params} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-5 focus:py-2.5 focus:bg-white focus:text-[#0B1F4D] focus:shadow-2xl focus:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] font-mono text-xs tracking-wider font-bold"
      >
        SKIP TO MAIN CONTENT
      </a>
      <Navbar currentRoute={currentRoute} navigate={navigate} />

      <main id="main-content" role="main" className="flex-1" tabIndex={-1}>
        {activePage}
      </main>

      <Footer navigate={navigate} showToast={showToast} />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
