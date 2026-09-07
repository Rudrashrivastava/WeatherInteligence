import React from 'react';

/**
 * HourlyForecast Component - Stitch Terra 24-Hour Timeline
 */
export default function HourlyForecast({ hourly, unit }) {
  if (!hourly || hourly.length === 0) return null;

  return (
    <div className="terra-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[18px] font-bold text-[#1e2923] tracking-tight">24-Hour Forecast</h3>
        <span className="text-primary text-[13px] font-bold flex items-center gap-1">
          <span>Full Details</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        </span>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto pb-2 gap-3.5 scrollbar-hide">
        {hourly.map((item, idx) => {
          const displayTemp = unit === 'F' ? Math.round((item.tempC * 9) / 5 + 32) : item.tempC;
          const isNow = idx === 0;

          return (
            <div
              key={idx}
              className={`flex flex-col items-center min-w-[76px] p-3.5 rounded-xl border gap-2 transition-all ${
                isNow
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-[#f8faf7] border-[#e3e9e1] hover:border-primary/40 hover:bg-white'
              }`}
            >
              <span className={`text-[11px] font-bold ${isNow ? 'text-white/90 uppercase tracking-wider' : 'text-[#5c6f64]'}`}>
                {isNow ? 'Now' : item.time}
              </span>

              <span className={`material-symbols-outlined text-[28px] ${isNow ? 'text-white' : 'text-primary'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                {item.icon === '☀️' ? 'wb_sunny' : item.icon === '🌧️' ? 'rainy' : item.icon === '🌩️' ? 'thunderstorm' : 'cloud'}
              </span>

              <span className={`text-[16px] font-bold ${isNow ? 'text-white' : 'text-[#1e2923]'}`}>
                {displayTemp}°
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
