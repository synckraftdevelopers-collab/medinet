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
  Heart,
  Newspaper,
  Presentation,
  ShieldCheck,
  FlaskConical,
  Globe2,
  CalendarDays,
  Microscope,
  Building2,
  HeartHandshake,
  CalendarPlus,
  Handshake,
  ArrowRight,
  PhoneCall,
  BadgeCheck,
  ImageIcon,
  GraduationCap
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
          <section className="py-16 relative overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#F3F7FC_55%,#FFFFFF_100%)] border-b border-[#E2E8F0]">
            {/* Subtle blurred radial glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>

            {/* Optional Decoration: Soft blurred circle behind heading */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[rgba(37,99,235,0.05)] rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_8px_20px_rgba(37,99,235,.08)]">
                  <Newspaper className="w-3 h-3 text-[#2563EB]" />
                  Corporate Media
                </span>
              </div>
              
              <div className="animate-fade-in">
                <h1 className="text-4xl sm:text-5xl font-display font-medium text-[#0F172A] tracking-tight leading-tight [text-shadow:0_2px_10px_rgba(15,23,42,0.06)]">
                  News &amp; <span className="bg-[linear-gradient(90deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">Scientific Events</span>
                </h1>
                <p className="mt-6 text-sm sm:text-base text-[#475569] leading-[1.8] max-w-[760px]">
                  Stay updated with Medinet&rsquo;s global academic conferences, WHO-GMP facility validations, community healthcare campaigns, and upcoming therapeutic licensing sessions.
                </p>
              </div>

              {/* Optional Info Badges Below Description */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-full shadow-[0_10px_24px_rgba(15,23,42,.06)] hover:-translate-y-1 transition-transform duration-[300ms] ease-out cursor-default group">
                  <div className="bg-[#DBEAFE] p-1 rounded-full flex items-center justify-center">
                    <Presentation className="w-3 h-3 text-[#2563EB] group-hover:scale-[1.08] transition-transform duration-[300ms] ease-out" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#0F172A]">Conference</span>
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-full shadow-[0_10px_24px_rgba(15,23,42,.06)] hover:-translate-y-1 transition-transform duration-[300ms] ease-out cursor-default group">
                  <div className="bg-[#DCFCE7] p-1 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-[#0D9488] group-hover:scale-[1.08] transition-transform duration-[300ms] ease-out" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#0F172A]">WHO-GMP</span>
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-full shadow-[0_10px_24px_rgba(15,23,42,.06)] hover:-translate-y-1 transition-transform duration-[300ms] ease-out cursor-default group">
                  <div className="bg-[#FEF3C7] p-1 rounded-full flex items-center justify-center">
                    <FlaskConical className="w-3 h-3 text-[#D97706] group-hover:scale-[1.08] transition-transform duration-[300ms] ease-out" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#0F172A]">Research</span>
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-full shadow-[0_10px_24px_rgba(15,23,42,.06)] hover:-translate-y-1 transition-transform duration-[300ms] ease-out cursor-default group">
                  <div className="bg-[#EDE9FE] p-1 rounded-full flex items-center justify-center">
                    <Globe2 className="w-3 h-3 text-[#7C3AED] group-hover:scale-[1.08] transition-transform duration-[300ms] ease-out" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#0F172A]">Global Events</span>
                </div>
              </div>
            </div>
          </section>

          {/* Latest News & CSR Grid */}
          <section className="py-20 relative overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#F4F8FD_55%,#FFFFFF_100%)] text-left">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16 relative">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_10px_24px_rgba(37,99,235,.08)]">
                  <Newspaper className="w-3 h-3 text-[#2563EB]" />
                  Latest Updates
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
                  Press Releases &amp; <span className="bg-[linear-gradient(90deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">CSR Actions</span>
                </h2>
                
                <p className="mt-4 text-[#475569] text-sm sm:text-base leading-[1.8] max-w-[720px] mx-auto">
                  Browse through our recent corporate highlights, research sponsorings, and rural community medicine distributions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {NEWS_ITEMS.map((news) => {
                  let BadgeIcon = Newspaper;
                  let CardIcon = Building2;
                  let badgeBg = "bg-[#F1F5F9]";
                  let badgeText = "text-[#64748B]";

                  if (news.category === "Conference") {
                    BadgeIcon = Presentation;
                    CardIcon = Presentation;
                    badgeBg = "bg-[#DBEAFE]";
                    badgeText = "text-[#2563EB]";
                  } else if (news.category === "News") {
                    BadgeIcon = Newspaper;
                    CardIcon = Building2;
                    badgeBg = "bg-[#DCFCE7]";
                    badgeText = "text-[#0D9488]";
                  } else if (news.category === "CSR") {
                    BadgeIcon = HeartHandshake;
                    CardIcon = HeartHandshake;
                    badgeBg = "bg-[#FEF3C7]";
                    badgeText = "text-[#D97706]";
                  } else if (news.category === "Event") {
                    BadgeIcon = CalendarDays;
                    CardIcon = Microscope;
                    badgeBg = "bg-[#EDE9FE]";
                    badgeText = "text-[#7C3AED]";
                  }

                  return (
                    <div
                      key={news.id}
                      className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[22px] shadow-[0_18px_40px_rgba(15,23,42,.06)] hover:-translate-y-[8px] hover:border-[#93C5FD] hover:shadow-[0_30px_70px_rgba(37,99,235,.12)] transition-all duration-[300ms] ease-out overflow-hidden flex flex-col justify-between group/card"
                    >
                      <div className="p-6 sm:p-8">
                        <div className="flex items-center justify-between mb-6">
                          <span className={`inline-flex items-center gap-1.5 px-[14px] py-[6px] rounded-full ${badgeBg} ${badgeText} text-[10px] font-mono font-[600] uppercase tracking-wide`}>
                            <BadgeIcon className="w-3 h-3" />
                            {news.category}
                          </span>
                          
                          <div className="w-[40px] h-[40px] rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 group-hover/card:scale-[1.1] transition-transform duration-[300ms] ease-out">
                            <CardIcon className={`w-4 h-4 ${badgeText}`} />
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-[11px] font-mono mb-4 text-[#64748B] uppercase tracking-wide">
                          <CalendarDays className="w-3.5 h-3.5" />
                          {news.date}
                        </div>

                        <h3 className="font-display font-[700] text-[#0F172A] text-lg sm:text-xl leading-tight hover:text-[#2563EB] transition-colors cursor-pointer" onClick={() => setSelectedNews(news)}>
                          {news.title}
                        </h3>
                        <p className="mt-4 text-sm text-[#475569] leading-[1.75] line-clamp-3">
                          {news.excerpt}
                        </p>
                      </div>

                      <div className="p-6 sm:p-8 pt-5 border-t border-[#E2E8F0] bg-[#F8FAFC] flex justify-between items-center group-hover/card:bg-white transition-colors duration-[300ms]">
                        <button
                          onClick={() => setSelectedNews(news)}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer group/link border-none bg-transparent p-0"
                        >
                          Read Full Release
                          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5 transition-transform duration-[300ms]" />
                        </button>
                        
                        <button
                          onClick={() => setSelectedNews(news)}
                          className="w-[42px] h-[42px] rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center transition-all duration-[300ms] cursor-pointer group-hover/link:bg-[#2563EB] group-hover/link:text-white hover:bg-[#2563EB] hover:text-white"
                        >
                          <ArrowUpRight className="w-4 h-4 hover:scale-[1.08]" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Upcoming Conferences/Symposiums */}
          <section className="py-20 relative overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#F5F9FF_55%,#FFFFFF_100%)] text-left">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16 relative">
                <span className="inline-flex items-center gap-1.5 px-[18px] py-[8px] rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_10px_24px_rgba(37,99,235,.08)]">
                  <CalendarDays className="w-3 h-3 text-[#2563EB]" />
                  On The Horizon
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
                  Upcoming <span className="bg-[linear-gradient(90deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">Scientific Conferences</span>
                </h2>
                
                <p className="mt-4 text-[#475569] text-sm sm:text-base leading-[1.8] max-w-[720px] mx-auto">
                  We participate in high-profile pharmaceutical summits. Schedule a direct meet with our licensing heads at these locations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event, i) => {
                  let BadgeIcon = Presentation;
                  let badgeBg = "bg-[#DBEAFE]";
                  let badgeText = "text-[#2563EB]";

                  if (event.type === "Symposium") {
                    BadgeIcon = Microscope;
                    badgeBg = "bg-[#EDE9FE]";
                    badgeText = "text-[#7C3AED]";
                  } else if (event.type === "B2B Summit") {
                    BadgeIcon = Handshake;
                    badgeBg = "bg-[#DCFCE7]";
                    badgeText = "text-[#0D9488]";
                  }
                  
                  // Optional Status Tag logic
                  let statusTag = null;
                  if (i === 0) statusTag = { text: "Upcoming", bg: "bg-[#DBEAFE]", color: "text-[#2563EB]" };
                  if (i === 1) statusTag = { text: "Featured", bg: "bg-[#FEF3C7]", color: "text-[#D97706]" };
                  if (i === 2) statusTag = { text: "Confirmed", bg: "bg-[#DCFCE7]", color: "text-[#0D9488]" };

                  return (
                    <div
                      key={i}
                      className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[24px] shadow-[0_20px_45px_rgba(15,23,42,.06)] hover:-translate-y-[8px] hover:border-[#93C5FD] hover:shadow-[0_35px_80px_rgba(37,99,235,.12)] transition-all duration-[300ms] ease-out p-6 sm:p-8 text-left flex flex-col justify-between group/card relative"
                    >
                      {statusTag && (
                        <div className="absolute top-6 right-6">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full ${statusTag.bg} ${statusTag.color} text-[9px] font-mono font-medium uppercase tracking-wider`}>
                            {statusTag.text}
                          </span>
                        </div>
                      )}

                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-[40px] h-[40px] rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 group-hover/card:scale-[1.1] transition-transform duration-[300ms] ease-out">
                            <BadgeIcon className={`w-4 h-4 ${badgeText}`} />
                          </div>
                          <span className={`inline-flex items-center gap-1.5 px-[14px] py-[6px] rounded-full ${badgeBg} ${badgeText} text-[10px] font-mono font-[600] uppercase tracking-wide`}>
                            {event.type}
                          </span>
                        </div>
                        
                        <h3 className="font-display font-[700] text-[#0F172A] text-lg sm:text-xl leading-tight hover:text-[#2563EB] transition-colors pr-16">
                          {event.title}
                        </h3>
                        
                        <div className="mt-4 space-y-2.5 text-[11px] font-mono">
                          <p className="flex items-center gap-2 text-[#475569]">
                            <CalendarDays className="w-4 h-4 text-[#2563EB] shrink-0" />
                            {event.date}
                          </p>
                          <p className="flex items-center gap-2 text-[#64748B]">
                            <MapPin className="w-4 h-4 text-[#0D9488] shrink-0" />
                            {event.location}
                          </p>
                        </div>
                        
                        <p className="mt-5 text-sm text-[#475569] leading-[1.75]">
                          {event.desc}
                        </p>
                      </div>
                      
                      <div className="mt-8 pt-5 border-t border-[#E2E8F0] bg-[#F8FAFC] -mx-6 sm:-mx-8 px-6 sm:px-8 -mb-6 sm:-mb-8 pb-6 sm:pb-8 flex items-center justify-between">
                        <a href="#contact" className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group/link">
                          <CalendarPlus className="w-4 h-4 group-hover/link:scale-[1.1] transition-transform duration-[300ms]" />
                          Schedule Meeting
                        </a>
                        <a href="#contact" className="inline-flex items-center gap-2 h-[42px] px-[18px] bg-[#EFF6FF] border border-[#BFDBFE] rounded-full text-xs font-semibold text-[#2563EB] hover:bg-[linear-gradient(90deg,#2563EB,#1D4ED8)] hover:text-white hover:border-transparent transition-all duration-[300ms] group/btn shadow-[0_4px_14px_rgba(37,99,235,0)] hover:shadow-[0_8px_20px_rgba(37,99,235,.2)]">
                          Contact Sales 
                          <ArrowRight className="w-4 h-4 text-[#2563EB] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform duration-[300ms]" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Corporate Event Gallery */}
          <section className="py-20 relative overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#F4F8FD_55%,#FFFFFF_100%)] text-left">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16 relative">
                <span className="inline-flex items-center gap-1.5 px-[18px] py-[8px] rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B1F4D] text-[10px] font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_12px_30px_rgba(37,99,235,.08)]">
                  <ImageIcon className="w-3 h-3 text-[#2563EB]" />
                  Corporate Gallery
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0F172A] tracking-tight leading-tight">
                  <span className="bg-[linear-gradient(180deg,#2563EB,#38BDF8)] text-transparent bg-clip-text">Medinet in Action</span>
                </h2>
                
                <p className="mt-4 text-[#475569] text-sm sm:text-base leading-[1.8] max-w-[760px] mx-auto">
                  Visual logs of our rural diagnostics missions, regulatory audit passes, and therapeutic research debates.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryPlaceholders.map((item, idx) => {
                  let BadgeIcon = HeartHandshake;
                  let badgeBg = "bg-[#F1F5F9]";
                  let badgeText = "text-[#64748B]";
                  
                  if (item.tag === "CSR") {
                    BadgeIcon = HeartHandshake;
                    badgeBg = "bg-[#DCFCE7]";
                    badgeText = "text-[#0D9488]";
                  } else if (item.tag === "Quality") {
                    BadgeIcon = BadgeCheck;
                    badgeBg = "bg-[#DBEAFE]";
                    badgeText = "text-[#2563EB]";
                  } else if (item.tag === "Academic") {
                    BadgeIcon = GraduationCap;
                    badgeBg = "bg-[#EDE9FE]";
                    badgeText = "text-[#7C3AED]";
                  }

                  let statusTag = null;
                  if (item.tag === "CSR") statusTag = { text: "Completed", bg: "bg-[#DCFCE7]", color: "text-[#10B981]" }; // Using emerald text based on design system mapping usually #10B981 or similar green
                  if (item.tag === "Quality") statusTag = { text: "WHO-GMP Passed", bg: "bg-[#DBEAFE]", color: "text-[#2563EB]" };
                  if (item.tag === "Academic") statusTag = { text: "Live Event", bg: "bg-[#EDE9FE]", color: "text-[#7C3AED]" };

                  return (
                    <div
                      key={idx}
                      className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[24px] shadow-[0_18px_45px_rgba(15,23,42,.06)] hover:-translate-y-[10px] hover:border-[#93C5FD] hover:shadow-[0_35px_80px_rgba(37,99,235,.12)] transition-all duration-[300ms] ease-out overflow-hidden flex flex-col justify-between group/card relative"
                    >
                      <div className="aspect-[3/2] overflow-hidden bg-alt-bg relative">
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,31,77,.25),transparent_40%)] z-10 pointer-events-none"></div>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover/card:scale-[1.05] transition-transform duration-[500ms]"
                          referrerPolicy="no-referrer"
                        />
                        {statusTag && (
                          <div className="absolute top-4 right-4 z-20">
                            <span className={`inline-block px-2.5 py-1 rounded-full ${statusTag.bg} ${statusTag.color} text-[9px] font-mono font-bold uppercase tracking-wider shadow-sm`}>
                              {statusTag.text}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-[40px] h-[40px] rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 group-hover/card:scale-[1.1] transition-transform duration-[300ms] ease-out">
                            <BadgeIcon className={`w-4 h-4 ${badgeText}`} />
                          </div>
                          <span className={`inline-flex items-center gap-1.5 px-[14px] py-[6px] rounded-full ${badgeBg} ${badgeText} text-[10px] font-mono font-[600] uppercase tracking-wide`}>
                            {item.tag}
                          </span>
                        </div>
                        
                        <h4 className="font-display font-[700] text-[#0F172A] text-base hover:text-[#2563EB] transition-colors cursor-pointer">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#475569] mt-2 leading-[1.75]">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-[#E2E8F0] bg-[#F8FAFC] p-[18px] flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase text-[#64748B]">View Full Details</span>
                        <button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] transition-all duration-[300ms] cursor-pointer group-hover/card:bg-[linear-gradient(90deg,#2563EB,#1D4ED8)] group-hover/card:text-white hover:shadow-[0_4px_12px_rgba(37,99,235,.3)]">
                          <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-0.5 transition-transform duration-[300ms]" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
