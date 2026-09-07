import React from 'react';

/**
 * LocationMapCard Component - Stitch Terra Live Radar Edition
 */
export default function LocationMapCard({ city, district, state, country, latitude, longitude }) {
  return (
    <div className="terra-card rounded-2xl overflow-hidden relative min-h-[220px] flex flex-col group">
      {/* Radar Grid Visual in clean sage / forest tones */}
      <div className="absolute inset-0 bg-[#eef3eb]">
        <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="radarGridTerra" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#4a7c59" strokeWidth="0.75" opacity="0.4"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#radarGridTerra)"></rect>
          <circle cx="50%" cy="50%" r="80" fill="none" stroke="#4a7c59" strokeWidth="1.25" opacity="0.4"></circle>
          <circle cx="50%" cy="50%" r="45" fill="none" stroke="#4a7c59" strokeWidth="1.25" opacity="0.5"></circle>
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#4a7c59" strokeWidth="1.2" opacity="0.35"></line>
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#4a7c59" strokeWidth="1.2" opacity="0.35"></line>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent"></div>
      </div>

      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <h3 className="text-[18px] font-bold text-[#1e2923] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm animate-pulse"></span>
            Live Radar
          </h3>
          <button className="w-8 h-8 rounded-xl bg-white/90 hover:bg-white flex items-center justify-center border border-[#dce4da] text-[#1e2923] shadow-sm transition-colors">
            <span className="material-symbols-outlined text-[18px]">open_in_full</span>
          </button>
        </div>

        <div className="mt-auto pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-primary/30 text-primary text-[12px] font-bold shadow-sm">
            <span className="material-symbols-outlined text-[17px] text-primary animate-spin" style={{ animationDuration: '4s' }}>
              radar
            </span>
            Scanning local airspace in {city || 'Mumbai'}...
          </div>
        </div>
      </div>
    </div>
  );
}
