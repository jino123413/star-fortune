import React from 'react';
import { FortuneResult, ZodiacSign } from '../types';
import { getZodiacSigns } from '../utils/fortune-engine';
import {
  BackArrowIcon,
  ScoreChartIcon,
  LuckySparkleIcon,
  LuckyColorIcon,
  LuckyNumberIcon,
  LuckyCompassIcon,
  LuckyClockIcon,
  AdviceIcon,
  CompatibilityIcon,
  LockIcon,
  ZodiacSignIcons,
} from './BrandIcons';

interface ResultScreenProps {
  result: FortuneResult;
  signId: string;
  premiumUnlocked: boolean;
  onBack: () => void;
  onUnlockPremium: () => void;
  adLoading: boolean;
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

  const gradeColors: Record<string, string> = {
    S: '#F59E0B',
    A: '#6366F1',
    B: '#3B82F6',
    C: '#6B7280',
    D: '#4B5563',
  };

  const gradeLabels: Record<string, string> = {
    S: '최고의 하루',
    A: '좋은 하루',
    B: '평온한 하루',
    C: '주의하는 하루',
    D: '재충전의 하루',
  };

  const getScoreColor = (value: number): string => {
    if (value >= 80) return 'var(--gold)';
    if (value >= 60) return 'var(--primary-light)';
    if (value >= 40) return 'var(--blue)';
    return 'var(--text-tertiary)';
  };

  return (
    <div className="result-screen">
      {/* Stars Background */}
      <div className="stars-bg">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className={`star ${i % 6 === 0 ? 'large' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--delay': `${Math.random() * 4}s`,
              '--duration': `${2 + Math.random() * 3}s`,
              '--max-opacity': `${0.3 + Math.random() * 0.5}`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Header */}
      <div className="result-header">
        <button className="back-button" onClick={onBack}>
          <BackArrowIcon size={22} />
        </button>
        <span className="result-header-title">별이 뭐래</span>
      </div>

      {/* Result Content */}
      <div className="result-content">
        {/* Main Card */}
        <div className="result-card">
          <div className="result-sign-info">
            <span className="result-sign-emoji">
              {currentSign && ZodiacSignIcons[currentSign.id]
                ? React.createElement(ZodiacSignIcons[currentSign.id], { size: 32 })
                : currentSign?.emoji}
            </span>
            <span className="result-sign-name">{currentSign?.name}</span>
            <span className="result-sign-date">{currentSign?.dateRange}</span>
          </div>

          <div className={`result-grade ${result.grade}`}>
            {result.grade}
          </div>
          <div className="result-grade-label" style={{ color: gradeColors[result.grade] }}>
            {gradeLabels[result.grade]}
          </div>

          <h2 className="result-title">{result.title}</h2>
          <p className="result-description">{result.description}</p>
        </div>

        {/* Scores Section */}
        <div className="scores-section">
          <div className="scores-title">
            <ScoreChartIcon size={18} />
            오늘의 운세 점수
          </div>
          {result.scores.map((score, idx) => (
            <div key={idx} className="score-row">
              <span className="score-label">{score.label}</span>
              <div className="score-bar-bg">
                <div
                  className="score-bar-fill"
                  style={{
                    width: `${score.value}%`,
                    background: getScoreColor(score.value),
                  }}
                />
              </div>
              <span className="score-value">{score.value}</span>
            </div>
          ))}
        </div>

        {/* Lucky Items */}
        <div className="lucky-section">
          <div className="lucky-title">
            <LuckySparkleIcon size={18} />
            행운 아이템
          </div>
          <div className="lucky-grid">
            <div className="lucky-item">
              <div className="lucky-item-icon"><LuckyColorIcon size={24} /></div>
              <div className="lucky-item-label">행운의 색</div>
              <div className="lucky-item-value">{result.luckyItems.color}</div>
            </div>
            <div className="lucky-item">
              <div className="lucky-item-icon"><LuckyNumberIcon size={24} /></div>
              <div className="lucky-item-label">행운의 숫자</div>
              <div className="lucky-item-value">{result.luckyItems.number}</div>
            </div>
            <div className="lucky-item">
              <div className="lucky-item-icon"><LuckyCompassIcon size={24} /></div>
              <div className="lucky-item-label">행운의 방향</div>
              <div className="lucky-item-value">{result.luckyItems.direction}</div>
            </div>
            <div className="lucky-item">
              <div className="lucky-item-icon"><LuckyClockIcon size={24} /></div>
              <div className="lucky-item-label">행운의 시간</div>
              <div className="lucky-item-value">{result.luckyItems.time}</div>
            </div>
          </div>
        </div>

        {/* Advice */}
        <div className="advice-section">
          <div className="advice-card">
            <div className="advice-icon"><AdviceIcon size={24} /></div>
            <div className="advice-text">{result.advice}</div>
          </div>
        </div>

        {/* Premium - Compatibility */}
        <div className="premium-section">
          <div className={`premium-card ${premiumUnlocked ? 'unlocked' : ''}`}>
            {premiumUnlocked ? (
              <div className="premium-unlocked-content">
                <div className="premium-content-title">
                  <CompatibilityIcon size={18} />
                  궁합 별자리
                </div>
                <p className="premium-content-text">
                  {result.premiumContent?.compatibility}
                </p>
              </div>
            ) : (
              <>
                <div className="premium-locked-icon">
                  <LockIcon size={28} />
                </div>
                <div className="premium-locked-title">궁합 별자리 보기</div>
                <div className="premium-locked-desc">
                  광고 시청 후 궁합 정보를 확인하세요
                </div>
                <button
                  className="btn-premium"
                  onClick={onUnlockPremium}
                  disabled={adLoading}
                >
                  <span className="ad-badge">AD</span>
                  {adLoading ? '로딩 중...' : '궁합 별자리 보기'}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="button-group">
          <button className="btn-primary" onClick={onBack}>
            <BackArrowIcon size={18} />
            다른 별자리 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
