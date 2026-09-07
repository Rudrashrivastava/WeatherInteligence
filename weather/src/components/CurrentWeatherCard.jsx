import React from 'react';

/**
 * CurrentWeatherCard Component - Stitch Terra Hero Edition
 */
export default function CurrentWeatherCard({ weatherData, unit }) {
  const { city, district, state, country, tempC, feelsLikeC, condition, windKmh } = weatherData;

  const displayTemp = unit === 'F' ? Math.round((tempC * 9) / 5 + 32) : tempC;
  const displayFeelsLike = unit === 'F' ? Math.round((feelsLikeC * 9) / 5 + 32) : feelsLikeC;
  const windDisplay = unit === 'F' ? `${Math.round(windKmh * 0.621371)} mph` : `${windKmh} km/h`;

  return (
    <div className="terra-card rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
      {/* Soft subtle organic gradient accents */}
      <div className="absolute -right-16 -top-16 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-[#c4a66a]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {state && (
              <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold tracking-wider uppercase">
                {state}
              </span>
            )}
            {district && (
              <span className="px-3 py-1 rounded-lg bg-[#f0ece4] text-[#5c6f64] border border-[#dce4da] text-[11px] font-bold tracking-wider uppercase">
                {district}
              </span>
            )}
            {country && (
              <span className="px-3 py-1 rounded-lg bg-[#f0ece4] text-[#5c6f64] border border-[#dce4da] text-[11px] font-bold tracking-wider uppercase">
                {country}
              </span>
            )}
          </div>
          <h2 className="text-[52px] leading-[58px] font-bold text-[#1e2923] tracking-tight">{city}</h2>
          <p className="text-[16px] text-[#5c6f64] font-medium mt-1">
            {condition} • Real Feel <span className="text-[#1e2923] font-bold">{displayFeelsLike}°{unit}</span>
          </p>
        </div>

        <div className="text-right">
          <div className="text-[76px] leading-none font-bold text-primary">{displayTemp}°</div>
          <div className="flex items-center justify-end gap-1.5 mt-3 text-primary bg-[#eef4ec] border border-primary/25 px-3 py-1 rounded-full shadow-sm">
            <span className="material-symbols-outlined text-[18px]">air</span>
            <span className="text-[13px] text-primary font-bold">{windDisplay}</span>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="relative z-10 mt-8 bg-[#fbf5eb] border border-[#d9c49a] rounded-xl p-4 flex items-center gap-4 alert-pulse-terra">
        <div className="w-10 h-10 rounded-xl bg-[#c4a66a]/20 flex items-center justify-center border border-[#c4a66a]/40 text-[#705c30] shrink-0">
          <span className="material-symbols-outlined text-[22px]">warning</span>
        </div>
        <div>
          <h4 className="text-[15px] font-bold text-[#705c30]">Live Area Situation</h4>
          <p className="text-[13px] text-[#5c6f64] mt-0.5">Atmosphere live monitoring active. Local weather conditions stable.</p>
        </div>
      </div>
    </div>
  );
}
