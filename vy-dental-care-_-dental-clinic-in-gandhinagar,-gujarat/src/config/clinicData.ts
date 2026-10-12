import { Treatment, FAQItem, JourneyStep, Principle } from '../types';

export const CLINIC_CONFIG = {
  name: 'VY Dental Care',
  tagline: 'FEEL GOOD ABOUT YOUR SMILE.',
  subtagline: 'Your Smile. Your Wellbeing.',
  location: {
    city: 'Gandhinagar',
    state: 'Gujarat',
    pincode: '382419',
    country: 'India',
    formattedAddress: 'VY Dental Care, Gandhinagar, Gujarat 382419, India',
    directionsUrl: 'https://maps.google.com/?q=VY+Dental+Care+Gandhinagar+Gujarat+382419',
  },
  contact: {
    phoneDisplay: '088660 27972',
    phoneTel: '08866027972',
    formattedPhone: '+91 88660 27972',
  },
  rating: {
    score: '5.0',
    stars: 5,
    reviewCount: 27,
    platform: 'Google Reviews',
    googleProfileUrl: 'https://maps.google.com/?q=VY+Dental+Care+Gandhinagar+Gujarat+382419',
  },
  hours: {
    displayHours: 'Mon from 9:00 AM onwards (Schedule by appointment)',
    weeklySummary: 'Monday – Saturday: 9:00 AM onwards',
  },
  verifiedOfferings: [
    'Emergency care',
    'X-rays & Diagnostic Imaging',
    'Online dentist booking',
    'Cosmetic procedures',
    'Dental check-ups',
    'Porcelain Veneers',
    'Preventive oral care',
    'Professional Cleaning',
  ],
  logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmaG3RGJO3uE5-GJ2MfbKOeLJ6M53-UtMAXmetzCyZBGxDQW4uPgA1un1YkK5VQzDu89KY87U7F-KifqMO6DUj1i5T1El132avjPLiCBYDM5mdr32fPh-liL4VIXCMGGvvn5UVi4nAnUNFtQOlI_1dktDxcTefMN4GQNChsnBg9bg_EJN5j5TEEsk9BsC-V_OSxJgyUQbl5SgtToDU2jnw0SwbWFx6IxCg9th4Ov6iKc1LNNZK_wz_',
  heroImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHgO2fWELf7v16Y9gmUZf98x34P7cuuoNSh0o-4PKBK4zpGLQastGwKDwtQl5A_GkfF2k0xJabtG9kOZtrnuD48j9ujHKrTY9XaLnVUPFkuPpK1s25lzWjJbSvFHAqQlKwmc5exuJ-b-zgae2J_uo5bdZIkB8NV3K9haCevRJfw33mxk1Zatqnt30O5fmFwsa_uK8i7UgY7KnJPYBr619KEemWQ97YDcnt0P2ho2BSZKEoUDZfPwgE',
  mapImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnnb4yqRBrAauSt_EqEed-Etb1D6M00vBfuI310Q5cIiH1xNpTCtL_-2_8lS_BZPKC9rl_ni7niH__gYhA2xCVAULbVndb2xhanmcJHUM4mzvnwq87fmzemIrceyw03fr13bw85ZYmNN03CLNN-TfqNXvdXi9sNUF5lV_gnhKT-SZJsGhQ_57B2VcVd8XxaUNmdHUM4Sr5LONX3nxBn5B_M8s3uqebzyR3Wfmb4m_g5hsPdxFnN6fR',
};

export const CLINIC_PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'Listen',
    description: 'Understand your concerns, your history, and what truly matters to you before any clinical intervention.',
    iconName: 'hearing',
  },
  {
    number: '02',
    title: 'Explain',
    description: 'Discuss relevant clinical findings, imaging, treatment pathways, and honest alternatives in transparent terms.',
    iconName: 'chat_bubble_outline',
  },
  {
    number: '03',
    title: 'Plan',
    description: 'Review appropriate next steps collaboratively with your dental professional, respecting your pace and budget.',
    iconName: 'assignment_turned_in',
  },
];

export const TREATMENTS_DATA: Treatment[] = [
  {
    id: 'preventive',
    category: 'preventive',
    categoryLabel: 'Preventive & General Dentistry',
    badgeTag: 'Foundational Care',
    title: 'Preventive & General Dentistry',
    description: 'Regular dental assessments can help identify concerns early and support an oral health plan tailored to your needs. When consultation may be useful: Annual examinations, teeth scale and polish, or routine preservation.',
    consultationReason: 'Annual examinations, teeth scaling, polish, or routine enamel preservation.',
    highlights: ['Dental Check-ups', 'Preventive Oral Care', 'Professional Cleaning'],
    actionLabel: 'Book General Exam',
    actionType: 'consult',
  },
  {
    id: 'cosmetic',
    category: 'cosmetic',
    categoryLabel: 'Cosmetic Dentistry',
    badgeTag: 'Aesthetic Harmony',
    title: 'Cosmetic Dentistry',
    description: 'Discuss your smile goals, available options, suitability, maintenance, and potential limitations before deciding on elective cosmetic enhancement.',
    consultationReason: 'Smile enhancement, custom porcelain veneers, or cosmetic evaluation.',
    highlights: ['Porcelain Veneers', 'Cosmetic Consultations', 'Smile Assessments'],
    actionLabel: 'Smile Evaluation Enquiry',
    actionType: 'consult',
  },
  {
    id: 'diagnostic',
    category: 'diagnostic',
    categoryLabel: 'Diagnostic Care',
    badgeTag: 'Precision Imaging',
    title: 'Diagnostic Care',
    description: 'Your dental professional can determine whether diagnostic digital imaging or specialized evaluations are required to examine underlying bone and root structures accurately.',
    consultationReason: 'Persistent discomfort, root evaluation, or comprehensive anatomical imaging.',
    highlights: ['Digital Dental X-Rays', 'Clinical Investigations', 'Root & Bone Studies'],
    actionLabel: 'Inquire on Imaging',
    actionType: 'consult',
  },
  {
    id: 'urgent',
    category: 'urgent',
    categoryLabel: 'Urgent Dental Concerns',
    badgeTag: 'Prompt Assistance',
    title: 'Urgent Dental Concerns',
    description: 'If you experience sudden severe dental discomfort or an accidental injury, reach out to the clinic promptly to discuss triage, immediate comfort steps, and same-day assessment slots.',
    consultationReason: 'Sudden tooth pain, chipped or damaged tooth, or acute swelling.',
    highlights: ['Assessment of Dental Pain', 'Urgent Consultations', 'Same-Day Triage'],
    actionLabel: 'Call Clinic: 088660 27972',
    actionType: 'call',
  },
];

export const SMILE_STAGES = [
  {
    stage: '1',
    title: 'Consultation',
    description: 'Discuss your concerns, past medical/dental context, and primary aesthetic or functional goals in an unhurried, comfortable dialogue.',
  },
  {
    stage: '2',
    title: 'Assessment',
    description: 'Understand the relevant clinical examination, diagnostic imagery, and doctor recommendations with complete anatomical clarity.',
  },
  {
    stage: '3',
    title: 'Care Plan',
    description: 'Review appropriate options, transparent pricing, timing, and follow-up care schedules with no pressure.',
  },
];

export const PATIENT_GUIDE_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What happens during a dental check-up?',
    answer: 'A routine check-up includes reviewing your dental and medical history, checking teeth, gums, and soft tissues for signs of decay or periodontal concerns, assessing bite alignment, and discussing personalized hygiene adjustments. Diagnostic X-rays may also be recommended if clinically appropriate.',
  },
  {
    id: 'faq-2',
    question: 'What should I ask before getting veneers?',
    answer: 'We always encourage asking about personal tooth preparation requirements, irreversible enamel adjustments, material choices (composite vs porcelain), projected longevity, hygiene maintenance, potential limitations or risks, and alternative conservative treatments.',
  },
  {
    id: 'faq-3',
    question: 'When should I contact a dentist urgently?',
    answer: 'Sudden persistent toothache, broken or knocked-out teeth, uncontrolled oral bleeding, and noticeable facial swelling warrant prompt dental evaluation. Note: If swelling significantly impairs breathing or swallowing, seek immediate emergency hospital medical care.',
  },
  {
    id: 'faq-4',
    question: 'How can I maintain oral health between visits?',
    answer: 'Brushing twice daily for two minutes using fluoride toothpaste, flossing or using interdental brushes daily, moderating frequent snacking on sugary or acidic foods, drinking plenty of water, and scheduling periodic review appointments keep your teeth and gums resilient.',
  },
];

export const PATIENT_JOURNEY_STEPS: JourneyStep[] = [
  {
    number: '01',
    title: 'Get in Touch',
    description: 'Request an appointment online or call our reception in Gandhinagar. Let us know what you would like to discuss.',
    accentColor: '#DF6D65',
  },
  {
    number: '02',
    title: 'Meet Doctor',
    description: 'Discuss your priorities, past experiences, and expectations in a comfortable, relaxed consultation room.',
    accentColor: '#625B74',
  },
  {
    number: '03',
    title: 'Understand Options',
    description: 'Review detailed clinical findings, visual photos, and relevant treatment choices openly without pressure.',
    accentColor: '#625B74',
  },
  {
    number: '04',
    title: 'Plan Next Step',
    description: 'Review scheduling, transparent fees, and step-by-step follow-up timelines before embarking on treatment.',
    accentColor: '#570609',
  },
];
