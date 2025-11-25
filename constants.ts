import { SectorData } from './types';

// Table I Data: Growth rates 1993-2012
export const MACRO_GROWTH_DATA = [
  { name: 'GDP Value Added', value: 241.65, fill: '#3b82f6' },
  { name: 'Output Per Worker', value: 156.73, fill: '#0ea5e9' },
  { name: 'Total Employment', value: 33.08, fill: '#ef4444' },
  { name: 'Working Age Pop', value: 49.80, fill: '#64748b' }
];

// Table II Data: Decomposition of Per Capita Value Added Growth
export const DECOMPOSITION_DATA = [
  { name: 'Labour Productivity', value: 104.81, fill: '#10b981', description: 'Efficiency gains within sectors' },
  { name: 'Inter-sectoral Shifts', value: 23.79, fill: '#3b82f6', description: 'Workers moving to better sectors' },
  { name: 'Demographics', value: 9.39, fill: '#f59e0b', description: 'More working age people' },
  { name: 'Employment Rate', value: -14.20, fill: '#ef4444', description: 'Decline in % of people working' }
];

// Table III Data combined with Table VI for context
export const SECTORAL_DATA: SectorData[] = [
  { sector: 'Construction', employmentGrowth: 310.25, productivityGrowth: 0.1, shareOfNetIncrement: 33.49 },
  { sector: 'Financial/Business', employmentGrowth: 240.24, productivityGrowth: 143.98, shareOfNetIncrement: 7.55 },
  { sector: 'Transport/Comm', employmentGrowth: 102.03, productivityGrowth: 189.68, shareOfNetIncrement: 9.87 },
  { sector: 'Manufacturing (MM/C)', employmentGrowth: 75.79, productivityGrowth: 162.54, shareOfNetIncrement: 9.69 },
  { sector: 'Trade/Hotels', employmentGrowth: 68.53, productivityGrowth: 162.07, shareOfNetIncrement: 18.71 },
  { sector: 'Agriculture', employmentGrowth: 0.61, productivityGrowth: 73.26, shareOfNetIncrement: 1.14 },
];

// Table VIII: LFPR Trends
export const LFPR_DATA = [
  { year: '1993-94', Male: 55.0, Female: 32.11, Total: 59.79 },
  { year: '1999-00', Male: 54.0, Female: 31.87, Total: 58.89 },
  { year: '2004-05', Male: 55.0, Female: 30.97, Total: 58.40 },
  { year: '2009-10', Male: 55.0, Female: 27.12, Total: 55.11 },
  { year: '2011-12', Male: 55.5, Female: 24.24, Total: 53.15 },
];

// Table IX: Rural Female Youth Activity (16-25)
export const FEMALE_YOUTH_ACTIVITY = [
  { name: '1993-94', Education: 5.2, Labour: 46.3, Domestic: 47.7 },
  { name: '2011-12', Education: 27.9, Labour: 16.7, Domestic: 54.3 },
];

export const COLORS = {
  primary: '#0f172a',
  secondary: '#334155',
  accent: '#3b82f6',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  muted: '#94a3b8'
};
