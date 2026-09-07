import React from 'react';

/**
 * ForecastSection Component - Stitch Terra 5-Day Forecast
 */
export default function ForecastSection({ forecast, unit }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="terra-card rounded-2xl p-6">
      <h3 className="text-[18px] font-bold text-[#1e2923] mb-6">5-Day Forecast</h3>
      <div className="space-y-5">
        {forecast.map((item, idx) => {
          const displayMax = unit === 'F' ? Math.round((item.maxTempC * 9) / 5 + 32) : item.maxTempC;
          const displayMin = unit === 'F' ? Math.round((item.minTempC * 9) / 5 + 32) : item.minTempC;

          return (
            <div key={idx} className="flex items-center justify-between">
              <span className={`text-sm w-14 ${idx === 0 ? 'font-bold text-[#1e2923]' : 'font-medium text-[#3d4a41]'}`}>
                {item.day}
              </span>
              <span
                className={`material-symbols-outlined text-[22px] ${item.icon === '☀️' ? 'text-[#c4a66a]' : 'text-primary'}`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon === '☀️' ? 'wb_sunny' : item.icon === '🌧️' ? 'rainy' : item.icon === '⛅' ? 'partly_cloudy_day' : 'cloud'}
              </span>

              <div className="flex-1 mx-4 h-2 bg-[#e6ece4] rounded-full overflow-hidden flex p-0.5">
                <div
                  className={`h-full rounded-full ${
                    item.icon === '☀️'
                      ? 'bg-gradient-to-r from-[#e0be77] to-[#c4a66a] w-full'
                      : 'bg-gradient-to-r from-[#78a886] to-primary w-3/4 ml-auto'
                  }`}
                ></div>
              </div>

              <div className="flex gap-2 text-[13px] font-bold w-16 justify-end">
                <span className="text-[#74796e]">{displayMin}°</span>
                <span className="text-[#1e2923]">{displayMax}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
