import React, { useEffect } from 'react';
import { AppRoute } from '../hooks/useRoute';

interface SEOManagerProps {
  currentRoute: AppRoute;
  params?: Record<string, string>;
}

export default function SEOManager({ currentRoute, params }: SEOManagerProps) {
  useEffect(() => {
    const defaultTitle = "Medinet Pharmaceutical Marketing Company";
    const defaultDescription = "Enterprise-grade corporate website for Medinet Pharmaceutical Marketing Company, featuring product catalog, R&D innovations, quality assurance, careers, and partnership models.";
    const domain = "https://www.medinetpharma.com";
    
    let title = defaultTitle;
    let description = defaultDescription;
    let path = "/";
    let schemaType = "Organization";
    let additionalSchema: any = null;

    switch (currentRoute) {
      case "home":
        title = "Medinet Pharmaceuticals | Innovation in Healthcare";
        description = "Discover Medinet Pharmaceuticals, delivering high-quality, bioequivalent advanced therapeutics and bridging research with accessibility globally.";
        path = "/";
        break;
      case "about":
        title = "About Us | Medinet Pharmaceuticals";
        description = "Learn about Medinet's mission, history, and commitment to providing world-class pharmaceutical marketing and healthcare accessibility for over 25 years.";
        path = "/#about";
        break;
      case "products":
        title = params?.id ? `Product Details | Medinet Pharmaceuticals` : "Our Products | Medinet Pharmaceuticals";
        description = "Explore Medinet's comprehensive product catalog including cardiovascular, neurology, and gastroenterology therapeutics.";
        path = params?.id ? `/#products?id=${params.id}` : "/#products";
        break;
      case "research-development":
        title = "Research & Development | Medinet Pharmaceuticals";
        description = "Medinet's R&D division focuses on innovative formulations, novel delivery systems, and continuous therapeutic advancements.";
        path = "/#research-development";
        break;
      case "quality":
        title = "Quality Assurance | Medinet Pharmaceuticals";
        description = "Our commitment to quality assurance ensures every Medinet product meets strict WHO-GMP standards for safety, efficacy, and consistency.";
        path = "/#quality";
        break;
      case "business-partners":
        title = "Partners & Distribution | Medinet Pharmaceuticals";
        description = "Join Medinet's global network of business partners. We offer comprehensive distribution, contract manufacturing, and in-licensing opportunities.";
        path = "/#business-partners";
        break;
      case "careers":
        title = "Careers | Medinet Pharmaceuticals";
        description = "Build a rewarding career at Medinet. Explore current openings and join our team of healthcare professionals dedicated to global health.";
        path = "/#careers";
        break;
      case "news-events":
        title = "News & Events | Medinet Pharmaceuticals";
        description = "Stay updated with the latest news, scientific advancements, and corporate events from Medinet Pharmaceuticals.";
        path = "/#news-events";
        break;
      case "contact":
        title = "Contact Us | Medinet Pharmaceuticals";
        description = "Get in touch with Medinet Pharmaceuticals for business inquiries, medical information, and support.";
        path = "/#contact";
        break;
      case "privacy-policy":
      case "terms":
      case "disclaimer":
      case "cookies":
        title = "Legal | Medinet Pharmaceuticals";
        path = `/#${currentRoute}`;
        break;
      default:
        title = defaultTitle;
    }

    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Tags
    const updateMeta = (name: string, content: string, attribute = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', `${domain}/logo.svg`);
    
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:url', `${domain}${path}`, 'property');
    updateMeta('og:type', 'website', 'property');
    updateMeta('og:image', `${domain}/logo.svg`, 'property');

    // 3. Update Canonical URL
    let canonical = document.querySelector(`link[rel="canonical"]`);
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${domain}${path}`);

    // 4. Generate JSON-LD Schema
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Medinet Pharmaceutical Marketing Company",
      "url": domain,
      "logo": `${domain}/logo.svg`,
      "description": defaultDescription,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bandra-Kurla Complex (BKC)",
        "addressLocality": "Mumbai",
        "addressRegion": "MH",
        "postalCode": "400051",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-22-4982-3300",
        "contactType": "customer service",
        "email": "corporate@medinetpharma.com"
      }
    };

    let breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": domain
        }
      ]
    };
    
    if (currentRoute !== 'home') {
      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": title.split(' | ')[0],
        "item": `${domain}${path}`
      });
    }

    // Insert or update script tag for schema
    const updateSchema = (id: string, schema: any) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('id', id);
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.innerHTML = JSON.stringify(schema);
    };

    updateSchema('schema-organization', baseSchema);
    updateSchema('schema-breadcrumb', breadcrumbSchema);
    
    if (currentRoute === 'products' && params?.id) {
       const productSchema = {
          "@context": "https://schema.org",
          "@type": "Drug",
          "name": `Medinet Product ID ${params.id}`,
          "manufacturer": {
            "@type": "Organization",
            "name": "Medinet Pharmaceuticals"
          }
       };
       updateSchema('schema-product', productSchema);
    } else {
       const prodScript = document.getElementById('schema-product');
       if (prodScript) prodScript.remove();
    }

  }, [currentRoute, params]);

  return null; // This component doesn't render anything
}
