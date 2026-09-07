import React from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';
import HourlyForecast from './HourlyForecast';
import ForecastSection from './ForecastSection';
import LocationMapCard from './LocationMapCard';
import AirQualityCard from './AirQualityCard';
import SunTimelineCard from './SunTimelineCard';
import QuickActionsCard from './QuickActionsCard';

/**
 * WeatherDashboard Component - Stitch Terra Screen Layout
 */
export default function WeatherDashboard({ weatherData, unit, loading, error }) {
  if (loading) {
    return (
      <div className="terra-card rounded-2xl p-12 text-center flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <p className="text-[#5c6f64] font-semibold text-sm">Connecting to Live Meteorological Sensors...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="terra-card rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3">
        <span className="material-symbols-outlined text-[36px] text-error">warning</span>
        <h3 className="text-lg font-bold text-error">Atmosphere Sensor Notice</h3>
        <p className="text-sm text-[#5c6f64]">{error}</p>
      </div>
    );
  }

  if (!weatherData) return null;

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-card-gap">
      {/* Main Stage (Left Column - 8 Cols) */}
      <div className="md:col-span-8 flex flex-col gap-card-gap">
        {/* 1. Hero Section: Current Weather */}
        <CurrentWeatherCard weatherData={weatherData} unit={unit} />

        {/* 2. 24-Hour Forecast Timeline */}
        <HourlyForecast hourly={weatherData.hourly} unit={unit} />

        {/* 3. Bottom Row Grids: 5-Day Forecast & Live Radar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-card-gap">
          <ForecastSection forecast={weatherData.forecast} unit={unit} />
          <LocationMapCard
            city={weatherData.city}
            district={weatherData.district}
            state={weatherData.state}
            country={weatherData.country}
            latitude={weatherData.latitude}
            longitude={weatherData.longitude}
          />
        </div>
      </div>

      {/* Side Console (Right Column - 4 Cols) */}
      <div className="md:col-span-4 flex flex-col gap-card-gap">
        {/* 1. AQI Meter Widget */}
        <AirQualityCard aqi={weatherData.aqi} />

        {/* 2. Daylight Arc Widget */}
        <SunTimelineCard sunrise={weatherData.sunrise} sunset={weatherData.sunset} />

        {/* 3. Quick Actions Widget */}
        <QuickActionsCard />
      </div>
    </div>
  );
}
