import React from 'react';

/**
 * Header Component - Stitch Terra Edition
 */
export default function Header({ unit, onToggleUnit, onDetectLocation, locationLoading }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 terra-card rounded-2xl p-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            sensors
          </span>
        </div>
        <div>
          <h1 className="text-[19px] text-[#1e2923] font-bold leading-none">Atmosphere</h1>
          <p className="text-[10px] text-primary uppercase tracking-widest font-semibold mt-0.5">Live Monitoring</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onDetectLocation}
          disabled={locationLoading}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#eef4ec] hover:bg-[#e2ede0] text-primary border border-primary/30 font-semibold text-xs transition-all shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">
            {locationLoading ? 'hourglass_top' : 'my_location'}
          </span>
          <span>{locationLoading ? 'Locating...' : 'My Location'}</span>
        </button>

        <div className="flex items-center p-1 rounded-xl bg-[#f0ece4] border border-[#dce4da]">
          <button
            onClick={() => onToggleUnit('C')}
            className={`px-3 py-1 rounded-lg font-bold text-xs transition-all ${
              unit === 'C' ? 'bg-primary text-white shadow-sm' : 'text-[#5c6f64] hover:text-[#1e2923]'
            }`}
          >
            °C
          </button>
          <button
            onClick={() => onToggleUnit('F')}
            className={`px-3 py-1 rounded-lg font-bold text-xs transition-all ${
              unit === 'F' ? 'bg-primary text-white shadow-sm' : 'text-[#5c6f64] hover:text-[#1e2923]'
            }`}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}
