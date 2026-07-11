// ============================================
// ALL SITE DATA — Harley Dental Studio
// Edit copy, services, team, testimonials here
// ============================================

export const CONTACT_DETAILS = {
  email: 'harveylabhq@gmail.com',
  phone: '+447401062378',
  phoneDisplay: '0207401062378',
  whatsapp: '+447401062378',
  address: '12 Harley Street, London W1G 9PQ',
}

export const CONSULTATION_TYPES = [
  { id: 1, label: 'Free Initial Consultation', desc: '30 mins – Discuss your goals' },
  { id: 2, label: 'Smile Design Consultation', desc: '60 mins – Digital smile preview' },
  { id: 3, label: 'Implant Assessment', desc: '45 mins – Scan & treatment plan' },
  { id: 4, label: 'General Check-up', desc: '30 mins – Examination & advice' },
  { id: 5, label: 'Orthodontic Consultation', desc: '45 mins – Invisalign or braces' },
  { id: 6, label: 'Emergency Appointment', desc: '30 mins – Urgent dental care' },
]


import service1 from '../assets/doctors/complete .png'
import service2 from '../assets/doctors/titanium .jpeg'
import service3 from '../assets/doctors/clearaligner.png'
import service4 from '../assets/doctors/thin.png'
import service5 from '../assets/doctors/white.png'
import service6 from '../assets/doctors/footer.png'


export const SITE = {
  name: 'Harley Dental Studio',
  tagline: 'Modern Care for a Perfect Smile',
  location: 'London, United Kingdom',
  phone: '+447401062378',
  email: 'harveylabhq@gmail.com',
  address: '12 Harley Street, London W1G 9PQ',
  gdc: 'GDC No. 786345',
  hours: {
    weekday: 'Mon – Fri: 8am – 7pm',
    saturday: 'Saturday: 9am – 4pm',
    sunday: 'Sunday: Closed',
  },
};

export const NAV_LINKS = [
  { label: 'Services',        path: '/services' },
  { label: 'Implants',        path: '/services#implants' },
  { label: 'Price',           path: '/pricing' },
  { label: 'Preventive Care', path: '/services#preventive' },
];

export const SERVICES = [
  {
    id: 1,
    icon: '✦',
    title: 'Smile Design',
    slug: 'smile-design',
    image: service1, // smile design
    short: 'Complete digital smile makeover combining veneers, bonding, and whitening.',
    description: 'We use advanced digital imaging to plan every detail of your smile transformation before treatment begins.',
    price: 'From £2,500',
  },
  {
    id: 2,
    icon: '⬡',
    title: 'Dental Implants',
    slug: 'implants',
    image: service2, // implants
    short: 'Permanent, natural-looking tooth replacement with titanium implants.',
    description: 'Our implant specialists have placed over 3,000 implants. Full procedure handled in-house from scan to crown.',
    price: 'From £2,200',
  },
  {
    id: 3,
    icon: '◎',
    title: 'Invisalign',
    slug: 'invisalign',
    image: service3, // aligners
    short: 'Diamond-accredited clear aligner straightening — no wires, no brackets.',
    description: 'As an Invisalign Diamond Provider we treat complex cases that other practices refer out.',
    price: 'From £3,500',
  },
  {
    id: 4,
    icon: '◇',
    title: 'Porcelain Veneers',
    slug: 'veneers',
    image: service4, // smile close-up
    short: 'Ultra-thin ceramic shells crafted by master ceramists for a flawless finish.',
    description: 'Each veneer is hand-crafted to exact specifications for shade, translucency, and shape.',
    price: 'From £900 per tooth',
  },
  {
    id: 5,
    icon: '✧',
    title: 'Teeth Whitening',
    slug: 'whitening',
    image: service5, // whitening
    short: 'Professional Enlighten whitening — results guaranteed to shade B1.',
    description: 'The only whitening system that guarantees shade B1 — the lightest naturally occurring shade.',
    price: 'From £550',
  },
  {
    id: 6,
    icon: '▣',
    title: 'General Dentistry',
    slug: 'general',
    image: service6, // dental exam
    short: 'Preventative care, check-ups, and hygiene delivered to cosmetic standards.',
    description: 'Every routine appointment is an opportunity to catch issues early and keep your smile in peak condition.',
    price: 'From £95',
  },
];


import clara from '/src/assets/doctors/clara2.jpeg'
import mason from '/src/assets/doctors/him2.jpeg'
import priya from '/src/assets/doctors/priya2.jpeg'
import james from '/src/assets/doctors/james2.jpeg'

export const TEAM = [
  {
    id: 1,
    name: 'Dr Clara Collins',
    role: 'Principal Dentist & Smile Designer',
    bio: 'MSc Aesthetic Dentistry, King\'s College London. 12 years creating smile transformations.',
    image: clara, 
    initials: 'CC',
    speciality: 'Smile Design · Veneers',
  },
  {
    id: 2,
    name: 'Dr Mason Reid',
    role: 'Implant & Restorative Specialist',
    bio: 'Fellowship in Implantology, Royal College of Surgeons. 3,000+ implants placed.',
    image: mason,
    initials: 'MR',
    speciality: 'Implants · Full Arch',
  },
  {
    id: 3,
    name: 'Dr Priya Sharma',
    role: 'Orthodontist — Invisalign Lead',
    bio: 'Invisalign Diamond Provider. Specialist in complex adult orthodontic cases.',
    image: priya,
    initials: 'PS',
    speciality: 'Invisalign · Braces',
  },
  {
    id: 4,
    name: 'Dr James Andrew',
    role: 'Preventive & Paediatric Dentist',
    bio: 'Diploma in Paediatric Dentistry. Specialist in anxious and nervous patients.',
    image: james, 
    initials: 'JA',
    speciality: 'Preventive · Children',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah M.',
    detail: 'Smile Design Patient',
    rating: 5,
    text: 'I put off fixing my smile for years. After one consultation I understood exactly what was possible. The result exceeded everything I hoped for.',
  },
  {
    id: 2,
    name: 'James R.',
    detail: 'Invisalign + Whitening',
    rating: 5,
    text: 'Six months of Invisalign and my teeth are completely transformed. The team checked in every step — I never felt like just a number.',
  },
  {
    id: 3,
    name: 'Amara K.',
    detail: 'Porcelain Veneers',
    rating: 5,
    text: 'My veneers look completely natural. Even my dentist back home couldn\'t believe the quality. Worth every penny.',
  },
  {
    id: 4,
    name: 'Tom W.',
    detail: 'Dental Implants',
    rating: 5,
    text: 'I was terrified of the implant procedure. Dr Reid made it completely painless — I barely needed the paracetamol they gave me.',
  },
  {
    id: 5,
    name: 'Lily C.',
    detail: 'Teeth Whitening',
    rating: 5,
    text: 'The Enlighten whitening is unreal. I\'m three shades lighter than I thought possible. Done in two appointments.',
  },
];

export const PRICING = [
  {
    id: 1,
    name: 'Essential',
    price: '£95',
    period: 'per visit',
    description: 'Complete preventive care for long-term dental health.',
    whatsappMessage: `Hi! I'm interested in booking an Essential Preventive Care appointment (£95). Can you confirm availability? Thanks!`,
    emailSubject: 'Essential Preventive Care Inquiry',
    features: [
      'Full dental examination',
      'Digital X-rays',
      'Professional hygiene clean',
      'Oral cancer screening',
      'Personalised care plan',
      'Emergency phone line access',
    ],
    cta: 'Book Appointment',
    featured: false,
  },
  {
    id: 2,
    name: 'Transform',
    price: '£2,500',
    period: 'smile package',
    description: 'Our most popular complete smile makeover package.',
    whatsappMessage: `Hi! I'd like to book the Transform Smile Package (£2,500). Can we discuss available times and 0% finance options? Thanks!`,
    emailSubject: 'Transform Smile Package Inquiry',
    features: [
      'Digital smile design consultation',
      'Teeth whitening (Enlighten)',
      'Up to 6 composite bonds',
      'Invisalign lite (if needed)',
      '2-year aftercare plan',
      '0% finance available',
    ],
    cta: 'Book Consultation',
    featured: true,
  },
  {
    id: 3,
    name: 'Implant',
    price: '£2,200',
    period: 'per implant',
    description: 'Full implant treatment from scan to permanent crown.',
    whatsappMessage: `Hi! I'm interested in the Implant Package (£2,200 per implant). Could we schedule a consultation to discuss my options?`,
    emailSubject: 'Dental Implant Package Inquiry',
    features: [
      'CBCT 3D scan included',
      'Titanium implant placement',
      'Ceramic crown (shade matched)',
      'Lifetime implant guarantee',
      '0% finance over 24 months',
      'Aftercare programme',
    ],
    cta: 'Book Implant Consult',
    featured: false,
  },
];

export const STATS = [
  { value: 14,   suffix: '+', label: 'Years of excellence' },
  { value: 4200, suffix: '+', label: 'Smiles transformed' },
  { value: 4.9,  suffix: '★', label: 'Google rating' },
  { value: 98,   suffix: '%', label: 'Patient satisfaction' },
];