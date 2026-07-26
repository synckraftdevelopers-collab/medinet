/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */




import React, { useState } from "react";
import { useRoute } from "./hooks/useRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import SEOManager from "./components/SEOManager";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import ResearchDevelopment from "./components/pages/ResearchDevelopment";
import Quality from "./components/pages/Quality";
import BusinessPartners from "./components/pages/BusinessPartners";
import Careers from "./components/pages/Careers";
import NewsEvents from "./components/pages/NewsEvents";
import Contact from "./components/pages/Contact";
import LegalPage from "./components/pages/LegalPage";

export default function App() {
  const { currentRoute, params, navigate } = useRoute();
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
  };

  const renderActivePage = () => {
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
  };

  return (
    <div className="min-h-screen bg-[#FCFCFD] flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900">
      <SEOManager currentRoute={currentRoute} params={params} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-5 focus:py-2.5 focus:bg-white focus:text-[#0B1F4D] focus:shadow-2xl focus:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] font-mono text-xs tracking-wider font-bold"
      >
        SKIP TO MAIN CONTENT
      </a>
      <Navbar currentRoute={currentRoute} navigate={navigate} />

      <main id="main-content" role="main" className="flex-1" tabIndex={-1}>
        {renderActivePage()}
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
