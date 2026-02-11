import React from 'react';
import { FortuneResult, ZodiacSign } from '../types';
import { getZodiacSigns } from '../utils/fortune-engine';
import {
  ZodiacSignIcons,
  PaletteIcon,
  HashIcon,
  CompassChipIcon,
  ClockChipIcon,
} from './BrandIcons';

interface ResultScreenProps {
  result: FortuneResult;
  signId: string;
  premiumUnlocked: boolean;
  onBack: () => void;
  onUnlockPremium: () => void;
  adLoading: boolean;
}

const GRADE_MASCOT: Record<string, string> = {
  S: '/mascot/grade-s.png',
  A: '/mascot/grade-a.png',
  B: '/mascot/grade-b.png',
  C: '/mascot/grade-c.png',
  D: '/mascot/grade-d.png',
};

const GRADE_LABELS: Record<string, string> = {
  S: '최고의 하루',
  A: '좋은 하루',
  B: '평온한 하루',
  C: '주의하는 하루',
  D: '재충전의 하루',
};

const GRADE_STARS: Record<string, number> = {
  S: 5,
  A: 4,
  B: 3,
  C: 2,
  D: 1,
};

const LUCKY_CHIP_ICONS: Record<string, React.FC<{ size?: number }>> = {
  color: PaletteIcon,
  number: HashIcon,
  direction: CompassChipIcon,
  time: ClockChipIcon,
};

const LUCKY_CHIPS: { key: keyof FortuneResult['luckyItems']; label: string }[] = [
  { key: 'color', label: '색' },
  { key: 'number', label: '숫자' },
  { key: 'direction', label: '방향' },
  { key: 'time', label: '시간' },
];

function extractCompatSign(text?: string): string | null {
  if (!text) return null;
  const signs = getZodiacSigns();
  for (const sign of signs) {
    if (text.includes(sign.name)) return sign.id;
  }
  return null;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  result,
  signId,
  premiumUnlocked,
  onBack,
  onUnlockPremium,
  adLoading,
}) => {
  const signs = getZodiacSigns();
  const currentSign = signs.find((s: ZodiacSign) => s.id === signId);
  const starCount = GRADE_STARS[result.grade] || 3;
  const compatSignId = extractCompatSign(result.premiumContent?.compatibility);
  const compatSign = compatSignId ? signs.find(s => s.id === compatSignId) : null;

  const CurrentSignIcon = currentSign ? ZodiacSignIcons[currentSign.id] : null;
  const CompatSignIcon = compatSign ? ZodiacSignIcons[compatSign.id] : null;

  return (
    <div className="result-screen">
      {/* Header removed — Toss navbar provides back + app title */}

      {/* Section 1: Constellation Hero */}
      <div className="constellation-hero">
        <div className="hero-sign-icon">
          {CurrentSignIcon && <CurrentSignIcon size={40} />}
        </div>
        <h2 className="hero-sign-name">{currentSign?.name}</h2>
        <span className="hero-sign-meta">{currentSign?.dateRange} · {currentSign?.element}</span>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map(i => (
            <span key={i} className={i <= starCount ? 'star-filled' : 'star-empty'}>★</span>
          ))}
        </div>
        <span className="grade-label">{result.grade} · {GRADE_LABELS[result.grade]}</span>
      </div>

      {/* Section 2: Fox Speech Bubble */}
      <div className="fox-message">
        <img
          src={GRADE_MASCOT[result.grade]}
          alt={GRADE_LABELS[result.grade]}
          className="fox-message-mascot"
        />
        <div className="speech-bubble">
          <p className="speech-title">"{result.title}"</p>
        </div>
        <p className="fortune-body">{result.description}</p>
      </div>

      {/* Section 3: Constellation Energy (Star Scale) */}
      <div className="energy-section">
        <h3 className="section-heading">오늘의 별자리 에너지</h3>
        {result.scores.map((score, idx) => {
          const scoreStars = Math.round(score.value / 20);
          return (
            <div key={idx} className="energy-row">
              <span className="energy-label">{score.label}</span>
              <div className="energy-stars">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className={i <= scoreStars ? 'star-filled' : 'star-empty'}>★</span>
                ))}
              </div>
              <span className="energy-value">{score.value}</span>
            </div>
          );
        })}
      </div>

      {/* Section 4: Lucky Compass (Horizontal Chips) */}
      <div className="compass-section">
        <h3 className="section-heading">행운의 나침반</h3>
        <div className="compass-chips">
          {LUCKY_CHIPS.map(chip => {
            const ChipIcon = LUCKY_CHIP_ICONS[chip.key];
            return (
              <div key={chip.key} className="compass-chip">
                <span className="chip-icon">
                  {ChipIcon && <ChipIcon size={22} />}
                </span>
                <span className="chip-value">{String(result.luckyItems[chip.key])}</span>
                <span className="chip-label">{chip.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 5: Fox Tip */}
      <div className="fox-tip">
        <img src="/mascot/star-wand-xs.png" alt="" className="fox-tip-icon" />
        <p className="fox-tip-text">"{result.advice}"</p>
      </div>

      {/* Section 6: Compatibility VS Matching */}
      <div className="match-section">
        <h3 className="section-heading">별자리 궁합</h3>
        <div className="match-card">
          <div className="match-vs">
            <div className="match-sign">
              <div className="match-sign-circle">
                {CurrentSignIcon && <CurrentSignIcon size={28} />}
              </div>
              <span className="match-sign-name">{currentSign?.name}</span>
            </div>
            <span className="vs-badge">❤️</span>
            <div className="match-sign">
              <div className="match-sign-circle compat">
                {CompatSignIcon ? (
                  <CompatSignIcon size={28} />
                ) : (
                  <span style={{ fontSize: 20 }}>?</span>
                )}
              </div>
              <span className="match-sign-name">
                {premiumUnlocked && compatSign ? compatSign.name : '???'}
              </span>
            </div>
          </div>

          {premiumUnlocked ? (
            <p className="match-text">{result.premiumContent?.compatibility}</p>
          ) : (
            <>
              <button
                className="btn-premium"
                onClick={onUnlockPremium}
                disabled={adLoading}
              >
                <span className="ad-badge">AD</span>
                {adLoading ? '로딩 중...' : '궁합 해석 보기'}
              </button>
              <p className="ad-notice">광고 시청 후 궁합 정보를 확인하세요</p>
            </>
          )}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="button-group">
        <button className="btn-primary" onClick={onBack}>
          다른 별자리 보기
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
