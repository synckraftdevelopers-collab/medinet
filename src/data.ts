/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, TherapeuticCategory, Job, NewsItem, Leader, PipelineProduct, Office, FaqItem } from "./types";

export const BRAND_INFO = {
  name: "Medinet Pharmaceutical Marketing Company",
  shortName: "Medinet",
  tagline: "Reliable Care, Every Time.",
  established: "1998",
  headquarters: "Corporate Office",
  philosophy: "At Medinet Pharmaceutical Marketing Company, we believe that every medicine we market represents a commitment to a healthier life. Our philosophy is built on four enduring principles: Quality, Trust, Affordability, and Compassion.",
  ceoMessage: "Welcome to Medinet Pharmaceutical Marketing Company.\n\nAt Medinet, we believe that healthcare is more than delivering medicines—it is about improving lives through trust, quality, and compassionate care. Since founding the company, my vision has been to build an organization that provides safe, effective, and affordable healthcare solutions while upholding the highest standards of ethics and professionalism.\n\nEvery milestone we achieve reflects the dedication of our team, the confidence of healthcare professionals, and the trust our partners place in us. We remain committed to supporting doctors, distributors, pharmacies, and healthcare institutions with reliable pharmaceutical solutions that contribute to better patient care and healthier communities.\n\nAs we continue to grow, our focus remains unchanged: to innovate responsibly, strengthen lasting partnerships, and make quality healthcare more accessible to those who need it most.\n\nOn behalf of the entire Medinet family, I thank you for your trust and support. We look forward to serving you with excellence and integrity for many years to come.",
};

export const THERAPEUTIC_CATEGORIES: TherapeuticCategory[] = [
  {
    id: "anti-infectives",
    name: "Anti-Infectives",
    description: "Providing effective antibacterial therapies to support the treatment of infectious diseases.",
    iconName: "ShieldPlus"
  },
  {
    id: "pain-management",
    name: "Pain Management & Anti-Inflammatory Care",
    description: "Advanced formulations to relieve pain, inflammation, and support faster recovery.",
    iconName: "Activity"
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    description: "Providing effective gastrointestinal care for improved digestive health and acid-related disorders.",
    iconName: "Droplet"
  },
  {
    id: "bone-joint-health",
    name: "Bone & Joint Health",
    description: "Comprehensive nutritional and therapeutic solutions for stronger bones, joints, and musculoskeletal wellness.",
    iconName: "Bone"
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Supporting nerve health and neurological well-being through advanced formulations.",
    iconName: "Brain"
  },
  {
    id: "urology",
    name: "Urology",
    description: "Targeted therapy for improved urinary health and patient comfort.",
    iconName: "FlaskConical"
  },
  {
    id: "dermatology",
    name: "Dermatology",
    description: "Specialized topical formulations for wound care and skin infection management.",
    iconName: "Sparkles"
  },
  {
    id: "nutraceuticals",
    name: "Nutraceuticals",
    description: "Nutritional formulations to support overall patient well-being.",
    iconName: "HeartHandshake"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "zefrax-500",
    name: "ZEFRAX 500",
    genericName: "Cefuroxime Axetil 500mg",
    category: "anti-infectives",
    description: "A second-generation cephalosporin antibiotic used to treat a wide variety of bacterial infections.",
    indications: ["Respiratory tract infections", "Urinary tract infections", "Skin and soft tissue infections"],
    dosageForm: "Tablet",
    strength: "500 mg",
    packaging: "10 x 10 Alu-Alu"
  },
  {
    id: "clavinet-625",
    name: "CLAVINET 625",
    genericName: "Amoxicillin 500mg + Clavulanic Acid 125mg",
    category: "anti-infectives",
    description: "A combination penicillin-type antibiotic used to treat a wide variety of bacterial infections.",
    indications: ["Sinusitis", "Pneumonia", "Ear infections", "Bronchitis"],
    dosageForm: "Tablet",
    strength: "625 mg",
    packaging: "10 x 10 Alu-Alu"
  },
  {
    id: "duocef-s",
    name: "DUOCEF-S",
    genericName: "Cefoperazone + Sulbactam",
    category: "anti-infectives",
    description: "A combination of a third-generation cephalosporin and a beta-lactamase inhibitor.",
    indications: ["Severe intra-abdominal infections", "Respiratory tract infections", "Septicemia"],
    dosageForm: "Injection",
    strength: "1.5 g",
    packaging: "1 Vial"
  },
  {
    id: "zeftron",
    name: "ZEFTRON",
    genericName: "Ceftriaxone Injection",
    category: "anti-infectives",
    description: "A broad-spectrum third-generation cephalosporin antibiotic for intravenous or intramuscular administration.",
    indications: ["Meningitis", "Community-acquired pneumonia", "Bone and joint infections"],
    dosageForm: "Injection",
    strength: "1 g",
    packaging: "1 Vial"
  },
  {
    id: "zefrax-iv",
    name: "ZEFRAX-IV",
    genericName: "Cefuroxime Sodium Injection",
    category: "anti-infectives",
    description: "Injectable cephalosporin used for severe infections.",
    indications: ["Surgical prophylaxis", "Severe respiratory infections", "Septicemia"],
    dosageForm: "Injection",
    strength: "1.5 g",
    packaging: "1 Vial"
  },
  {
    id: "proenzy-dt",
    name: "PROENZY DT",
    genericName: "Trypsin + Bromelain + Rutoside Trihydrate",
    category: "pain-management",
    description: "Proteolytic enzymes combination for resolving inflammation and edema.",
    indications: ["Post-operative inflammation", "Traumatic edema", "Sports injuries"],
    dosageForm: "Dispersible Tablet",
    strength: "Standard",
    packaging: "10 x 10 Alu-Alu"
  },
  {
    id: "proenzy-plus",
    name: "PROENZY PLUS",
    genericName: "Trypsin + Bromelain + Rutoside + Diclofenac",
    category: "pain-management",
    description: "Advanced formulation providing potent analgesic and anti-inflammatory action.",
    indications: ["Osteoarthritis", "Rheumatoid arthritis", "Severe inflammatory pain"],
    dosageForm: "Tablet",
    strength: "Standard",
    packaging: "10 x 10 Alu-Alu"
  },
  {
    id: "afidol-p",
    name: "AFIDOL P",
    genericName: "Aceclofenac 100mg + Paracetamol 325mg",
    category: "pain-management",
    description: "A combination medication used for pain relief and fever reduction.",
    indications: ["Musculoskeletal pain", "Dental pain", "Post-operative pain"],
    dosageForm: "Tablet",
    strength: "100mg/325mg",
    packaging: "10 x 10 Blister pack"
  },
  {
    id: "afidol-sp",
    name: "AFIDOL SP",
    genericName: "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg",
    category: "pain-management",
    description: "A triple combination for fast pain relief and reduction of swelling.",
    indications: ["Inflammatory conditions", "Post-traumatic swelling", "Joint pain"],
    dosageForm: "Tablet",
    strength: "100/325/15mg",
    packaging: "10 x 10 Alu-Alu pack"
  },
  {
    id: "etorivon-p",
    name: "ETORIVON P",
    genericName: "Etoricoxib + Paracetamol",
    category: "pain-management",
    description: "A highly selective COX-2 inhibitor with paracetamol for enhanced pain relief.",
    indications: ["Acute gout", "Ankylosing spondylitis", "Severe osteoarthritis"],
    dosageForm: "Tablet",
    strength: "Standard",
    packaging: "10 x 10 Alu-Alu"
  },
  {
    id: "trafidol-p",
    name: "TRAFIDOL P",
    genericName: "Tramadol + Paracetamol",
    category: "pain-management",
    description: "A combination of a centrally acting synthetic opioid analgesic and paracetamol.",
    indications: ["Moderate to severe acute pain", "Post-surgical pain"],
    dosageForm: "Tablet",
    strength: "37.5mg/325mg",
    packaging: "10 x 10 Blister pack"
  },
  {
    id: "xpraz-d",
    name: "XPRAZ-D",
    genericName: "Pantoprazole + Domperidone",
    category: "gastroenterology",
    description: "Proton pump inhibitor and antiemetic combination for effective acid reflux management.",
    indications: ["GERD", "Dyspepsia", "Peptic ulcer disease"],
    dosageForm: "Capsule",
    strength: "40mg/30mg SR",
    packaging: "10 x 10 Alu-Alu"
  },
  {
    id: "osteoneu-d3",
    name: "OSTEONEU D3",
    genericName: "Cholecalciferol (Vitamin D3) 60,000 IU",
    category: "bone-joint-health",
    description: "High-dose vitamin D supplement for the treatment of vitamin D deficiency.",
    indications: ["Vitamin D deficiency", "Osteoporosis support", "Osteomalacia"],
    dosageForm: "Softgel Capsule",
    strength: "60,000 IU",
    packaging: "10 x 1x4 Blister"
  },
  {
    id: "osteoneu-plus",
    name: "OSTEONEU PLUS",
    genericName: "Calcium Citrate Malate + Calcitriol + Zinc + Magnesium",
    category: "bone-joint-health",
    description: "Comprehensive nutritional supplement for stronger bones and joints.",
    indications: ["Calcium deficiency", "Pregnancy & Lactation", "Bone fracture healing"],
    dosageForm: "Tablet",
    strength: "Standard",
    packaging: "10 x 10 Alu-Alu"
  },
  {
    id: "neurise-nt",
    name: "NEURISE NT",
    genericName: "Pregabalin + Nortriptyline",
    category: "neurology",
    description: "Combination therapy for the management of neuropathic pain.",
    indications: ["Diabetic peripheral neuropathy", "Post-herpetic neuralgia", "Fibromyalgia"],
    dosageForm: "Tablet",
    strength: "75mg/10mg",
    packaging: "10 x 10 Alu-Alu"
  },
  {
    id: "silalpha",
    name: "SILALPHA",
    genericName: "Silodosin 8mg",
    category: "urology",
    description: "Targeted alpha-1 adrenoceptor antagonist for urinary health.",
    indications: ["Benign prostatic hyperplasia (BPH) symptoms", "Urinary retention"],
    dosageForm: "Capsule",
    strength: "8 mg",
    packaging: "10 x 10 Alu-Alu"
  },
  {
    id: "metvion-p-ointment",
    name: "METVION-P Ointment",
    genericName: "Povidone Iodine Ointment",
    category: "dermatology",
    description: "Specialized topical formulation for wound care and skin infection management.",
    indications: ["Minor cuts and burns", "Skin infections", "Wound dressing"],
    dosageForm: "Ointment",
    strength: "5% w/w",
    packaging: "15g Tube"
  }
];

export const PIPELINE: PipelineProduct[] = [
  {
    id: "med-401",
    name: "MED-401 (Cardioshield SR)",
    category: "Cardiovascular",
    phase: "Phase III",
    indication: "Long-acting multi-pathway hyperlipidemia blocker with PCSK9-regulating adjunct formulation",
    progress: 75
  },
  {
    id: "med-509",
    name: "MED-509 (Neuro-Synapse)",
    category: "Neurology & CNS",
    phase: "Phase II",
    indication: "Novel formulation targeting neuro-regeneration post-stroke and mild cognitive impairment protection",
    progress: 50
  },
  {
    id: "med-223",
    name: "MED-223 (Gastro-Regulate)",
    category: "Gastroenterology",
    phase: "Phase III",
    indication: "Next-generation potassium-competitive acid blocker (P-CAB) for severe erosive esophagitis",
    progress: 85
  },
  {
    id: "med-702",
    name: "MED-702 (Dermo-Barrier Duo)",
    category: "Dermatology",
    phase: "Phase I",
    indication: "Nano-emulsion topical system for steroid-sparing localized plaque psoriasis management",
    progress: 25
  },
  {
    id: "med-112",
    name: "MED-112 (Respi-Fine Inhaler)",
    category: "Respiratory & Pulmonology",
    phase: "Regulatory Filing",
    indication: "Triple-combination (ICS/LABA/LAMA) dry powder inhaler for advanced refractory COPD",
    progress: 95
  }
];

export const LEADERSHIP: Leader[] = [
  {
    id: "mr-harish-k",
    name: "Mr. Harish K",
    role: "Founder & Chief Executive Officer (CEO)",
    qualification: "Founder",
    bio: "Since founding the company, my vision has been to build an organization that provides safe, effective, and affordable healthcare solutions while upholding the highest standards of ethics and professionalism.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export const STATS = [
  { value: "25+", label: "Years of Trust" },
  { value: "150+", label: "Therapeutic Formulations" },
  { value: "18+", label: "Global Country Footprints" },
  { value: "450+", label: "Dedicated Distributors" },
  { value: "100%", label: "WHO-GMP Compliant Partners" },
  { value: "10M+", label: "Happy Patients Served Annually" }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-product-launches",
    title: "Product Launches",
    category: "News",
    date: "August 20, 2026",
    excerpt: "Read our press releases on the latest therapeutic additions to the Medinet portfolio.",
    content: "Read our press releases on the latest therapeutic additions to the Medinet portfolio. We continuously expand our formulations to address emerging healthcare challenges."
  },
  {
    id: "news-conferences",
    title: "Conferences & Seminars",
    category: "Event",
    date: "August 10, 2026",
    excerpt: "Discover where our leadership and R&D teams will be speaking next.",
    content: "Discover where our leadership and R&D teams will be speaking next. We actively participate in medical conferences and global pharmaceutical seminars."
  },
  {
    id: "news-corporate-announcements",
    title: "Corporate Announcements",
    category: "News",
    date: "July 25, 2026",
    excerpt: "Stay updated on our global expansion plans, new manufacturing alliances, and regulatory achievements.",
    content: "Stay updated on our global expansion plans, new manufacturing alliances, and regulatory achievements that drive our strategic growth."
  },
  {
    id: "news-csr",
    title: "CSR Initiatives",
    category: "CSR",
    date: "June 15, 2026",
    excerpt: "Learn how Medinet is giving back to communities through health camps and educational programs.",
    content: "Learn how Medinet is giving back to communities through health camps, educational programs, and sustainable initiatives."
  }
];

export const JOBS: Job[] = [
  {
    id: "job-msr",
    title: "Medical Sales Representative (MSR)",
    department: "Sales",
    location: "Various Locations",
    type: "Full-time",
    experience: "1 - 3 Years",
    description: "Promote Medinet's product portfolio to healthcare professionals and generate prescriptions.",
    requirements: [
      "B.Sc / B.Pharm degree.",
      "Excellent communication and interpersonal skills.",
      "Willingness to travel extensively within the assigned territory."
    ]
  },
  {
    id: "job-abm",
    title: "Area Business Manager (ABM)",
    department: "Sales & Marketing",
    location: "Bengaluru / Coimbatore",
    type: "Full-time",
    experience: "3 - 5 Years",
    description: "Lead a team of Medical Sales Representatives, monitor sales targets, and build relationships with key opinion leaders.",
    requirements: [
      "B.Pharm or Science Graduate, preferably with an MBA.",
      "Proven track record of pharmaceutical sales leadership.",
      "Strong analytical and team management skills."
    ]
  },
  {
    id: "job-rsm",
    title: "Regional Sales Manager (RSM)",
    department: "Sales",
    location: "South India Region",
    type: "Full-time",
    experience: "7 - 10 Years",
    description: "Oversee operations across multiple areas, drive regional growth strategies, and ensure optimal market penetration.",
    requirements: [
      "Extensive experience in pharmaceutical sales management.",
      "Strategic planning and execution capabilities.",
      "Excellent networking and negotiation skills."
    ]
  },
  {
    id: "job-product-manager",
    title: "Product Manager",
    department: "Marketing",
    location: "Corporate Office",
    type: "Full-time",
    experience: "4 - 6 Years",
    description: "Develop and execute brand strategies, create marketing materials, and train the sales force on product positioning.",
    requirements: [
      "B.Pharm + MBA in Marketing.",
      "Experience in brand management and product launches.",
      "Creative thinking and strong scientific knowledge."
    ]
  },
  {
    id: "job-hr",
    title: "Human Resources",
    department: "HR",
    location: "Corporate Office",
    type: "Full-time",
    experience: "3 - 5 Years",
    description: "Manage recruitment, employee relations, performance management, and organizational development initiatives.",
    requirements: [
      "MBA in HR or relevant degree.",
      "Strong understanding of labor laws and HR best practices.",
      "Excellent interpersonal and communication skills."
    ]
  },
  {
    id: "job-marketing-exec",
    title: "Marketing Executive",
    department: "Marketing",
    location: "Corporate Office",
    type: "Full-time",
    experience: "1 - 3 Years",
    description: "Assist in executing marketing campaigns, coordinating promotional activities, and market research.",
    requirements: [
      "B.Sc / B.Pharm or BBA.",
      "Strong analytical and communication skills.",
      "Proficiency in digital marketing tools is a plus."
    ]
  },
  {
    id: "job-admin",
    title: "Administration",
    department: "Administration",
    location: "Corporate Office",
    type: "Full-time",
    experience: "2 - 4 Years",
    description: "Oversee office operations, facilities management, and administrative support for various departments.",
    requirements: [
      "Bachelor's degree in any discipline.",
      "Experience in office administration and vendor management.",
      "Strong organizational and multitasking abilities."
    ]
  },
  {
    id: "job-finance",
    title: "Finance & Accounts",
    department: "Finance",
    location: "Corporate Office",
    type: "Full-time",
    experience: "3 - 5 Years",
    description: "Manage accounting, financial reporting, taxation, and budget preparation.",
    requirements: [
      "B.Com / M.Com or CA Inter.",
      "Proficiency in accounting software and MS Excel.",
      "Strong analytical and numerical skills."
    ]
  },
  {
    id: "job-regulatory",
    title: "Regulatory Affairs",
    department: "Regulatory",
    location: "Corporate Office",
    type: "Full-time",
    experience: "4 - 6 Years",
    description: "Ensure compliance with national and international pharmaceutical regulations and manage dossier submissions.",
    requirements: [
      "B.Pharm / M.Pharm degree.",
      "In-depth knowledge of regulatory guidelines (FDA, WHO-GMP).",
      "Experience in dossier preparation and regulatory filings."
    ]
  },
  {
    id: "job-qa",
    title: "Quality Assurance",
    department: "Quality",
    location: "Corporate Office",
    type: "Full-time",
    experience: "3 - 6 Years",
    description: "Implement and monitor quality management systems, conduct audits, and ensure adherence to quality standards.",
    requirements: [
      "B.Pharm / M.Pharm or M.Sc in Chemistry.",
      "Experience in pharmaceutical quality assurance.",
      "Knowledge of GMP and ISO standards."
    ]
  }
];

export const OFFICES: Office[] = [
  {
    name: "Corporate Office",
    type: "Corporate",
    address: "Medinet Pharmaceutical Marketing Company, Mumbai, Maharashtra",
    phone: "+91 XXXXX XXXXX",
    email: "corporate@medinetpharma.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4802875143365!2d72.86178381533042!3d19.042617787108137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8be00000001%3A0xbd8e2d67d7cbfe0e!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1626500000000!5m2!1sen!2sin"
  },
  {
    name: "Regional Office - Coimbatore",
    type: "Regional",
    address: "Coimbatore, Tamil Nadu",
    phone: "+91 XXXXX XXXXX",
    email: "coimbatore@medinetpharma.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3262413159043!2d76.953683!3d11.015243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a8501e74f1%3A0xbd8e5c62df!2sCoimbatore!5e0!3m2!1sen!2sin!4v1626500000001!5m2!1sen!2sin"
  },
  {
    name: "Regional Office - Bengaluru",
    type: "Regional",
    address: "Bengaluru, Karnataka",
    phone: "+91 XXXXX XXXXX",
    email: "bengaluru@medinetpharma.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0432245314!2d77.6743123!3d12.8456123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c62aaaaaaab%3A0xbd8e5c62df!2sElectronic%20City!5e0!3m2!1sen!2sin!4v1626500000002!5m2!1sen!2sin"
  },
  {
    name: "Regional Office - Dharmapuri",
    type: "Regional",
    address: "Dharmapuri, Tamil Nadu",
    phone: "+91 XXXXX XXXXX",
    email: "dharmapuri@medinetpharma.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3262413159043!2d78.15!3d12.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a8501e74f1%3A0xbd8e5c62df!2sDharmapuri!5e0!3m2!1sen!2sin!4v1626500000003!5m2!1sen!2sin"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Does Medinet Pharmaceutical Marketing Company carry out third-party contract manufacturing?",
    answer: "Yes, Medinet partners with select WHO-GMP, EU-GMP, and USFDA-approved contract manufacturing plants. We handle full formulation development, technology transfer, raw material sourcing, regulatory document dossiers preparation (including CTD format), quality assurance validation, and final product packaging."
  },
  {
    question: "How does Medinet ensure product bioequivalence and pharmaceutical efficacy?",
    answer: "Every formulation launched by Medinet undergoes strict comparative bioequivalence (BE) and bioavailability studies against original global reference innovated products in accredited laboratories. We verify standard pharmacokinetic values (Cmax, Tmax, AUC) to guarantee absolute therapeutic equivalence before batch scale-up."
  },
  {
    question: "Are there franchise, PCD (Propaganda Cum Distribution), or regional distributorship options available?",
    answer: "Absolutely. Medinet offers exclusive monopoly distribution and franchise options in unoccupied domestic and international territories. We support our partners with comprehensive medical literature, visual aids, physician samples, and regulatory support for product registration in respective countries."
  },
  {
    question: "What is Medinet's protocol for reporting Adverse Drug Reactions (ADR)?",
    answer: "As part of our robust Pharmacovigilance Program, health professionals, patients, or distributors can report suspected drug safety events or side effects using our website's Pharmacovigilance Contact Form or directly emailing pve@medinetpharma.com. All reports are immediately reviewed by our drug safety specialists and logged into national drug safety databases."
  },
  {
    question: "Are Medinet products available directly to individual consumers or retail buyers?",
    answer: "No, as an enterprise pharmaceutical marketing company, Medinet does not sell prescription formulations directly to individual consumers. Our formulations are distributed exclusively through licensed medical institutions, pharmacies, registered government suppliers, and authorized commercial drug distributors."
  }
];
