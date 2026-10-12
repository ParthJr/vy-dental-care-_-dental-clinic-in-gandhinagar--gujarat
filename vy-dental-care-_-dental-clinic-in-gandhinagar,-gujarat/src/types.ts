export interface Treatment {
  id: string;
  category: 'preventive' | 'cosmetic' | 'diagnostic' | 'urgent';
  categoryLabel: string;
  badgeTag: string;
  title: string;
  description: string;
  consultationReason: string;
  highlights: string[];
  actionLabel: string;
  actionType: 'consult' | 'call';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  accentColor?: string;
}

export interface Principle {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AppointmentFormData {
  fullName: string;
  mobileNumber: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  privacyConsent: boolean;
}

export interface FormSubmissionStatus {
  submitting: boolean;
  success: boolean;
  error: string | null;
}
