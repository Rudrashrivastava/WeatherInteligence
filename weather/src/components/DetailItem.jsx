import React from 'react';

/**
 * DetailItem Component (Level 3 Grandchild Component)
 * 
 * 🔗 PROPS DRILLING PATH:
 * App -> WeatherDashboard -> WeatherDetailsGrid -> DetailItem
 * 
 * Receives:
 *  - icon: string
 *  - label: string
 *  - value: string | number
 *  - unitLabel: string
 */
export default function DetailItem({ icon, label, value, unitLabel }) {
  return (
    <div className="detail-item-card">
      <div className="detail-icon">{icon}</div>
      <div className="detail-meta">
        <span className="detail-label">{label}</span>
        <div className="detail-val-group">
          <span className="detail-value">{value}</span>
          {unitLabel && <span className="detail-unit">{unitLabel}</span>}
        </div>
      </div>
    </div>
  );
}
