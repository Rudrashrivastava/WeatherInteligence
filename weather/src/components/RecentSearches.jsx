import React from 'react';

export default function RecentSearches({ cities, onSelectCity, onClear }) {
  if (!cities || cities.length === 0) return null;

  return (
    <div className="flex items-center gap-2 mb-6 flex-wrap">
      <span className="text-xs font-bold text-[#5c6f64] uppercase tracking-wider">Quick Searches:</span>
      <button
        onClick={onClear}
        className="text-[11px] font-bold text-error hover:underline px-2 py-0.5 rounded bg-error/10"
      >
        Clear
      </button>
      <div className="flex gap-2 flex-wrap">
        {cities.map((city, idx) => (
          <button
            key={`${city}-${idx}`}
            onClick={() => onSelectCity(city)}
            className="px-3 py-1 rounded-xl bg-white border border-[#e3e9e1] hover:border-primary/40 hover:bg-[#eef4ec] text-[#3d4a41] hover:text-primary font-semibold text-xs transition-all shadow-sm"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
