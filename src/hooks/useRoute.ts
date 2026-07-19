/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";

export type AppRoute =
  | "home"
  | "about"
  | "products"
  | "research-development"
  | "quality"
  | "business-partners"
  | "careers"
  | "news-events"
  | "contact"
  | "privacy-policy"
  | "terms"
  | "disclaimer"
  | "cookies"
  | "copyright-notice";

export function useRoute() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>("home");
  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash || "#";
      const path = hash.substring(1); // remove '#'
      
      // Parse query params if any, e.g., #products?category=cardiovascular or #products?search=medivastin
      let cleanPath = path;
      const queryParams: Record<string, string> = {};
      
      if (path.includes("?")) {
        const parts = path.split("?");
        cleanPath = parts[0];
        const searchParams = new URLSearchParams(parts[1]);
        searchParams.forEach((value, key) => {
          queryParams[key] = value;
        });
      }

      setParams(queryParams);

      // Map cleanPath to AppRoute
      if (!cleanPath || cleanPath === "home" || cleanPath === "/") {
        setCurrentRoute("home");
      } else if (cleanPath === "about") {
        setCurrentRoute("about");
      } else if (cleanPath === "products") {
        setCurrentRoute("products");
      } else if (cleanPath === "research-development" || cleanPath === "research") {
        setCurrentRoute("research-development");
      } else if (cleanPath === "quality") {
        setCurrentRoute("quality");
      } else if (cleanPath === "business-partners" || cleanPath === "partners") {
        setCurrentRoute("business-partners");
      } else if (cleanPath === "careers") {
        setCurrentRoute("careers");
      } else if (cleanPath === "news-events" || cleanPath === "news") {
        setCurrentRoute("news-events");
      } else if (cleanPath === "contact") {
        setCurrentRoute("contact");
      } else if (cleanPath === "legal/privacy-policy" || cleanPath === "privacy-policy") {
        setCurrentRoute("privacy-policy");
      } else if (cleanPath === "legal/terms" || cleanPath === "terms") {
        setCurrentRoute("terms");
      } else if (cleanPath === "legal/disclaimer" || cleanPath === "disclaimer") {
        setCurrentRoute("disclaimer");
      } else if (cleanPath === "legal/cookies" || cleanPath === "cookies") {
        setCurrentRoute("cookies");
      } else if (cleanPath === "legal/copyright-notice" || cleanPath === "copyright-notice") {
        setCurrentRoute("copyright-notice");
      } else {
        // Fallback for 404
        setCurrentRoute("home");
      }

      // Smooth scroll to top on page change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Run once on load
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  function navigate(route: string, queryParams?: Record<string, string>) {
    let hash = `#${route}`;
    if (queryParams) {
      const searchStr = new URLSearchParams(queryParams).toString();
      if (searchStr) {
        hash += `?${searchStr}`;
      }
    }
    window.location.hash = hash;
  }

  return { currentRoute, params, navigate };
}
