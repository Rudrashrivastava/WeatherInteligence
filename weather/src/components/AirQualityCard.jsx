import React from 'react';

/**
 * AirQualityCard Component - Stitch Terra Edition
 */
export default function AirQualityCard({ aqi }) {
  if (!aqi) return null;

  const { score, status, pm25, pm10 } = aqi;

  return (
    <div className="terra-card rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden">
      <h3 className="text-[18px] font-bold text-[#1e2923] self-start w-full mb-4">Air Quality</h3>

      {/* Semi-circular Gauge */}
      <div className="relative w-48 h-24 overflow-hidden mb-3 flex justify-center">
        {/* Track */}
        <div className="absolute w-44 h-44 rounded-full border-[10px] border-[#e6ece4] border-b-transparent border-r-transparent rotate-45"></div>
        {/* Active Track */}
        <div
          className="absolute w-44 h-44 rounded-full border-[10px] border-primary border-b-transparent border-r-transparent rotate-45"
          style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
        ></div>
        {/* Value */}
        <div className="absolute bottom-0 flex flex-col items-center">
          <span className="text-[44px] font-extrabold text-[#1e2923] leading-none tracking-tight">{score}</span>
          <span className="text-[12px] text-primary font-bold uppercase tracking-widest mt-0.5">{status}</span>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 gap-4 mt-2 border-t border-[#e3e9e1] pt-4">
        <div className="bg-[#f8faf7] p-2.5 rounded-xl border border-[#e3e9e1]">
          <p className="text-[11px] text-[#5c6f64] font-bold uppercase tracking-wide">PM2.5</p>
          <p className="text-[17px] text-[#1e2923] font-bold mt-0.5">
            {pm25} <span className="text-[10px] text-[#5c6f64] font-semibold">µg/m³</span>
          </p>
        </div>
        <div className="bg-[#f8faf7] p-2.5 rounded-xl border border-[#e3e9e1]">
          <p className="text-[11px] text-[#5c6f64] font-bold uppercase tracking-wide">PM10</p>
          <p className="text-[17px] text-[#1e2923] font-bold mt-0.5">
            {pm10} <span className="text-[10px] text-[#5c6f64] font-semibold">µg/m³</span>
          </p>
        </div>
      </div>
    </div>
  );
}
