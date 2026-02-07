import React from 'react';
import { FortuneResult, ZodiacSign } from '../types';
import { getZodiacSigns } from '../utils/fortune-engine';
import {
  BackArrowIcon,
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

const GRADE_MASCOT: Record<string, string> = {
  S: '/mascot/grade-s.png',
  A: '/mascot/grade-a.png',
  B: '/mascot/grade-b.png',
  C: '/mascot/grade-c.png',
  D: '/mascot/grade-d.png',
};

const gradeColors: Record<string, string> = {
  S: '#F59E0B',
  A: '#1A237E',
  B: '#3B82F6',
  C: '#9CA3AF',
  D: '#6B7280',
};

const GRADE_LABELS: Record<string, string> = {
  S: '최고의 하루',
  A: '좋은 하루',
  B: '평온한 하루',
  C: '주의하는 하루',
  D: '재충전의 하루',
};

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

  const getScoreColor = (value: number): string => {
    if (value >= 80) return 'var(--gold)';
    if (value >= 60) return 'var(--primary)';
    if (value >= 40) return 'var(--blue)';
    return 'var(--text-tertiary)';
  };

  return (
    <div className="result-screen">
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

          {/* Grade Mascot */}
          <img
            src={GRADE_MASCOT[result.grade]}
            alt={GRADE_LABELS[result.grade]}
            className="grade-mascot"
          />

          <div
            className="result-grade-badge"
            style={{ background: gradeColors[result.grade] }}
          >
            {result.grade}
          </div>
          <div className="result-grade-label" style={{ color: gradeColors[result.grade] }}>
            {GRADE_LABELS[result.grade]}
          </div>

          <h2 className="result-title">{result.title}</h2>
          <p className="result-description">{result.description}</p>
        </div>

        {/* Scores Section */}
        <div className="scores-section">
          <div className="scores-title">
            <img src="/mascot/star-wand-xs.png" alt="" className="section-mascot-xs" />
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
            <img src="/mascot/lucky-charm-xs.png" alt="" className="section-mascot-xs" />
            행운 아이템
          </div>
          <div className="lucky-grid">
            <div className="lucky-item">
              <div className="lucky-item-icon">
                <img src="/mascot/lucky-charm-xs.png" alt="" className="section-mascot-xs" />
              </div>
              <div className="lucky-item-label">행운의 색</div>
              <div className="lucky-item-value">{result.luckyItems.color}</div>
            </div>
            <div className="lucky-item">
              <div className="lucky-item-icon">
                <img src="/mascot/crystal-gaze-xs.png" alt="" className="section-mascot-xs" />
              </div>
              <div className="lucky-item-label">행운의 숫자</div>
              <div className="lucky-item-value">{result.luckyItems.number}</div>
            </div>
            <div className="lucky-item">
              <div className="lucky-item-icon">
                <img src="/mascot/zodiac-wheel-xs.png" alt="" className="section-mascot-xs" />
              </div>
              <div className="lucky-item-label">행운의 방향</div>
              <div className="lucky-item-value">{result.luckyItems.direction}</div>
            </div>
            <div className="lucky-item">
              <div className="lucky-item-icon">
                <img src="/mascot/mascot-main-xs.png" alt="" className="section-mascot-xs" />
              </div>
              <div className="lucky-item-label">행운의 시간</div>
              <div className="lucky-item-value">{result.luckyItems.time}</div>
            </div>
          </div>
        </div>

        {/* Advice */}
        <div className="advice-section">
          <div className="advice-card">
            <div className="advice-icon">
              <img src="/mascot/star-wand-xs.png" alt="" style={{ width: 24, height: 24 }} />
            </div>
            <div className="advice-text">{result.advice}</div>
          </div>
        </div>

        {/* Premium - Compatibility */}
        <div className="premium-section">
          <div className={`premium-card ${premiumUnlocked ? 'unlocked' : ''}`}>
            {premiumUnlocked ? (
              <div className="premium-unlocked-content">
                <div className="premium-content-title">
                  <img src="/mascot/heart-pair-xs.png" alt="" style={{ width: 20, height: 20 }} />
                  궁합 별자리
                </div>
                <p className="premium-content-text">
                  {result.premiumContent?.compatibility}
                </p>
              </div>
            ) : (
              <>
                <div className="premium-locked-icon">
                  <img src="/mascot/premium-key-sm.png" alt="" className="section-mascot-sm" />
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
            다른 별자리 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
