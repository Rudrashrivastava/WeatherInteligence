import React from 'react';

/**
 * QuickActionsCard Component - Stitch Terra Edition
 */
export default function QuickActionsCard() {
  return (
    <div className="terra-card rounded-2xl p-6 flex-1 flex flex-col">
      <h3 className="text-[18px] font-bold text-[#1e2923] mb-4">Quick Actions</h3>
      <div className="space-y-3 flex-1 flex flex-col justify-center">
        <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#f8faf7] border border-[#e3e9e1] hover:bg-[#eef4ec] hover:border-primary/40 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[19px]">sensors</span>
            </div>
            <span className="text-sm font-bold text-[#1e2923]">Sensor Status</span>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm"></span>
        </button>

        <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#f8faf7] border border-[#e3e9e1] hover:bg-[#fbf5eb] hover:border-[#c4a66a]/40 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#c4a66a]/15 border border-[#c4a66a]/30 flex items-center justify-center text-[#705c30] group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[19px]">campaign</span>
            </div>
            <span className="text-sm font-bold text-[#1e2923]">Broadcast Alert</span>
          </div>
          <span className="material-symbols-outlined text-[#5c6f64] group-hover:text-[#1e2923] transition-colors text-[19px]">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}
