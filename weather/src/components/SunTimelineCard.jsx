import React from 'react';

/**
 * SunTimelineCard Component - Stitch Terra Edition
 */
export default function SunTimelineCard({ sunrise, sunset }) {
  return (
    <div className="terra-card rounded-2xl p-6">
      <h3 className="text-[18px] font-bold text-[#1e2923] mb-4">Sun & Moon</h3>
      <div className="relative h-24 w-full flex justify-center items-end border-b border-[#e3e9e1] pb-2 mb-4">
        {/* Arc SVG */}
        <svg className="absolute bottom-2 w-full h-24" preserveAspectRatio="none" viewBox="0 0 200 100">
          <path d="M 15 95 Q 100 -10 185 95" fill="none" stroke="#d5ded3" strokeDasharray="5 5" strokeWidth="2"></path>
          <path d="M 15 95 Q 60 25 105 15" fill="none" stroke="#4a7c59" strokeLinecap="round" strokeWidth="3.5"></path>
        </svg>
        {/* Sun Icon on Arc */}
        <div className="absolute left-[52%] top-[14%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-[#c4a66a] shadow-sm">
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            wb_sunny
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center px-2">
        <div className="text-left">
          <p className="text-[11px] text-[#5c6f64] uppercase font-bold tracking-wider">Sunrise</p>
          <p className="text-[#1e2923] font-bold text-[15px] mt-0.5">{sunrise || '06:42'}</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-[#5c6f64] uppercase font-bold tracking-wider">Sunset</p>
          <p className="text-[#1e2923] font-bold text-[15px] mt-0.5">{sunset || '18:14'}</p>
        </div>
      </div>
    </div>
  );
}
