import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WeatherAlertsBanner({ situationAlerts, city }) {
  if (!situationAlerts || situationAlerts.length === 0) return null;

  return (
    <motion.div
      className="situation-banner-section"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="section-title-wrapper">
        <span className="live-pulse"></span>
        <h3 className="section-title">Nearby Area Situation & Live Advisory</h3>
      </div>

      <div className="alerts-container">
        <AnimatePresence>
          {situationAlerts.map((alert, idx) => (
            <motion.div
              key={idx}
              className={`alert-card alert-${alert.type}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <div className="alert-badge">
                {alert.type === 'alert' && '🔴 SEVERE'}
                {alert.type === 'warning' && '🟡 CAUTION'}
                {alert.type === 'info' && '🔵 ADVISORY'}
                {alert.type === 'success' && '🟢 CLEAR'}
              </div>
              <div className="alert-details">
                <h4>{alert.title}</h4>
                <p>{alert.message}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
