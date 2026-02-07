import React from 'react';
import { ZodiacSign } from '../types';
import { getZodiacSigns } from '../utils/fortune-engine';
import { ConstellationIcon, StreakFireIcon, ZodiacSignIcons } from './BrandIcons';

interface ZodiacSelectorProps {
  streak: number;
  onSelect: (signId: string) => void;
  lastSignId: string;
}

const ZodiacSelector: React.FC<ZodiacSelectorProps> = ({ streak, onSelect, lastSignId }) => {
  const signs = getZodiacSigns();

  const getTodayDate = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const weekday = weekdays[now.getDay()];
    return `${month}월 ${day}일 ${weekday}요일`;
  };

  return (
    <div className="selector-screen">
      {/* Stars Background */}
      <div className="stars-bg">
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={i}
            className={`star ${i % 5 === 0 ? 'large' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--delay': `${Math.random() * 4}s`,
              '--duration': `${2 + Math.random() * 3}s`,
              '--max-opacity': `${0.4 + Math.random() * 0.6}`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Header */}
      <div className="selector-header">
        <div className="selector-header-icon"><ConstellationIcon size={32} /></div>
        <h1 className="selector-title">별이 뭐래</h1>
        <p className="selector-date">{getTodayDate()}</p>
        {streak > 0 && (
          <div className="streak-badge">
            <StreakFireIcon size={16} />
            <span>{streak}일 연속 방문</span>
          </div>
        )}
      </div>

      {/* Zodiac Grid */}
      <div className="zodiac-section">
        <p className="zodiac-section-title">
          <ConstellationIcon size={18} />
          나의 별자리를 선택하세요
        </p>
        <div className="zodiac-grid">
          {signs.map((sign: ZodiacSign) => (
            <button
              key={sign.id}
              className={`zodiac-card ${lastSignId === sign.id ? 'last-selected' : ''}`}
              onClick={() => onSelect(sign.id)}
            >
              {lastSignId === sign.id && (
                <div className="last-badge">MY</div>
              )}
              <div className="zodiac-card-emoji">
                {ZodiacSignIcons[sign.id] ? React.createElement(ZodiacSignIcons[sign.id], { size: 28 }) : sign.emoji}
              </div>
              <div className="zodiac-card-name">{sign.name}</div>
              <div className="zodiac-card-date">{sign.dateRange}</div>
              <div className="zodiac-card-element">{sign.element}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="selector-footer">
        <p>매일 자정에 운세가 바뀝니다</p>
      </div>
    </div>
  );
};

export default ZodiacSelector;
