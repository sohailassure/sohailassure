const WA_NUMBER = '919920877751';

let currentLang = localStorage.getItem('lang') || 'en';

function getWaLink() {
  const msg = currentLang === 'en'
    ? 'Hi, I am interested in insurance solutions. Please help me.'
    : 'नमस्ते, मुझे insurance solutions में interest है। कृपया मदद करें।';
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const t = {
  en: {
    navServices: 'Services', navWhyUs: 'Why Us', navProcess: 'Process', navContact: 'Contact',
    navWhatsapp: 'Chat on WhatsApp', langToggle: 'हिंदी',
    heroTagline: 'Expert Consultation · Best Coverage · Hassle-Free Claims',
    heroLine1: 'Your Complete', heroLine2: 'Insurance', heroLine3: 'Partner',
    heroSub: 'From expert advice to hassle-free claim settlement — we stay with you every step of the way.',
    heroCta1: 'Get Free Consultation', heroCta2: 'Our Services',
    heroTrust: 'Trusted by 1000+ clients across India',
    stat1Val: '15+', stat1Lbl: 'Years Experience',
    stat2Val: '1000+', stat2Lbl: 'Satisfied Clients',
    stat3Val: '9', stat3Lbl: 'Insurance Types',
    stat4Val: '100%', stat4Lbl: 'Claim Support',
    servicesSub: 'What We Offer', servicesTitle: 'Our Insurance Services',
    servicesDesc: 'Comprehensive coverage solutions for individuals, families & businesses',
    whyusSub: 'Our Advantage', whyusTitle: 'Why Choose Us',
    whyusDesc: 'Because insurance is not just about buying a policy',
    processSub: 'How It Works', processTitle: 'Our Process',
    processDesc: 'Simple, transparent & customer-focused',
    ctaTitle: 'Secure Your Future Today',
    ctaDesc: 'Connect with our insurance experts for personalised solutions.',
    ctaBtn: 'Chat on WhatsApp Now',
    footerTagline: 'Sales Se Claim Settlement Tak — Aapka Trusted Insurance Partner',
    footerLinks: 'Quick Links', footerContact: 'Contact Us',
    footerPhone: '+91 99208 77751',
    footerCopy: '© 2025 Complete Insurance Solutions. All rights reserved.',
    footerNote: 'Insurance is subject to market risks. Please read the policy document carefully.',
    enquireBtn: 'Enquire on WhatsApp',
  },
  hi: {
    navServices: 'सेवाएं', navWhyUs: 'क्यों हम', navProcess: 'प्रक्रिया', navContact: 'संपर्क',
    navWhatsapp: 'WhatsApp पर चैट करें', langToggle: 'English',
    heroTagline: 'Expert Consultation · Best Coverage · Hassle-Free Claims',
    heroLine1: 'आपका पूर्ण', heroLine2: 'Insurance', heroLine3: 'Partner',
    heroSub: 'Expert सलाह से Claim Settlement तक — हम हर कदम आपके साथ खड़े हैं।',
    heroCta1: 'मुफ्त परामर्श पाएं', heroCta2: 'हमारी सेवाएं',
    heroTrust: 'भारत भर में 1000+ clients का विश्वास',
    stat1Val: '15+', stat1Lbl: 'वर्षों का अनुभव',
    stat2Val: '1000+', stat2Lbl: 'संतुष्ट ग्राहक',
    stat3Val: '9', stat3Lbl: 'Insurance प्रकार',
    stat4Val: '100%', stat4Lbl: 'Claim Support',
    servicesSub: 'हमारी सेवाएं', servicesTitle: 'हमारी Insurance सेवाएं',
    servicesDesc: 'Individuals, families और businesses के लिए comprehensive coverage solutions',
    whyusSub: 'हमारी खूबियां', whyusTitle: 'हमें क्यों चुनें',
    whyusDesc: 'क्योंकि insurance सिर्फ policy खरीदने के बारे में नहीं है',
    processSub: 'कैसे काम करते हैं', processTitle: 'हमारी प्रक्रिया',
    processDesc: 'Simple, transparent और customer-focused',
    ctaTitle: 'आज ही अपना भविष्य सुरक्षित करें',
    ctaDesc: 'Personalised solutions के लिए हमारे insurance experts से connect करें।',
    ctaBtn: 'अभी WhatsApp पर चैट करें',
    footerTagline: 'Sales Se Claim Settlement Tak — Aapka Trusted Insurance Partner',
    footerLinks: 'Quick Links', footerContact: 'संपर्क करें',
    footerPhone: '+91 99208 77751',
    footerCopy: '© 2025 Complete Insurance Solutions. सर्वाधिकार सुरक्षित।',
    footerNote: 'Insurance market risks के अधीन है। Policy document ध्यान से पढ़ें।',
    enquireBtn: 'WhatsApp पर Enquire करें',
  },
};

// ─── SERVICES DATA ───────────────────────────────────────────────────────────
const services = {
  en: [
    { icon: 'life', name: 'Life Insurance', desc: "Secure Your Family's Future with Confidence",
      benefits: ['Family Financial Protection', 'Income Replacement Planning', 'Child Education Security', 'Wealth Creation & Retirement', 'Tax Saving Benefits'] },
    { icon: 'health', name: 'Health Insurance', desc: 'Your Health Deserves Complete Protection',
      benefits: ['Cashless Hospitalization', 'Individual & Family Floater Plans', 'Critical Illness Protection', 'Pre & Post Hospitalization', 'Day Care Procedures'] },
    { icon: 'vehicle', name: 'Vehicle Insurance', desc: 'Protection That Moves With You',
      benefits: ['Comprehensive Insurance Cover', 'Third Party Liability', 'Own Damage Cover', 'Theft Protection', 'Natural Disaster Coverage'] },
    { icon: 'marine', name: 'Marine Insurance', desc: 'Secure Every Shipment, Every Journey',
      benefits: ['Inland Transit Cover', 'Import & Export Cargo', 'Warehouse-to-Warehouse', 'Transit Risk Management', 'Marine Cargo Insurance'] },
    { icon: 'fire', name: 'Fire Insurance', desc: 'Protect Your Business & Property Assets',
      benefits: ['Fire & Explosion Damage', 'Lightning Protection', 'Natural Calamity Cover', 'Building & Asset Security', 'Business Continuity Support'] },
    { icon: 'worker', name: 'Workmen Compensation', desc: 'Employee Protection, Employer Confidence',
      benefits: ['Workplace Injury Compensation', 'Medical Expense Coverage', 'Disability Benefits', 'Death Compensation', 'Employer Liability Protection'] },
    { icon: 'group', name: 'Group Mediclaim', desc: 'Comprehensive Employee Healthcare',
      benefits: ['Cashless Hospitalization', 'Family Coverage Options', 'Maternity Benefits', 'Pre-Existing Disease Cover', 'Customized Corporate Plans'] },
    { icon: 'accident', name: 'Group Personal Accident', desc: 'Financial Security Against Accidents',
      benefits: ['Accidental Death Benefit', 'Permanent Disability Cover', 'Temporary Disability', 'Medical Expense Support', 'Customizable Coverage'] },
    { icon: 'home', name: 'Home Insurance', desc: 'Protect What Matters Most',
      benefits: ['Building Structure Protection', 'Household Contents Cover', 'Theft & Burglary Protection', 'Natural Disaster Coverage', 'Valuable Assets Security'] },
  ],
  hi: [
    { icon: 'life', name: 'Life Insurance', desc: 'आत्मविश्वास के साथ परिवार का भविष्य सुरक्षित करें',
      benefits: ['परिवार की Financial Protection', 'Income Replacement Planning', 'बच्चों की Education Security', 'Wealth Creation & Retirement', 'Tax Saving Benefits'] },
    { icon: 'health', name: 'Health Insurance', desc: 'आपकी Health के लिए Complete Protection',
      benefits: ['Cashless Hospitalization', 'Individual & Family Floater Plans', 'Critical Illness Protection', 'Pre & Post Hospitalization', 'Day Care Procedures'] },
    { icon: 'vehicle', name: 'Vehicle Insurance', desc: 'हर सफर में Protection',
      benefits: ['Comprehensive Insurance Cover', 'Third Party Liability', 'Own Damage Cover', 'Theft Protection', 'Natural Disaster Coverage'] },
    { icon: 'marine', name: 'Marine Insurance', desc: 'हर Shipment, हर Journey सुरक्षित',
      benefits: ['Inland Transit Cover', 'Import & Export Cargo', 'Warehouse-to-Warehouse', 'Transit Risk Management', 'Marine Cargo Insurance'] },
    { icon: 'fire', name: 'Fire Insurance', desc: 'Business और Property Assets की सुरक्षा',
      benefits: ['Fire & Explosion Damage', 'Lightning Protection', 'Natural Calamity Cover', 'Building & Asset Security', 'Business Continuity Support'] },
    { icon: 'worker', name: 'Workmen Compensation', desc: 'Employee Protection, Employer Confidence',
      benefits: ['Workplace Injury Compensation', 'Medical Expense Coverage', 'Disability Benefits', 'Death Compensation', 'Employer Liability Protection'] },
    { icon: 'group', name: 'Group Mediclaim', desc: 'Employee Healthcare Solutions',
      benefits: ['Cashless Hospitalization', 'Family Coverage Options', 'Maternity Benefits', 'Pre-Existing Disease Cover', 'Customized Corporate Plans'] },
    { icon: 'accident', name: 'Group Personal Accident', desc: 'Accidents से Financial Security',
      benefits: ['Accidental Death Benefit', 'Permanent Disability Cover', 'Temporary Disability', 'Medical Expense Support', 'Customizable Coverage'] },
    { icon: 'home', name: 'Home Insurance', desc: 'जो सबसे जरूरी है उसे Protect करें',
      benefits: ['Building Structure Protection', 'Household Contents Cover', 'Theft & Burglary Protection', 'Natural Disaster Coverage', 'Valuable Assets Security'] },
  ],
};

// ─── WHY CHOOSE US ───────────────────────────────────────────────────────────
const whyUs = {
  en: [
    { icon: 'chat', text: 'Personalized Insurance Consultation' },
    { icon: 'compare', text: 'Multiple Insurance Companies Comparison' },
    { icon: 'price', text: 'Competitive Premium Options' },
    { icon: 'transparent', text: 'Transparent & Professional Guidance' },
    { icon: 'fast', text: 'Quick Policy Issuance' },
    { icon: 'support', text: 'Dedicated Relationship Support' },
    { icon: 'renew', text: 'Timely Renewal Assistance' },
    { icon: 'claim', text: 'End-to-End Claim Settlement Support' },
    { icon: 'expert', text: 'Corporate & Retail Insurance Expertise' },
  ],
  hi: [
    { icon: 'chat', text: 'Personalized Insurance Consultation' },
    { icon: 'compare', text: 'Multiple Insurance Companies की तुलना' },
    { icon: 'price', text: 'Competitive Premium Options' },
    { icon: 'transparent', text: 'Transparent और Professional Guidance' },
    { icon: 'fast', text: 'Quick Policy Issuance' },
    { icon: 'support', text: 'Dedicated Relationship Support' },
    { icon: 'renew', text: 'समय पर Renewal Assistance' },
    { icon: 'claim', text: 'End-to-End Claim Settlement Support' },
    { icon: 'expert', text: 'Corporate और Retail Insurance Expertise' },
  ],
};

// ─── PROCESS STEPS ───────────────────────────────────────────────────────────
const steps = {
  en: [
    { n: '01', title: 'Consultation & Risk Assessment', desc: 'We understand your requirements and risk profile in detail.' },
    { n: '02', title: 'Policy Comparison & Recommendation', desc: 'We compare plans from multiple insurers to find the best fit.' },
    { n: '03', title: 'Documentation & Policy Issuance', desc: 'Smooth, hassle-free policy issuance with full guidance.' },
    { n: '04', title: 'Ongoing Service Support', desc: 'Continuous help with renewals, endorsements and updates.' },
    { n: '05', title: 'Claim Assistance & Settlement', desc: 'Dedicated support from claim registration to final settlement.' },
  ],
  hi: [
    { n: '01', title: 'Consultation & Risk Assessment', desc: 'हम आपकी requirements और risk profile को विस्तार से समझते हैं।' },
    { n: '02', title: 'Policy Comparison & Recommendation', desc: 'Multiple insurers के plans compare करके best solution suggest करते हैं।' },
    { n: '03', title: 'Documentation & Policy Issuance', desc: 'Minimum hassle के साथ smooth policy issuance process।' },
    { n: '04', title: 'Ongoing Service Support', desc: 'Renewals, endorsements और policy updates में continuous assistance।' },
    { n: '05', title: 'Claim Assistance & Settlement', desc: 'Claim registration से final settlement तक dedicated support।' },
  ],
};

// ─── ICONS ───────────────────────────────────────────────────────────────────
const ICONS = {
  life: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>`,
  health: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>`,
  vehicle: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg>`,
  marine: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/></svg>`,
  fire: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"/></svg>`,
  worker: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/></svg>`,
  group: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>`,
  accident: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>`,
  home: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>`,
  // why-us icons
  chat: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/></svg>`,
  compare: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg>`,
  price: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"/></svg>`,
  transparent: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  fast: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>`,
  support: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/></svg>`,
  renew: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>`,
  claim: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/></svg>`,
  expert: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>`,
  check: `<svg fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>`,
  wa: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  shield: `<svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>`,
  chevronDown: `<svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>`,
  bars: `<svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>`,
  x: `<svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`,
};

// ─── RENDER HELPERS ───────────────────────────────────────────────────────────
function renderServices() {
  const el = document.getElementById('services-grid');
  if (!el) return;
  const lang = currentLang;
  el.innerHTML = services[lang].map(s => `
    <div class="service-card">
      <div class="svc-icon">${ICONS[s.icon] || ICONS.life}</div>
      <h3 class="svc-name">${s.name}</h3>
      <p class="svc-desc">${s.desc}</p>
      <ul class="svc-benefits">
        ${s.benefits.map(b => `<li><span class="check-icon">${ICONS.check}</span>${b}</li>`).join('')}
      </ul>
      <a href="${getWaLink()}" target="_blank" rel="noopener" class="enquire-btn">
        <span class="wa-icon">${ICONS.wa}</span>
        ${t[lang].enquireBtn}
      </a>
    </div>
  `).join('');
}

function renderWhyUs() {
  const el = document.getElementById('whyus-grid');
  if (!el) return;
  el.innerHTML = whyUs[currentLang].map(item => `
    <div class="why-item">
      <div class="why-icon">${ICONS[item.icon] || ICONS.claim}</div>
      <p class="why-text">${item.text}</p>
    </div>
  `).join('');
}

function renderProcess() {
  const el = document.getElementById('process-steps');
  if (!el) return;
  el.innerHTML = steps[currentLang].map((s, i) => `
    <div class="step-item">
      <div class="step-num">${s.n}</div>
      ${i < steps[currentLang].length - 1 ? '<div class="step-connector"></div>' : ''}
      <h4 class="step-title">${s.title}</h4>
      <p class="step-desc">${s.desc}</p>
    </div>
  `).join('');
}

function updateWaLinks() {
  const link = getWaLink();
  document.querySelectorAll('.wa-link').forEach(a => { a.href = link; });
}

// ─── LANGUAGE TOGGLE ──────────────────────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[lang][key] !== undefined) el.innerHTML = t[lang][key];
  });

  renderServices();
  renderWhyUs();
  renderProcess();
  updateWaLinks();

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = t[lang].langToggle;
}

// ─── MOBILE MENU ──────────────────────────────────────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const open = document.getElementById('icon-bars');
  const close = document.getElementById('icon-x');
  const isOpen = !menu.classList.contains('hidden');
  menu.classList.toggle('hidden', isOpen);
  open.classList.toggle('hidden', !isOpen);
  close.classList.toggle('hidden', isOpen);
}

document.addEventListener('click', e => {
  if (e.target.closest('#mobile-menu a[href]')) {
    document.getElementById('mobile-menu').classList.add('hidden');
    document.getElementById('icon-bars').classList.remove('hidden');
    document.getElementById('icon-x').classList.add('hidden');
  }
});

// ─── NAVBAR SHADOW ON SCROLL ──────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('nav-scrolled', window.scrollY > 20);
}, { passive: true });

// ─── FADE-IN ON SCROLL ────────────────────────────────────────────────────────
function initFadeIn() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderWhyUs();
  renderProcess();

  const saved = localStorage.getItem('lang') || 'en';
  setLang(saved);

  initFadeIn();
});
