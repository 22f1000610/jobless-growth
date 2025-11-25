export enum Section {
  INTRODUCTION = 'INTRODUCTION',
  MACRO_OVERVIEW = 'MACRO_OVERVIEW',
  DECOMPOSITION = 'DECOMPOSITION',
  SECTORAL_SHIFTS = 'SECTORAL_SHIFTS',
  GENDER_GAP = 'GENDER_GAP',
  CONCLUSION = 'CONCLUSION'
}

export interface ChartDataPoint {
  name: string;
  value: number;
  secondaryValue?: number;
  category?: string;
  fill?: string;
}

export interface SectorData {
  sector: string;
  employmentGrowth: number;
  productivityGrowth: number;
  shareOfNetIncrement: number;
}
