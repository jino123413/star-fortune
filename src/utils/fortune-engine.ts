import { FortuneResult, ZodiacSign } from '../types';
import { zodiacSigns, zodiacFortunes } from '../data/zodiac-fortunes';

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function getTodayString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export function getZodiacFortune(signId: string): FortuneResult {
  const today = getTodayString();
  const index = hashCode(today + signId) % 10;
  const signIndex = zodiacSigns.findIndex(s => s.id === signId);
  const fortuneIndex = signIndex * 10 + index;
  const fortune = zodiacFortunes[fortuneIndex];

  return {
    type: 'zodiac',
    grade: fortune.grade,
    title: fortune.title,
    description: fortune.description,
    scores: [
      { label: '종합운', value: fortune.overall },
      { label: '직장운', value: fortune.career },
      { label: '연애운', value: fortune.love },
      { label: '건강운', value: fortune.health },
    ],
    luckyItems: {
      color: fortune.luckyColor,
      number: fortune.luckyNumber,
      direction: fortune.luckyDirection,
      time: fortune.luckyTime,
    },
    advice: fortune.advice,
    premiumContent: {
      compatibility: fortune.compatibility,
    },
  };
}

export function getZodiacSigns(): ZodiacSign[] {
  return zodiacSigns;
}
