/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NEWS_ITEMS } from "../../data";
import { NewsItem } from "../../types";
import SectionHeader from "../SectionHeader";
import {
  Calendar,
  Tag,
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  Clock,
  MapPin,
  Flame,
  Award,
  Globe,
  Heart
} from "lucide-react";

interface NewsEventsProps {
  params: Record<string, string>;
}

export default function NewsEvents({ params }: NewsEventsProps) {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Parse direct selection from query parameters
  useEffect(() => {
    if (params.id) {
      const found = NEWS_ITEMS.find((n) => n.id === params.id);
      if (found) {
        setSelectedNews(found);
      }
    } else {
      setSelectedNews(null);
    }
  }, [params]);

  const upcomingEvents = [
    {
      title: "CPHI Global Conference 2026",
      date: "October 13 - 15, 2026",
      location: "Fira Barcelona, Spain",
      type: "Conference",
      desc: "Medinet's global regulatory delegation will host booth B42, Hall 5, presenting modern CNS oral formulations."
    },
    {
      title: "14th Annual Neuropathic Pain & CNS Symposium",
      date: "November 05 - 06, 2026",
      location: "Taj Lands End, Mumbai, India",
      type: "Symposium",
      desc: "Hosting medical panels reviewing therapeutic synergy curves of combined nortriptyline and gabapentin therapy."
    },
    {
      title: "South-East Asian Licensing Summit",
      date: "December 12, 2026",
      location: "Suntec Convention Centre, Singapore",
      type: "B2B Summit",
      desc: "Meeting licensed territorial distributors to scale-up multi-channel pharmaceutical supply franchises."
    }
  ];

  const galleryPlaceholders = [
    {
      title: "Rural Health Camp",
      desc: "Free diagnostic screenings & cardiovascular drug distribution.",
      tag: "CSR",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400&h=260"
    },
    {
      title: "WHO Audit Validation",
      desc: "Allied labs QA inspections concluding with zero critical remarks.",
      tag: "Quality",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=260"
    },
    {
      title: "CNS Forum Sponsoring",
      desc: "Over 200 neurologists attending our combined therapy debates.",
      tag: "Academic",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400&h=260"
    }
  ];

  return (
    <div className="pt-20">
      {/* Article Detail View State */}
      {selectedNews ? (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-left">
          <button
            onClick={() => {
              setSelectedNews(null);
              window.location.hash = "#news-events";
            }}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-body hover:text-heading mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News &amp; Events
          </button>

          <header className="mb-8">
            <div className="flex items-center gap-3 text-[10px] font-mono mb-4">
              <span className="bg-alt-bg text-heading border border-border px-3 py-1 rounded font-bold uppercase">
                {selectedNews.category}
              </span>
              <span className="flex items-center gap-1 text-muted">
                <Calendar className="w-3.5 h-3.5" />
                {selectedNews.date}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-heading tracking-tight leading-tight">
              {selectedNews.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-body italic leading-relaxed">
              {selectedNews.excerpt}
            </p>
          </header>

          <div className="prose prose-slate max-w-none text-body text-sm sm:text-base leading-relaxed space-y-6 border-t border-border pt-8">
            <p>{selectedNews.content}</p>
            <p>
              Medinet continues to bolster its presence as a key player in scientific licensing. By collaborating with international clinical consultants, we maintain high standards of comparative bioequivalence indexing and absolute molecular purity. We thank our healthcare affiliates, scientists, and territory distribution teams for helping us bridge science and patient care globally.
            </p>
          </div>

          <footer className="mt-12 pt-8 border-t border-border text-xs text-muted font-mono flex items-center justify-between">
            <span>ESTD 1998 | Medinet Media Desk</span>
            <span>PR ID: PR-{selectedNews.id.slice(-4).toUpperCase()}</span>
          </footer>
        </article>
      ) : (
        /* Regular News Grid & Events Schedule State */
        <>
          {/* Page Header */}
          <section className="bg-background border-b border-border py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-alt-bg border border-border text-body text-[10px] font-mono font-medium tracking-wider uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Corporate Media
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-medium text-heading tracking-tight leading-tight">
                News &amp; Scientific Events
              </h1>
              <p className="mt-4 text-sm sm:text-base text-body leading-relaxed max-w-3xl">
                Stay updated with Medinet&rsquo;s global academic conferences, WHO-GMP facility validations, community healthcare campaigns, and upcoming therapeutic licensing sessions.
              </p>
            </div>
          </section>

          {/* Latest News & CSR Grid */}
          <section className="py-20 bg-white text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                badge="Latest Updates"
                title="Press Releases & CSR Actions"
                description="Browse through our recent corporate highlights, research sponsorings, and rural community medicine distributions."
                centered
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {NEWS_ITEMS.map((news) => (
                  <div
                    key={news.id}
                    className="bg-white border border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm overflow-hidden shadow-sm flex flex-col justify-between animate-fade-in"
                  >
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-3 text-[10px] font-mono mb-4 text-body">
                        <span className="bg-alt-bg text-heading border border-border px-2 py-0.5 rounded font-bold uppercase">
                          {news.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {news.date}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-heading text-base hover:text-heading transition-colors">
                        {news.title}
                      </h3>
                      <p className="mt-4 text-xs text-body leading-relaxed line-clamp-3">
                        {news.excerpt}
                      </p>
                    </div>

                    <div className="p-6 sm:p-8 pt-0 border-t border-border mt-4 flex justify-between items-center bg-background">
                      <span className="text-[10px] font-mono uppercase text-muted">Read complete release</span>
                      <button
                        onClick={() => setSelectedNews(news)}
                        className="w-8 h-8 rounded border border-border text-body hover:text-heading hover:border-primary bg-white flex items-center justify-center shadow-sm transition-colors cursor-pointer"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Upcoming Conferences/Symposiums */}
          <section className="py-20 bg-background border-t border-b border-border text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                badge="On The Horizon"
                title="Upcoming Scientific Conferences"
                description="We participate in high-profile pharmaceutical summits. Schedule a direct meet with our licensing heads at these locations."
                centered
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event, i) => (
                  <div
                    key={i}
                    className="bg-white border border-border p-6 sm:p-8 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm shadow-sm text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] font-mono font-bold uppercase bg-alt-bg text-heading border border-border px-2.5 py-0.5 rounded">
                          {event.type}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-heading text-base">
                        {event.title}
                      </h3>
                      <div className="mt-3 space-y-1.5 text-[10px] font-mono text-muted">
                        <p className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-550 shrink-0" />
                          {event.date}
                        </p>
                        <p className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-550 shrink-0" />
                          {event.location}
                        </p>
                      </div>
                      <p className="mt-4 text-xs text-body leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted">
                      <span className="text-[10px] font-mono uppercase">Schedule a meeting</span>
                      <a href="#contact" className="font-semibold text-heading hover:underline flex items-center gap-1">
                        Contact Sales <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Corporate Event Gallery */}
          <section className="py-20 bg-white text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                badge="Corporate Gallery"
                title="Medinet in Action"
                description="Visual logs of our rural diagnostics missions, regulatory audit passes, and therapeutic research debates."
                centered
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryPlaceholders.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-border rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 shadow-sm overflow-hidden shadow-sm group"
                  >
                    <div className="aspect-[3/2] overflow-hidden bg-alt-bg relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-102 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] font-mono font-medium bg-alt-bg text-heading border border-border px-2 py-0.5 rounded uppercase">
                        {item.tag}
                      </span>
                      <h4 className="font-display font-bold text-heading text-sm mt-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-body mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
