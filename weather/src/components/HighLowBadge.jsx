import React from 'react';

/**
 * HighLowBadge Component (Level 3 Grandchild Component)
 * 
 * 🔗 PROPS DRILLING PATH:
 * App -> WeatherDashboard -> CurrentWeatherCard -> HighLowBadge
 * 
 * Receives:
 *  - highC: number
 *  - lowC: number
 *  - unit: 'C' | 'F'
 */
export default function HighLowBadge({ highC, lowC, unit }) {
  const displayHigh = unit === 'F' ? Math.round((highC * 9) / 5 + 32) : highC;
  const displayLow = unit === 'F' ? Math.round((lowC * 9) / 5 + 32) : lowC;

  return (
    <div className="high-low-badge">
      <span className="hl-item high">
        <span className="arrow">▲</span> H: {displayHigh}°{unit}
      </span>
      <span className="divider">|</span>
      <span className="hl-item low">
        <span className="arrow">▼</span> L: {displayLow}°{unit}
      </span>
    </div>
  );
}
