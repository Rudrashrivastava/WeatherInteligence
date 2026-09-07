import React from 'react';

/**
 * ForecastCard Component (Level 3 Grandchild Component)
 * 
 * Receives:
 *  - dayData: { day, maxTempC, minTempC, icon, condition, rainProb }
 *  - unit: 'C' | 'F'
 */
export default function ForecastCard({ dayData, unit }) {
  const { day, maxTempC, minTempC, icon, condition, rainProb } = dayData;
  const displayMax = unit === 'F' ? Math.round((maxTempC * 9) / 5 + 32) : maxTempC;
  const displayMin = unit === 'F' ? Math.round((minTempC * 9) / 5 + 32) : minTempC;

  return (
    <div className="forecast-card">
      <span className="forecast-day">{day}</span>
      <span className="forecast-icon">{icon}</span>

      <div className="forecast-temps">
        <span className="max-t">{displayMax}°</span>
        <span className="min-t">{displayMin}°</span>
      </div>

      <div className="forecast-rain-bar" title={`Rain probability: ${rainProb}%`}>
        <div className="rain-fill" style={{ width: `${Math.min(100, Math.max(10, rainProb))}%` }}></div>
      </div>

      <span className="forecast-condition">{condition}</span>
    </div>
  );
}
