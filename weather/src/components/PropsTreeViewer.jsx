import React, { useState } from 'react';

/**
 * PropsTreeViewer Component
 * Interactive visual guide embedded directly in the app to teach
 * Component-Based Architecture and Props Drilling concepts.
 */
export default function PropsTreeViewer({ unit, city }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="props-tree-viewer">
      <div className="tree-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="tree-title">
          <span className="badge-tag">React Concept</span>
          <h3>🧩 Props Drilling & Component Tree Inspector</h3>
        </div>
        <button className="toggle-tree-btn">{isOpen ? '▼ Hide' : '▲ Show Inspector'}</button>
      </div>

      {isOpen && (
        <div className="tree-content">
          <p className="tree-description">
            In React, state flows downwards from parent to child components via <strong>Props</strong>. When a deeply nested child needs state held in a parent, the data must pass through intermediate components — this is called <strong>Props Drilling</strong>.
          </p>

          <div className="tree-diagram">
            {/* Level 0 */}
            <div className="tree-node root-node">
              <span className="node-level">Level 0 (Root State Owner)</span>
              <span className="node-name">&lt;App /&gt;</span>
              <div className="node-props">
                <span>state: unit = "{unit}"</span>
                <span>state: currentCity = "{city}"</span>
              </div>
            </div>

            <div className="tree-connector">│</div>

            {/* Level 1 */}
            <div className="tree-level-group">
              <div className="tree-node level-1-node">
                <span className="node-level">Level 1 (Parent Container)</span>
                <span className="node-name">&lt;WeatherDashboard /&gt;</span>
                <div className="node-props">
                  <span>props passed down: unit="{unit}", weatherData</span>
                </div>
              </div>
            </div>

            <div className="tree-connector">├─── ┬ ───┐</div>

            {/* Level 2 */}
            <div className="tree-level-grid">
              <div className="tree-node level-2-node">
                <span className="node-level">Level 2</span>
                <span className="node-name">&lt;CurrentWeatherCard /&gt;</span>
                <div className="node-props">
                  <span>props: weatherData, unit="{unit}"</span>
                </div>
              </div>

              <div className="tree-node level-2-node">
                <span className="node-level">Level 2</span>
                <span className="node-name">&lt;WeatherDetailsGrid /&gt;</span>
                <div className="node-props">
                  <span>props: weatherData, unit="{unit}"</span>
                </div>
              </div>

              <div className="tree-node level-2-node">
                <span className="node-level">Level 2</span>
                <span className="node-name">&lt;ForecastSection /&gt;</span>
                <div className="node-props">
                  <span>props: forecast, unit="{unit}"</span>
                </div>
              </div>
            </div>

            <div className="tree-connector">│ (Drilled deeper)</div>

            {/* Level 3 */}
            <div className="tree-level-grid level-3">
              <div className="tree-node level-3-node">
                <span className="node-level">Level 3 (Grandchild)</span>
                <span className="node-name">&lt;TemperatureDisplay /&gt;</span>
                <div className="node-props">
                  <span>props: tempC, unit="{unit}", condition</span>
                </div>
              </div>

              <div className="tree-node level-3-node">
                <span className="node-level">Level 3 (Grandchild)</span>
                <span className="node-name">&lt;DetailItem /&gt;</span>
                <div className="node-props">
                  <span>props: icon, label, value, unitLabel</span>
                </div>
              </div>

              <div className="tree-node level-3-node">
                <span className="node-level">Level 3 (Grandchild)</span>
                <span className="node-name">&lt;ForecastCard /&gt;</span>
                <div className="node-props">
                  <span>props: dayData, unit="{unit}"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
