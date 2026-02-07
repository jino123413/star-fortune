export type Screen = 'selector' | 'loading' | 'result';

export interface ZodiacSign {
  id: string;
  name: string;
  emoji: string;
  dateRange: string;
  element: string;
}

export interface ZodiacFortune {
  id: number;
  grade: 'S' | 'A' | 'B' | 'C' | 'D';
  title: string;
  description: string;
  overall: number;
  career: number;
  love: number;
  health: number;
  luckyColor: string;
  luckyNumber: number;
  luckyDirection: string;
  luckyTime: string;
  advice: string;
  compatibility: string;
}

export interface FortuneResult {
  type: 'zodiac';
  grade: 'S' | 'A' | 'B' | 'C' | 'D';
  title: string;
  description: string;
  scores: {
    label: string;
    value: number;
  }[];
  luckyItems: {
    color: string;
    number: number;
    direction: string;
    time: string;
  };
  advice: string;
  premiumContent?: {
    compatibility?: string;
  };
}

export interface StreakData {
  currentStreak: number;
  lastVisitDate: string;
  totalVisits: number;
  lastSignId: string;
}
