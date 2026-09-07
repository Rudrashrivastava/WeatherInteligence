import React from 'react';

/**
 * TemperatureDisplay Component (Level 3 Grandchild Component)
 * 
 * 🔗 PROPS DRILLING PATH:
 * App -> WeatherDashboard -> CurrentWeatherCard -> TemperatureDisplay
 * 
 * Receives:
 *  - tempC: number (Celsius value held in top-level App state)
 *  - unit: 'C' | 'F' (Unit choice held in top-level App state)
 *  - condition: string
 */
export default function TemperatureDisplay({ tempC, unit, condition }) {
  // Convert Celsius to Fahrenheit if unit is 'F'
  const displayTemp = unit === 'F' ? Math.round((tempC * 9) / 5 + 32) : tempC;

  return (
    <div className="temperature-display">
      <div className="temp-value-wrapper">
        <span className="temp-number">{displayTemp}</span>
        <span className="temp-unit">°{unit}</span>
      </div>
      <div className="condition-label">{condition}</div>
    </div>
  );
}
