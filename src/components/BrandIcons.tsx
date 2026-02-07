import React from 'react';

interface IconProps {
  size?: number;
}

// --- General Brand Icons ---

export const ConstellationIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="4" r="1.5" fill="currentColor" />
    <circle cx="6" cy="10" r="1.5" fill="currentColor" />
    <circle cx="18" cy="10" r="1.5" fill="currentColor" />
    <circle cx="8" cy="18" r="1.5" fill="currentColor" />
    <circle cx="16" cy="18" r="1.5" fill="currentColor" />
    <line x1="12" y1="4" x2="6" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="4" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="6" y1="10" x2="8" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="18" y1="10" x2="16" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="6" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ZodiacIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
    <line x1="12" y1="3" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="3" y1="12" x2="7" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="17" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="5.6" y1="5.6" x2="8.2" y2="8.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="15.8" y1="15.8" x2="18.4" y2="18.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="18.4" y1="5.6" x2="15.8" y2="8.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8.2" y1="15.8" x2="5.6" y2="18.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SparkleStarIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L13.5 9L20 12L13.5 15L12 22L10.5 15L4 12L10.5 9L12 2Z"
      fill="currentColor"
    />
  </svg>
);

export const StreakFireIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C12 2 8 7 8 11C8 13.2 9 15 10 16C9.5 14.5 10 12 12 10C14 12 14.5 14.5 14 16C15 15 16 13.2 16 11C16 7 12 2 12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22C8.7 22 6 19.5 6 16.5C6 14 7.5 12 9 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22C15.3 22 18 19.5 18 16.5C18 14 16.5 12 15 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ScoreChartIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="13" width="4" height="8" rx="1" fill="currentColor" />
    <rect x="10" y="8" width="4" height="13" rx="1" fill="currentColor" />
    <rect x="16" y="3" width="4" height="18" rx="1" fill="currentColor" />
  </svg>
);

export const LuckySparkleIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3L13.2 8.5L18 6L15.5 10.8L21 12L15.5 13.2L18 18L13.2 15.5L12 21L10.8 15.5L6 18L8.5 13.2L3 12L8.5 10.8L6 6L10.8 8.5L12 3Z"
      fill="currentColor"
    />
  </svg>
);

export const LuckyColorIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <circle cx="12" cy="6" r="1.5" fill="currentColor" />
    <circle cx="17" cy="14" r="1.5" fill="currentColor" />
    <circle cx="7" cy="14" r="1.5" fill="currentColor" />
  </svg>
);

export const LuckyNumberIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <circle cx="16" cy="8" r="1.5" fill="currentColor" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="8" cy="16" r="1.5" fill="currentColor" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

export const LuckyCompassIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <polygon points="12,5 14,11 12,10 10,11" fill="currentColor" />
    <polygon points="12,19 10,13 12,14 14,13" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <line x1="12" y1="3" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="19" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="3" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="19" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const LuckyClockIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <line x1="12" y1="12" x2="12" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="12" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const AdviceIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 6C4 4.9 4.9 4 6 4H18C19.1 4 20 4.9 20 6V14C20 15.1 19.1 16 18 16H8L4 20V6Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const CompatibilityIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 4C6.8 4 5 5.8 5 8C5 12 9 14 9 14C9 14 13 12 13 8C13 5.8 11.2 4 9 4Z"
      fill="currentColor"
      opacity="0.7"
    />
    <path
      d="M15 6C13.3 6 12 7.3 12 9C12 12 15 13.5 15 13.5C15 13.5 18 12 18 9C18 7.3 16.7 6 15 6Z"
      fill="currentColor"
    />
  </svg>
);

export const LockIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="11" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 11V8C8 5.8 9.8 4 12 4C14.2 4 16 5.8 16 8V11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="15.5" r="1.5" fill="currentColor" />
  </svg>
);

export const BackArrowIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 19L8 12L15 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


// --- Zodiac Sign Icons ---

const AriesIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 20C6 20 6 10 6 8C6 5.2 8.2 3 11 3H13C15.8 3 18 5.2 18 8C18 10 18 20 18 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line x1="12" y1="6" x2="12" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TaurusIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="15" r="6" stroke="currentColor" strokeWidth="2" />
    <path
      d="M5 3C5 3 5 7 8 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M19 3C19 3 19 7 16 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 7C8 7 10 9 12 9C14 9 16 7 16 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const GeminiIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="4" x2="8" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="4" x2="16" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 4H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 20H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CancerIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 10C4 10 8 6 14 6C18 6 20 8 20 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="7" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M20 14C20 14 16 18 10 18C6 18 4 16 4 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="17" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const LeoIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M14 8C14 8 18 8 18 12C18 16 14 16 14 16C14 16 14 20 18 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const VirgoIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 20V8C4 5 6 4 6 4L9 12L12 4C12 4 14 5 14 8V14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 14C14 14 16 14 18 16C20 18 20 20 20 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line x1="16" y1="18" x2="20" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const LibraIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="4" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="20" x2="12" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M5 10C5 10 5 6 8.5 6C12 6 12 10 12 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 10C12 10 12 6 15.5 6C19 6 19 10 19 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line x1="4" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ScorpioIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 20V8C4 5 6 4 6 4L9 12L12 4C12 4 14 5 14 8V16C14 16 14 20 18 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 17L19 20L16 23"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SagittariusIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="19" x2="19" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <polyline points="13,5 19,5 19,11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="7" y1="13" x2="13" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CapricornIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 4L8 16C8 16 8 20 12 20C16 20 16 16 16 16V8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M16 14C16 14 16 17 15 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AquariusIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 9L6 7L9 9L12 7L15 9L18 7L21 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 15L6 13L9 15L12 13L15 15L18 13L21 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PiscesIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 4C6 4 10 8 10 12C10 16 6 20 6 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M18 4C18 4 14 8 14 12C14 16 18 20 18 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);


export const ZodiacSignIcons: Record<string, React.FC<IconProps>> = {
  aries: AriesIcon,
  taurus: TaurusIcon,
  gemini: GeminiIcon,
  cancer: CancerIcon,
  leo: LeoIcon,
  virgo: VirgoIcon,
  libra: LibraIcon,
  scorpio: ScorpioIcon,
  sagittarius: SagittariusIcon,
  capricorn: CapricornIcon,
  aquarius: AquariusIcon,
  pisces: PiscesIcon,
};
