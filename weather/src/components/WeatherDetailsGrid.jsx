import React from 'react';
import DetailItem from './DetailItem';
import AirQualityCard from './AirQualityCard';
import SunTimelineCard from './SunTimelineCard';

/**
 * WeatherDetailsGrid Component (Level 2 Child Component)
 * 
 * Receives:
 *  - weatherData: Object containing humidity, windKmh, pressureHpa, uvIndex, aqi, sunrise, sunset...
 *  - unit: 'C' | 'F'
 */
export default function WeatherDetailsGrid({ weatherData, unit }) {
  const { humidity, windKmh, windDir, pressureHpa, uvIndex, visibilityKm, aqi, sunrise, sunset } = weatherData;

  const windDisplay = unit === 'F' ? Math.round(windKmh * 0.621371) : windKmh;
  const windUnit = unit === 'F' ? 'mph' : 'km/h';

  const detailsList = [
    { icon: '💧', label: 'Humidity', value: humidity, unitLabel: '%' },
    { icon: '💨', label: 'Wind Speed', value: `${windDisplay} ${windUnit}`, unitLabel: `(${windDir}°)` },
    { icon: '⏲️', label: 'Pressure', value: pressureHpa, unitLabel: 'hPa' },
    { icon: '☀️', label: 'UV Index', value: uvIndex, unitLabel: '/10' },
    { icon: '👁️', label: 'Visibility', value: visibilityKm, unitLabel: 'km' },
  ];

  return (
    <div className="weather-details-section">
      <h3 className="section-title">Atmospheric Highlights & Environmental Metrics</h3>
      
      <div className="widgets-row">
        {/* Air Quality Index Card */}
        <AirQualityCard aqi={aqi} />

        {/* Sunrise & Sunset Cycle Card */}
        <SunTimelineCard sunrise={sunrise} sunset={sunset} />
      </div>

      <div className="details-grid">
        {detailsList.map((item, index) => (
          <DetailItem
            key={index}
            icon={item.icon}
            label={item.label}
            value={item.value}
            unitLabel={item.unitLabel}
          />
        ))}
      </div>
    </div>
  );
}
