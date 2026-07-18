/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, TherapeuticCategory, Job, NewsItem, Leader, PipelineProduct, Office, FaqItem } from "./types";

export const BRAND_INFO = {
  name: "Medinet Pharmaceutical Marketing Company",
  shortName: "Medinet Pharmaceuticals",
  tagline: "Bridging Science and Patient Care through Quality Therapeutics",
  established: "1998",
  headquarters: "Mumbai, Maharashtra, India",
  philosophy: "To ensure that high-quality, advanced therapeutics are made accessible and affordable to patients worldwide, adhering to global regulatory guidelines and manufacturing excellence.",
  ceoMessage: "For over two decades, Medinet has stood at the intersection of medical innovation and commercial execution. Our core focus lies in identifying critical healthcare gaps and bridging them with premium, bioequivalent, and novel formulations. As we expand our footprint globally, our commitment to ethics, scientific integrity, and uncompromised quality remains the ultimate driver of our success. We thank our healthcare partners, researchers, and global distributors for their persistent trust in the Medinet name.",
};

export const THERAPEUTIC_CATEGORIES: TherapeuticCategory[] = [
  {
    id: "cardiovascular",
    name: "Cardiovascular",
    description: "Advanced cardioselective therapies, lipid-lowering agents, and anti-hypertensives designed to manage coronary artery disease and heart failure.",
    iconName: "Activity"
  },
  {
    id: "neurology-cns",
    name: "Neurology & CNS",
    description: "Specialized central nervous system modulators, neuropathic pain relievers, and neuroprotective agents targeting critical brain disorders.",
    iconName: "Brain"
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    description: "Proton pump inhibitors, prokinetics, anti-spasmodics, and gut-health solutions restoring gastrointestinal balance.",
    iconName: "Droplet"
  },
  {
    id: "dermatology",
    name: "Dermatology",
    description: "Premium therapeutic topical formulations, anti-fungals, corticosteroids, and advanced skin-barrier restorative creams.",
    iconName: "Sparkles"
  },
  {
    id: "anti-infectives",
    name: "Anti-infectives & Antibiotics",
    description: "Broad-spectrum cephalosporins, macrolides, and fluoroquinolones addressing drug-resistant bacterial strains and acute infections.",
    iconName: "ShieldAlert"
  },
  {
    id: "respiratory",
    name: "Respiratory & Pulmonology",
    description: "Inhalation formulations, long-acting bronchodilators, and anti-asthmatics for chronic obstructive pulmonary diseases (COPD).",
    iconName: "Wind"
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Pain Management",
    description: "Highly selective COX-2 inhibitors, chondroprotective agents, and muscle relaxants restoring joint mobility and relieving chronic pain.",
    iconName: "Bone"
  },
  {
    id: "nutraceuticals",
    name: "Nutraceuticals & Wellness",
    description: "Evidence-based micronutrient formulations, high-potency antioxidants, and bioactive vitamins for comprehensive preventative wellness.",
    iconName: "HeartHandshake"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "medivastin-20",
    name: "Medivastin 20",
    genericName: "Atorvastatin Calcium Trihydrate IP",
    category: "cardiovascular",
    description: "A highly selective, competitive inhibitor of HMG-CoA reductase, the rate-limiting enzyme that converts 3-hydroxy-3-methylglutaryl-coenzyme A to mevalonate, a precursor of cholesterol.",
    indications: [
      "Primary hypercholesterolemia (heterozygous familial and non-familial)",
      "Mixed dyslipidemia (Fredrickson Types IIa and IIb)",
      "Reduction of risk of myocardial infarction, stroke, and revascularization procedures in clinically diagnosed coronary artery disease patients."
    ],
    dosageForm: "Tablet",
    strength: "20 mg",
    packaging: "10 x 14 Tablets Alu-Alu Blister"
  },
  {
    id: "cardipril-am",
    name: "Cardipril AM",
    genericName: "Ramipril IP 5mg + Amlodipine Besylate IP 5mg",
    category: "cardiovascular",
    description: "A synergistic dual-mechanism anti-hypertensive agent combining a long-acting Angiotensin-Converting Enzyme (ACE) inhibitor with a calcium channel blocker for superior blood pressure control.",
    indications: [
      "Moderate to severe essential hypertension",
      "Patients whose blood pressure is not adequately controlled with monotherapy",
      "Reduction in cardiovascular risk in patients with established atherothrombotic cardiovascular disease."
    ],
    dosageForm: "Capsule",
    strength: "5mg / 5mg",
    packaging: "10 x 10 Alu-Alu pack"
  },
  {
    id: "gabax-nt",
    name: "Gabax NT",
    genericName: "Gabapentin 300mg + Nortriptyline Hydrochloride 10mg",
    category: "neurology-cns",
    description: "Combines an alpha-2-delta ligand (Gabapentin) with a tricyclic antidepressant (Nortriptyline) to deliver intensive synergism for neuropathic pain alleviation.",
    indications: [
      "Post-herpetic neuralgia",
      "Painful diabetic peripheral neuropathy",
      "Fibromyalgia and nerve compression syndromes."
    ],
    dosageForm: "Tablet",
    strength: "300mg / 10mg",
    packaging: "10 x 10 Tablets in Alu-Alu strip"
  },
  {
    id: "neuroprotect-cit",
    name: "Neuroprotect CIT",
    genericName: "Citicoline Sodium IP 500mg",
    category: "neurology-cns",
    description: "A complex organic molecule that serves as an essential intermediate in the biosynthesis of structural phospholipids of cell membranes, particularly phosphatidylcholine.",
    indications: [
      "Acute phase of stroke (Ischemic cerebral infarction)",
      "Traumatic brain injury and cognitive impairment of vascular origin",
      "Co-therapy in Parkinson's disease and senile dementia."
    ],
    dosageForm: "Tablet",
    strength: "500 mg",
    packaging: "10 x 10 Alu-Alu Premium pack"
  },
  {
    id: "pantomed-d",
    name: "Pantomed D",
    genericName: "Pantoprazole Sodium Sesquihydrate BP 40mg + Domperidone IP 30mg SR",
    category: "gastroenterology",
    description: "A fixed-dose combination containing an irreversible proton pump inhibitor (Pantoprazole) and a peripheral dopamine receptor antagonist (Domperidone) in a sustained-release capsule formulation.",
    indications: [
      "Gastroesophageal Reflux Disease (GERD) unresponsive to pantoprazole monotherapy",
      "Erosive esophagitis with associated hyperacidity and dyspepsia",
      "Prophylaxis of NSAID-induced gastric ulcers and chronic reflux esophagitis."
    ],
    dosageForm: "Sustained-Release Capsule",
    strength: "40mg / 30mg SR",
    packaging: "10 x 10 Capsules in Alu-Alu strip"
  },
  {
    id: "spasmorel-me",
    name: "Spasmorel ME",
    genericName: "Mebeverine Hydrochloride IP 200mg Sustained Release",
    category: "gastroenterology",
    description: "A musculotropic spasmolytic agent with a direct effect on the smooth muscle of the gastrointestinal tract, especially the colon, without disturbing normal intestinal motility.",
    indications: [
      "Symptomatic treatment of irritable bowel syndrome (IBS)",
      "Abdominal pain, spasms, and post-prandial discomfort associated with functional bowel disorders",
      "Gastrointestinal spasm secondary to organic diseases."
    ],
    dosageForm: "Sustained-Release Capsule",
    strength: "200 mg SR",
    packaging: "10 x 15 Capsules in Alu-Alu"
  },
  {
    id: "dermacort-m",
    name: "Dermacort M",
    genericName: "Mometasone Furoate USP 0.1% w/w + Mupirocin USP 2.0% w/w",
    category: "dermatology",
    description: "An advanced dermatological ointment containing a medium-potency topical corticosteroid combined with a structurally unique natural antibacterial agent for inflamed, infected lesions.",
    indications: [
      "Inflammatory dermatoses with secondary bacterial infections (e.g., infected eczema, impetigo)",
      "Atopic dermatitis or psoriasis showing signs of bacterial colonization",
      "Minor traumatic wounds, abrasions, and infected surgical incisions."
    ],
    dosageForm: "Cream / Ointment",
    strength: "0.1% + 2.0% w/w",
    packaging: "15g Laminated Aluminium Tube"
  },
  {
    id: "clindashield-gel",
    name: "Clindashield Gel",
    genericName: "Clindamycin Phosphate USP 1.0% w/w + Adapalene USP 0.1% w/w",
    category: "dermatology",
    description: "Dual-active topical gel combining a highly efficacious lincosamide antibiotic with a third-generation synthetic retinoid, addressing both inflammatory acne and follicular hyperkeratinization.",
    indications: [
      "Acne Vulgaris of mild to moderate severity, targeting both inflammatory papules and comedones",
      "Superficial folliculitis and sebaceous gland hyper-activity."
    ],
    dosageForm: "Gel",
    strength: "1.0% / 0.1% w/w",
    packaging: "20g Laminated Tube"
  },
  {
    id: "cefonet-o-200",
    name: "Cefonet O 200",
    genericName: "Cefixime Trihydrate IP 200mg + Ofloxacin IP 200mg",
    category: "anti-infectives",
    description: "An ultra-broad-spectrum oral antibiotic formulation combining a third-generation oral cephalosporin with a synthetic fluoroquinolone, securing double-action bacterial wall and DNA synthesis disruption.",
    indications: [
      "Complicated typhoid fever (enteric fever) resistant to conventional therapies",
      "Severe acute respiratory tract infections, chronic bronchitis exacerbations",
      "Uncomplicated and complicated urinary tract infections, and intra-abdominal infections."
    ],
    dosageForm: "Tablet",
    strength: "200mg / 200mg",
    packaging: "10 x 10 Tablets in Alu-Alu strip"
  },
  {
    id: "montemac-fx",
    name: "Montemac FX",
    genericName: "Montelukast Sodium 10mg + Fexofenadine Hydrochloride 120mg",
    category: "respiratory",
    description: "A dual-action anti-asthmatic and anti-allergic combination. Montelukast selectively inhibits cysteinyl leukotriene CysLT1 receptors, while Fexofenadine serves as a non-sedating H1 receptor antagonist.",
    indications: [
      "Prophylaxis and chronic treatment of bronchial asthma",
      "Seasonal and perennial allergic rhinitis with concurrent respiratory congestion",
      "Allergic bronchospasm and exercise-induced bronchoconstriction."
    ],
    dosageForm: "Tablet",
    strength: "10mg / 120mg",
    packaging: "10 x 10 Alu-Alu Blister"
  },
  {
    id: "etoric-120",
    name: "Etoric 120",
    genericName: "Etoricoxib IP 120mg",
    category: "orthopedics",
    description: "A highly selective oral cyclooxygenase-2 (COX-2) inhibitor, providing deep analgesic and anti-inflammatory action with minimal gastrointestinal mucosal toxicity compared to non-selective NSAIDs.",
    indications: [
      "Acute gouty arthritis pain and inflammation",
      "Rheumatoid arthritis, osteoarthritis, and ankylosing spondylitis symptomatic control",
      "Acute post-operative dental and orthopedic pain management."
    ],
    dosageForm: "Tablet",
    strength: "120 mg",
    packaging: "10 x 10 Tablets in Blister Pack"
  },
  {
    id: "medical-d3",
    name: "Medical D3 Nano",
    genericName: "Cholecalciferol (Vitamin D3) 60,000 IU",
    category: "nutraceuticals",
    description: "A high-potency oral formulation of Vitamin D3 delivered in soft gelatin capsules or liquid nano-droplets for optimal lipid-phase systemic absorption.",
    indications: [
      "Treatment and prevention of clinical Vitamin D deficiency",
      "Secondary prevention of senile osteoporosis and osteomalacia",
      "Adjuvant therapy in hypocalcemia, chronic fatigue syndrome, and low bone mineral density."
    ],
    dosageForm: "Soft Gelatin Capsule",
    strength: "60,000 IU",
    packaging: "10 x 4 Capsules Alu-Alu"
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
    id: "dr-anand-sharma",
    name: "Dr. Anand Sharma, MD, PhD",
    role: "Founder & Executive Chairman",
    qualification: "MD (Cardiology) - AIIMS, PhD (Pharmacology) - University of Oxford",
    bio: "Dr. Sharma founded Medinet with a vision to integrate scientific research with robust global pharmaceutical marketing. Under his stellar guidance, Medinet transitioned from a domestic trading hub into an international brand with presence across 15+ countries.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "mrs-priya-patel",
    name: "Mrs. Priya Patel, MBA",
    role: "Chief Executive Officer (CEO)",
    qualification: "MBA in International Healthcare Management - Wharton School of Business",
    bio: "With over 20 years of experience in pharmaceutical licensing, corporate scaling, and global distribution logistics, Priya leads Medinet's overall commercial expansion and strategic alliance portfolio.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "dr-rahul-deshmukh",
    name: "Dr. Rahul Deshmukh, M.Pharm, PhD",
    role: "Director of Research & Development",
    qualification: "PhD in Pharmaceutical Sciences - National Institute of Pharmaceutical Education & Research (NIPER)",
    bio: "Dr. Deshmukh supervises our formulation development teams, ensuring bioequivalence studies, stability analyses, and drug delivery systems match global pharmacopeia standards (IP, BP, USP).",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "ms-sarah-jenkins",
    name: "Ms. Sarah Jenkins, MS, CQE",
    role: "Global Head of Quality & Regulatory Affairs",
    qualification: "MS in Pharmaceutical Quality Systems - Temple University, Certified Quality Engineer (ASQ)",
    bio: "Sarah governs Medinet's absolute adherence to WHO-GMP and international regulatory policies. She leads all FDA/WHO inspections, pharmacovigilance logging, and QC lab protocol alignments.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
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
    id: "news-cphi-global-2026",
    title: "Medinet to Showcase Advanced Therapeutic Portfolio at CPHI Global 2026",
    category: "Conference",
    date: "July 02, 2026",
    excerpt: "Medinet's executive delegation announces its participation in the upcoming CPHI Global Conference, showcasing newer drug delivery mechanisms in CNS and Cardiology.",
    content: "We are thrilled to present our expanded product pipeline at Booth B42, Hall 5 during CPHI Global 2026. Our scientific team will showcase advanced drug release systems, micro-emulsion gels for topical dermatology, and customized manufacturing services. This conference serves as a key channel to lock-in newer distribution and licensing alliances across Latin America and Europe."
  },
  {
    id: "news-gmp-recertification",
    title: "Medinet Allied Manufacturing Facilities Secure WHO-GMP Recertification",
    category: "News",
    date: "May 18, 2026",
    excerpt: "Medinet's primary allied formulation facility passes comprehensive multi-day regulatory audit with zero critical observations, validating outstanding quality control benchmarks.",
    content: "We are proud to announce that our primary strategic manufacturing site has successfully concluded its triennial WHO-GMP and international standards audit with zero non-conformances. The rigorous inspection evaluated physical plant hygiene, computer-system validations, raw materials tracing, batch packaging integrity, and QC laboratory instrumentation compliance."
  },
  {
    id: "news-csr-health-camp",
    title: "Medinet CSR: Launching Free Diagnostic and Medication Distribution Camps",
    category: "CSR",
    date: "April 10, 2026",
    excerpt: "Underscoring our core belief in patient care, Medinet launches rural health initiatives, providing free cardiac diagnostic checkups and life-saving anti-hypertensives.",
    content: "As part of our commitment to social equity, Medinet's Community Welfare Wing completed a massive three-district rural healthcare camp. Over 4,500 families received diagnostic screenings, cardiograms, and a full three-month supply of chronic disease medications (atorvastatin, ramipril, and wellness nutraceuticals) completely free of cost."
  },
  {
    id: "news-neurology-symposium",
    title: "Sponsoring the 14th National Neuropathic Pain & CNS Symposium",
    category: "Event",
    date: "March 05, 2026",
    excerpt: "Medinet hosts scientific research forum, facilitating panel discussions among top physicians regarding advanced combined therapies for painful diabetic neuropathy.",
    content: "The symposium gathered over 200 neurologists and endocrinologists to discuss modern therapeutic guidelines. Our clinical researchers presented peer-reviewed data on the pharmacokinetic profile of Gabapentin and Nortriptyline combined therapy, demonstrating faster onset times and reduced CNS sedation compared to standard single-drug regimes."
  }
];

export const JOBS: Job[] = [
  {
    id: "job-qa-executive",
    title: "Senior Executive - Quality Assurance & Validation",
    department: "Quality Assurance",
    location: "Mumbai HQ",
    type: "Full-time",
    experience: "4 - 7 Years",
    description: "Responsible for reviewing batch manufacturing records, executing equipment validation protocols, managing change control logging, and maintaining overall compliance with WHO-GMP and FDA regulations.",
    requirements: [
      "B.Pharm / M.Pharm degree in Pharmaceutical Chemistry or Quality Systems.",
      "Thorough understanding of HPLC, GC, and wet chemistry analytical validation principles.",
      "Experience handling regulatory audits and drafting CAPA documentation."
    ]
  },
  {
    id: "job-area-manager",
    title: "Area Business Manager - Cardiovascular Division",
    department: "Sales & Marketing",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "3 - 5 Years",
    description: "Lead a high-performing team of medical representatives to drive penetration of Medinet's premium cardiology portfolio, establish strong ties with key opinion leaders, and achieve regional sales targets.",
    requirements: [
      "B.Sc / B.Pharm or MBA in Marketing Management.",
      "Proven track record of launching and sustaining cardiology brands in tier-1 and tier-2 markets.",
      "Strong command of regional languages and doctor-network database."
    ]
  },
  {
    id: "job-pve-specialist",
    title: "Drug Safety & Pharmacovigilance Specialist",
    department: "Medical & Regulatory",
    location: "Mumbai HQ",
    type: "Full-time",
    experience: "2 - 4 Years",
    description: "Manage end-to-end adverse event logging, prepare safety reports (PSURs) for regulatory authorities, and assist in clinical trial safety assessments following global safety guidelines.",
    requirements: [
      "Pharm.D / B.Pharm or MBBS/BDS background.",
      "Experience operating global PV databases (Argus, ArisG or similar).",
      "Familiarity with ICH-GCP, MedDRA coding, and WHO-UMC safety terminologies."
    ]
  },
  {
    id: "job-formulation-scientist",
    title: "Research Scientist - Formulation R&D (Solid Orals)",
    department: "Research & Development",
    location: "Medinet R&D Center, Thane",
    type: "Full-time",
    experience: "5 - 8 Years",
    description: "Conceptualize, develop, and optimize novel solid-oral dosage formulations (tablets, sustained-release capsules) from lab-scale trials up to successful pilot scale-up and bio-equivalence matching.",
    requirements: [
      "M.Pharm / PhD in Pharmaceutics.",
      "Deep expertise in solid-oral coating technologies, granulation methods, and solubility enhancement.",
      "Hands-on experience drafting drug product dossiers for international regulatory filings."
    ]
  }
];

export const OFFICES: Office[] = [
  {
    name: "Medinet Corporate Headquarters",
    type: "Corporate",
    address: "Medinet Tower, 12th Floor, Bandra-Kurla Complex (BKC), Mumbai, Maharashtra, 400051, India",
    phone: "+91-22-4982-3300",
    email: "corporate@medinetpharma.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4802875143365!2d72.86178381533042!3d19.042617787108137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8be00000001%3A0xbd8e2d67d7cbfe0e!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1626500000000!5m2!1sen!2sin"
  },
  {
    name: "Medinet R&D & Formulation Technology Center",
    type: "Manufacturing",
    address: "Plot No. A-412, MIDC Industrial Area, Thane West, Maharashtra, 400604, India",
    phone: "+91-22-6102-4500",
    email: "research@medinetpharma.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4111364531473!2d72.9731238!3d19.1881248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8e100000001%3A0xbd1e5d67d7cbfe0e!2sThane!5e0!3m2!1sen!2sin!4v1626500000001!5m2!1sen!2sin"
  },
  {
    name: "Regional Distribution Hub - South India",
    type: "Regional",
    address: "Sy. No. 42/3, Phase-II, Electronic City, Bengaluru, Karnataka, 560100, India",
    phone: "+91-80-4911-2099",
    email: "south.dist@medinetpharma.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0432245314!2d77.6743123!3d12.8456123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c62aaaaaaab%3A0xbd8e5c62df!2sElectronic%20City!5e0!3m2!1sen!2sin!4v1626500000002!5m2!1sen!2sin"
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
