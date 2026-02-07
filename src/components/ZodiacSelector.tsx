import React from 'react';
import { ZodiacSign } from '../types';
import { getZodiacSigns } from '../utils/fortune-engine';
import { ZodiacSignIcons } from './BrandIcons';

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
      {/* Header */}
      <div className="selector-header">
        <img
          src="/mascot/mascot-main.png"
          alt="별여우"
          className="home-mascot"
        />
        <h1 className="selector-title">별이 뭐래</h1>
        <p className="selector-date">{getTodayDate()}</p>
        {streak > 0 && (
          <div className="streak-badge">
            <img
              src="/mascot/streak-fire-xs.png"
              alt="스트릭"
              className="streak-mascot-xs"
            />
            <span>{streak}일 연속 방문</span>
          </div>
        )}
      </div>

      {/* Zodiac Grid */}
      <div className="zodiac-section">
        <p className="zodiac-section-title">
          <img
            src="/mascot/zodiac-wheel-xs.png"
            alt=""
            className="section-mascot-xs"
          />
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
