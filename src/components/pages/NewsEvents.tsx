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
          <section className="py-16 relative overflow-hidden bg-gradient-to-b from-background via-alt-bg to-white border-b border-border">
            {/* Subtle blurred radial glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>

            {/* Optional Decoration: Soft blurred circle behind heading */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[rgba(37,99,235,0.05)] rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10">
              <div className="animate-fade-in">
                <span className="utility-badge-blue mb-5">
                  <Newspaper className="w-3 h-3 text-primary" />
                  Corporate Media
                </span>
              </div>
              
              <div className="animate-fade-in">
                <h1 className="text-4xl sm:text-5xl font-display font-bold text-heading tracking-tight leading-tight">
                  News &amp; <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Scientific Events</span>
                </h1>
                <p className="mt-6 text-sm sm:text-base text-body leading-relaxed max-w-[760px]">
                  Stay updated with Medinet&rsquo;s global academic conferences, WHO-GMP facility validations, community healthcare campaigns, and upcoming therapeutic licensing sessions.
                </p>
              </div>

              {/* Optional Info Badges Below Description */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full shadow-sm hover:-translate-y-1 transition-transform duration-300 ease-out cursor-default group">
                  <div className="bg-primary/10 p-1.5 rounded-full flex items-center justify-center">
                    <Presentation className="w-3 h-3 text-primary group-hover:scale-110 transition-transform duration-300 ease-out" />
                  </div>
                  <span className="text-xs font-semibold text-heading">Conference</span>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full shadow-sm hover:-translate-y-1 transition-transform duration-300 ease-out cursor-default group">
                  <div className="bg-accent/10 p-1.5 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-accent group-hover:scale-110 transition-transform duration-300 ease-out" />
                  </div>
                  <span className="text-xs font-semibold text-heading">WHO-GMP</span>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full shadow-sm hover:-translate-y-1 transition-transform duration-300 ease-out cursor-default group">
                  <div className="bg-[#D97706]/10 p-1.5 rounded-full flex items-center justify-center">
                    <FlaskConical className="w-3 h-3 text-[#D97706] group-hover:scale-110 transition-transform duration-300 ease-out" />
                  </div>
                  <span className="text-xs font-semibold text-heading">Research</span>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full shadow-sm hover:-translate-y-1 transition-transform duration-300 ease-out cursor-default group">
                  <div className="bg-secondary/10 p-1.5 rounded-full flex items-center justify-center">
                    <Globe2 className="w-3 h-3 text-secondary group-hover:scale-110 transition-transform duration-300 ease-out" />
                  </div>
                  <span className="text-xs font-semibold text-heading">Global Events</span>
                </div>
              </div>
            </div>
          </section>

          {/* Latest News & CSR Grid */}
          <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-alt-bg to-background text-left border-b border-border">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <SectionHeader
                badge="Latest Updates"
                title="Press Releases & CSR Actions"
                description="Browse through our recent corporate highlights, research sponsorings, and rural community medicine distributions."
                centered
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
                {NEWS_ITEMS.map((news) => {
                  let BadgeIcon = Newspaper;
                  let CardIcon = Building2;
                  let badgeBg = "bg-alt-bg";
                  let badgeText = "text-muted";

                  if (news.category === "Conference") {
                    BadgeIcon = Presentation;
                    CardIcon = Presentation;
                    badgeBg = "bg-primary/10";
                    badgeText = "text-primary";
                  } else if (news.category === "News") {
                    BadgeIcon = Newspaper;
                    CardIcon = Building2;
                    badgeBg = "bg-accent/10";
                    badgeText = "text-accent";
                  } else if (news.category === "CSR") {
                    BadgeIcon = HeartHandshake;
                    CardIcon = HeartHandshake;
                    badgeBg = "bg-[#D97706]/10";
                    badgeText = "text-[#D97706]";
                  } else if (news.category === "Event") {
                    BadgeIcon = CalendarDays;
                    CardIcon = Microscope;
                    badgeBg = "bg-secondary/10";
                    badgeText = "text-secondary";
                  }

                  return (
                    <div
                      key={news.id}
                      className="utility-card hover:border-secondary transition-all duration-300 ease-out overflow-hidden flex flex-col justify-between group"
                    >
                      <div className="p-6 sm:p-8">
                        <div className="flex items-center justify-between mb-6">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${badgeBg} ${badgeText} text-[10px] font-mono font-bold uppercase tracking-widest`}>
                            <BadgeIcon className="w-3 h-3" />
                            {news.category}
                          </span>
                          
                          <div className="w-[40px] h-[40px] rounded-[12px] bg-white border border-border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ease-out shadow-sm">
                            <CardIcon className={`w-4 h-4 ${badgeText}`} />
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono font-semibold mb-4 text-muted uppercase tracking-widest">
                          <CalendarDays className="w-3.5 h-3.5" />
                          {news.date}
                        </div>

                        <h3 className="font-display font-bold text-heading text-lg sm:text-xl leading-tight hover:text-primary transition-colors cursor-pointer" onClick={() => setSelectedNews(news)}>
                          {news.title}
                        </h3>
                        <p className="mt-4 text-sm text-body leading-relaxed line-clamp-3">
                          {news.excerpt}
                        </p>
                      </div>

                      <div className="p-6 sm:p-8 pt-5 border-t border-border bg-alt-bg/50 flex justify-between items-center group-hover:bg-white transition-colors duration-300">
                        <button
                          onClick={() => setSelectedNews(news)}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-secondary transition-colors cursor-pointer group/link border-none bg-transparent p-0"
                        >
                          Read Full Release
                          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                        </button>
                        
                        <button
                          onClick={() => setSelectedNews(news)}
                          className="w-[42px] h-[42px] rounded-full bg-primary/5 border border-primary/20 text-primary flex items-center justify-center transition-all duration-300 cursor-pointer group-hover/link:bg-primary group-hover/link:text-white hover:bg-primary hover:text-white hover:shadow-md"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Upcoming Conferences/Symposiums */}
          <section className="py-20 relative overflow-hidden bg-background text-left border-b border-border">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <SectionHeader
                badge="On The Horizon"
                title="Upcoming Scientific Conferences"
                description="We participate in high-profile pharmaceutical summits. Schedule a direct meet with our licensing heads at these locations."
                centered
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
                {upcomingEvents.map((event, i) => {
                  let BadgeIcon = Presentation;
                  let badgeBg = "bg-primary/10";
                  let badgeText = "text-primary";

                  if (event.type === "Symposium") {
                    BadgeIcon = Microscope;
                    badgeBg = "bg-secondary/10";
                    badgeText = "text-secondary";
                  } else if (event.type === "B2B Summit") {
                    BadgeIcon = Handshake;
                    badgeBg = "bg-accent/10";
                    badgeText = "text-accent";
                  }
                  
                  // Optional Status Tag logic
                  let statusTag = null;
                  if (i === 0) statusTag = { text: "Upcoming", bg: "bg-primary/10", color: "text-primary" };
                  if (i === 1) statusTag = { text: "Featured", bg: "bg-[#D97706]/10", color: "text-[#D97706]" };
                  if (i === 2) statusTag = { text: "Confirmed", bg: "bg-accent/10", color: "text-accent" };

                  return (
                    <div
                      key={i}
                      className="utility-card p-6 sm:p-8 text-left flex flex-col justify-between group relative hover:border-secondary transition-all duration-300"
                    >
                      {statusTag && (
                        <div className="absolute top-6 right-6">
                          <span className={`inline-block px-3 py-1 rounded-full ${statusTag.bg} ${statusTag.color} text-[9px] font-mono font-bold uppercase tracking-widest`}>
                            {statusTag.text}
                          </span>
                        </div>
                      )}

                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-alt-bg border border-border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ease-out shadow-sm">
                            <BadgeIcon className={`w-4 h-4 ${badgeText}`} />
                          </div>
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${badgeBg} ${badgeText} text-[10px] font-mono font-bold uppercase tracking-widest`}>
                            {event.type}
                          </span>
                        </div>
                        
                        <h3 className="font-display font-bold text-heading text-lg sm:text-xl leading-tight hover:text-primary transition-colors pr-16">
                          {event.title}
                        </h3>
                        
                        <div className="mt-5 space-y-3 text-xs font-mono font-semibold uppercase tracking-wider">
                          <p className="flex items-center gap-2.5 text-body">
                            <CalendarDays className="w-4 h-4 text-primary shrink-0" />
                            {event.date}
                          </p>
                          <p className="flex items-center gap-2.5 text-muted">
                            <MapPin className="w-4 h-4 text-accent shrink-0" />
                            {event.location}
                          </p>
                        </div>
                        
                        <p className="mt-5 text-sm text-body leading-relaxed">
                          {event.desc}
                        </p>
                      </div>
                      
                      <div className="mt-8 pt-5 border-t border-border bg-alt-bg/50 -mx-6 sm:-mx-8 px-6 sm:px-8 -mb-6 sm:-mb-8 pb-6 sm:pb-8 flex items-center justify-between group-hover:bg-white transition-colors duration-300">
                        <a href="#contact" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-secondary transition-colors group/link">
                          <CalendarPlus className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                          Schedule Meeting
                        </a>
                        <a href="#contact" className="inline-flex items-center gap-2 h-10 px-4 bg-primary/5 border border-primary/20 rounded-full text-xs font-semibold text-primary hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 group/btn shadow-sm hover:shadow-md">
                          Contact Sales 
                          <ArrowRight className="w-4 h-4 text-primary group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Corporate Event Gallery */}
          <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-alt-bg to-white text-left">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.04)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <SectionHeader
                badge="Corporate Gallery"
                title="Medinet in Action"
                description="Visual logs of our rural diagnostics missions, regulatory audit passes, and therapeutic research debates."
                centered
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {galleryPlaceholders.map((item, idx) => {
                  let BadgeIcon = HeartHandshake;
                  let badgeBg = "bg-alt-bg";
                  let badgeText = "text-muted";
                  
                  if (item.tag === "CSR") {
                    BadgeIcon = HeartHandshake;
                    badgeBg = "bg-accent/10";
                    badgeText = "text-accent";
                  } else if (item.tag === "Quality") {
                    BadgeIcon = BadgeCheck;
                    badgeBg = "bg-primary/10";
                    badgeText = "text-primary";
                  } else if (item.tag === "Academic") {
                    BadgeIcon = GraduationCap;
                    badgeBg = "bg-secondary/10";
                    badgeText = "text-secondary";
                  }

                  let statusTag = null;
                  if (item.tag === "CSR") statusTag = { text: "Completed", bg: "bg-success/10", color: "text-success" }; 
                  if (item.tag === "Quality") statusTag = { text: "WHO-GMP Passed", bg: "bg-primary/10", color: "text-primary" };
                  if (item.tag === "Academic") statusTag = { text: "Live Event", bg: "bg-secondary/10", color: "text-secondary" };

                  return (
                    <div
                      key={idx}
                      className="utility-card hover:border-secondary transition-all duration-300 ease-out overflow-hidden flex flex-col justify-between group relative p-0"
                    >
                      <div className="aspect-[3/2] overflow-hidden bg-alt-bg relative rounded-t-[24px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-heading/40 to-transparent z-10 pointer-events-none"></div>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {statusTag && (
                          <div className="absolute top-4 right-4 z-20">
                            <span className={`inline-block px-3 py-1.5 rounded-full ${statusTag.bg} ${statusTag.color} border border-${statusTag.color.replace('text-', '')}/20 bg-white/90 backdrop-blur-sm text-[9px] font-mono font-bold uppercase tracking-widest shadow-sm`}>
                              {statusTag.text}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6 sm:p-8">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-10 h-10 rounded-xl bg-alt-bg border border-border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ease-out shadow-sm">
                            <BadgeIcon className={`w-4 h-4 ${badgeText}`} />
                          </div>
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${badgeBg} ${badgeText} text-[10px] font-mono font-bold uppercase tracking-widest`}>
                            {item.tag}
                          </span>
                        </div>
                        
                        <h4 className="font-display font-bold text-heading text-lg hover:text-primary transition-colors cursor-pointer">
                          {item.title}
                        </h4>
                        <p className="text-sm text-body mt-3 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-2 pt-4 border-t border-border bg-alt-bg/50 p-6 sm:px-8 flex items-center justify-between group-hover:bg-white transition-colors duration-300">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted">View Full Details</span>
                        <button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/5 border border-primary/20 text-primary transition-all duration-300 cursor-pointer group-hover:bg-primary group-hover:text-white hover:shadow-md">
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
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
