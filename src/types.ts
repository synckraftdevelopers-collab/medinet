/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  genericName: string;
  category: string;
  description: string;
  indications: string[];
  dosageForm: string; // e.g., "Tablet", "Capsule", "Injection", "Suspension"
  strength: string; // e.g., "500mg", "10mg/ml"
  packaging: string; // e.g., "10x10 Blister", "30ml Bottle"
  image?: string;
}

export interface TherapeuticCategory {
  id: string;
  name: string;
  description: string;
  iconName: string; // Lucide icon name
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // e.g., "Full-time", "Contract"
  experience: string;
  description: string;
  requirements: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  category: "News" | "Event" | "CSR" | "Conference";
  date: string;
  excerpt: string;
  content: string;
  image?: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  qualification: string;
  bio: string;
  image: string;
}

export interface PipelineProduct {
  id: string;
  name: string;
  category: string;
  phase: "Phase I" | "Phase II" | "Phase III" | "Regulatory Filing" | "Approved";
  indication: string;
  progress: number; // 0 to 100 for visual bars
}

export interface Office {
  name: string;
  type: "Corporate" | "Regional" | "Manufacturing";
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
