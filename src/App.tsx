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
        return <Contact showToast={showToast} />;
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
      <Navbar currentRoute={currentRoute} navigate={navigate} />

      <main className="flex-1">
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
