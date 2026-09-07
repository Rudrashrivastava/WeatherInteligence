import React from 'react';

/**
 * SideNavBar Component - Stitch Terra Edition
 */
export default function SideNavBar({ activeTab, setActiveTab, onEmergencyTrigger }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', fill: true },
    { id: 'map', label: 'Map', icon: 'explore' },
    { id: 'analytics', label: 'Analytics', icon: 'query_stats' },
    { id: 'alerts', label: 'Alerts', icon: 'warning' },
    { id: 'contacts', label: 'Contacts', icon: 'contact_phone' },
  ];

  return (
    <nav className="hidden lg:flex flex-col h-screen p-4 space-y-6 bg-white/95 backdrop-blur-md text-on-surface-variant font-medium w-64 fixed left-0 top-0 border-r border-[#e3e9e1] shadow-[4px_0_24px_-4px_rgba(0,0,0,0.03)] z-50">
      <div className="flex items-center gap-3 mb-6 pl-2 pt-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            sensors
          </span>
        </div>
        <div>
          <h1 className="text-[21px] font-bold text-[#1e2923] leading-none tracking-tight">Atmosphere</h1>
          <p className="text-[11px] text-primary font-semibold mt-1 uppercase tracking-wider">Live Monitoring</p>
        </div>
      </div>

      <ul className="flex-1 space-y-1.5">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                activeTab === item.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-[#3d4a41] hover:text-primary hover:bg-[#eef4ec]'
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={item.fill || activeTab === item.id ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-4">
        <button
          onClick={onEmergencyTrigger}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#c2413b] hover:bg-[#b03732] text-white font-semibold text-[14px] shadow-sm transition-all"
        >
          <span className="material-symbols-outlined text-[19px]">emergency</span>
          Emergency SOS
        </button>
        <ul className="space-y-1 border-t border-[#e3e9e1] pt-3">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[#5c6f64] hover:text-[#1e2923] hover:bg-[#f0ece4] transition-all text-sm font-medium"
            >
              <span className="material-symbols-outlined text-[19px]">settings</span>
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[#5c6f64] hover:text-[#1e2923] hover:bg-[#f0ece4] transition-all text-sm font-medium"
            >
              <span className="material-symbols-outlined text-[19px]">help</span>
              Support
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
