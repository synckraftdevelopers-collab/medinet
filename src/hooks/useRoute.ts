/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";

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
  const currentRouteRef = useRef<AppRoute>("home");
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

      let targetSection = queryParams.section || queryParams.scrollTo;
      if (cleanPath.includes("#")) {
        const hashParts = cleanPath.split("#");
        cleanPath = hashParts[0];
        if (hashParts[1]) {
          targetSection = hashParts[1];
        }
      }

      setParams(queryParams);

      // Map cleanPath to AppRoute
      let nextRoute: AppRoute = "home";
      if (!cleanPath || cleanPath === "home" || cleanPath === "/") {
        nextRoute = "home";
      } else if (cleanPath === "about") {
        nextRoute = "about";
      } else if (cleanPath === "products") {
        nextRoute = "products";
      } else if (cleanPath === "research-development" || cleanPath === "research") {
        nextRoute = "research-development";
      } else if (cleanPath === "quality") {
        nextRoute = "quality";
      } else if (cleanPath === "business-partners" || cleanPath === "partners") {
        nextRoute = "business-partners";
      } else if (cleanPath === "careers") {
        nextRoute = "careers";
      } else if (cleanPath === "news-events" || cleanPath === "news") {
        nextRoute = "news-events";
      } else if (cleanPath === "contact") {
        nextRoute = "contact";
      } else if (cleanPath === "legal/privacy-policy" || cleanPath === "privacy-policy") {
        nextRoute = "privacy-policy";
      } else if (cleanPath === "legal/terms" || cleanPath === "terms") {
        nextRoute = "terms";
      } else if (cleanPath === "legal/disclaimer" || cleanPath === "disclaimer") {
        nextRoute = "disclaimer";
      } else if (cleanPath === "legal/cookies" || cleanPath === "cookies") {
        nextRoute = "cookies";
      } else if (cleanPath === "legal/copyright-notice" || cleanPath === "copyright-notice") {
        nextRoute = "copyright-notice";
      } else {
        // Fallback for 404
        nextRoute = "home";
      }

      const isSameRoute = currentRouteRef.current === nextRoute;
      currentRouteRef.current = nextRoute;
      setCurrentRoute(nextRoute);

      // Handle smooth scrolling to target sections or top without jumping
      if (targetSection) {
        setTimeout(() => {
          const element = document.getElementById(targetSection);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: isSameRoute ? "smooth" : "instant" });
      }
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
