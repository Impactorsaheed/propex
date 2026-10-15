export const INITIAL_PROPERTIES = [
  { id: 'prop-1', name: '14 Oak Street', address: '14 Oak Street, Bristol, BS8 4EJ', units: 3, type: 'Residential' },
  { id: 'prop-2', name: 'High Street Apt 4B', address: '88 High Street, Flat 4B, Bath, BA1 5DE', units: 1, type: 'Apartment' },
  { id: 'prop-3', name: 'Maple Ave Duplex', address: '22-24 Maple Avenue, Swindon, SN1 2QJ', units: 2, type: 'Multi-family' },
  { id: 'prop-4', name: 'Kingston Commercial Hub', address: 'Unit 5, Kingston Business Park, Bristol', units: 1, type: 'Commercial' },
  { id: 'prop-general', name: 'General Business / Overhead', address: 'HQ / Shared business expenses', units: 0, type: 'Administrative' }
];

export const EXPENSE_CATEGORIES = [
  { id: 'cat-repairs', name: 'Repairs & Maintenance', color: '#6B21A8', icon: 'Wrench' },
  { id: 'cat-marketing', name: 'Marketing & Listing', color: '#9333EA', icon: 'Megaphone' },
  { id: 'cat-legal', name: 'Legal & Professional', color: '#4C1D95', icon: 'Scale' },
  { id: 'cat-insurance', name: 'Insurance & Cover', color: '#7E22CE', icon: 'ShieldCheck' },
  { id: 'cat-utilities', name: 'Utilities & Rates', color: '#A855F7', icon: 'Zap' },
  { id: 'cat-travel', name: 'Travel & Transport', color: '#C084FC', icon: 'Car' },
  { id: 'cat-office', name: 'Office & Supplies', color: '#581C87', icon: 'Briefcase' },
  { id: 'cat-other', name: 'Miscellaneous', color: '#64748B', icon: 'FileText' }
];

export const INITIAL_EXPENSES = [
  {
    id: 'exp-1',
    amount: 320.00,
    currency: 'GBP',
    date: '2026-10-14',
    category: 'Repairs & Maintenance',
    propertyId: 'prop-1',
    propertyName: '14 Oak Street',
    description: 'Emergency plumber callout for burst pipe in Flat 2',
    source: 'voice',
    rawTranscript: 'Three hundred and twenty pounds emergency plumber callout for burst pipe at 14 Oak Street maintenance',
    createdAt: '2026-10-14T14:32:00Z'
  },
  {
    id: 'exp-2',
    amount: 145.50,
    currency: 'GBP',
    date: '2026-10-12',
    category: 'Marketing & Listing',
    propertyId: 'prop-2',
    propertyName: 'High Street Apt 4B',
    description: 'Rightmove & Zoopla featured listing boost',
    source: 'manual',
    rawTranscript: null,
    createdAt: '2026-10-12T10:15:00Z'
  },
  {
    id: 'exp-3',
    amount: 750.00,
    currency: 'GBP',
    date: '2026-10-10',
    category: 'Legal & Professional',
    propertyId: 'prop-3',
    propertyName: 'Maple Ave Duplex',
    description: 'Lease agreement preparation and tenant vetting fee',
    source: 'voice',
    rawTranscript: 'Seven hundred fifty pounds solicitor legal fee for lease agreement on Maple Avenue duplex',
    createdAt: '2026-10-10T16:45:00Z'
  },
  {
    id: 'exp-4',
    amount: 88.00,
    currency: 'GBP',
    date: '2026-10-08',
    category: 'Travel & Transport',
    propertyId: 'prop-general',
    propertyName: 'General Business / Overhead',
    description: 'Fuel for weekly multi-property viewing inspections',
    source: 'voice',
    rawTranscript: 'Eighty eight pounds fuel for property inspection rounds travel',
    createdAt: '2026-10-08T09:20:00Z'
  },
  {
    id: 'exp-5',
    amount: 450.00,
    currency: 'GBP',
    date: '2026-10-05',
    category: 'Insurance & Cover',
    propertyId: 'prop-4',
    propertyName: 'Kingston Commercial Hub',
    description: 'Quarterly commercial property liability insurance',
    source: 'manual',
    rawTranscript: null,
    createdAt: '2026-10-05T11:00:00Z'
  },
  {
    id: 'exp-6',
    amount: 195.00,
    currency: 'GBP',
    date: '2026-10-02',
    category: 'Repairs & Maintenance',
    propertyId: 'prop-1',
    propertyName: '14 Oak Street',
    description: 'Gas safety certification and boiler servicing check',
    source: 'voice',
    rawTranscript: 'One hundred ninety five pounds boiler safety certificate for 14 Oak Street',
    createdAt: '2026-10-02T13:10:00Z'
  },
  {
    id: 'exp-7',
    amount: 62.40,
    currency: 'GBP',
    date: '2026-09-28',
    category: 'Office & Supplies',
    propertyId: 'prop-general',
    propertyName: 'General Business / Overhead',
    description: 'Printer toner & key tags for agency office',
    source: 'manual',
    rawTranscript: null,
    createdAt: '2026-09-28T15:00:00Z'
  },
  {
    id: 'exp-8',
    amount: 850.00,
    currency: 'GBP',
    date: '2026-09-20',
    category: 'Repairs & Maintenance',
    propertyId: 'prop-3',
    propertyName: 'Maple Ave Duplex',
    description: 'Guttering replacement and exterior masonry repointing',
    source: 'voice',
    rawTranscript: 'Eight hundred fifty pounds guttering repair and repointing at Maple Avenue duplex maintenance',
    createdAt: '2026-09-20T17:30:00Z'
  }
];
