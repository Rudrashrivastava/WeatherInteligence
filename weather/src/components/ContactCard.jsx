import React from 'react';
import { motion } from 'framer-motion';

/**
 * ContactCard Component with Framer Motion animations and responsive grid fix
 */
export default function ContactCard() {
  const contactList = [
    { icon: '🚨', label: 'National Emergency', value: '112 (Toll Free)', color: '#f87171' },
    { icon: '🌊', label: 'Disaster Response (NDRF)', value: '1078 / 011-24363260', color: '#38bdf8' },
    { icon: '🚑', label: 'Medical Ambulance', value: '108', color: '#34d399' },
    { icon: '📡', label: 'Meteorological Dept Desk', value: 'support@atmosphere.weather.gov', color: '#a855f7' },
  ];

  return (
    <motion.div
      className="contact-card-section"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-card-header">
        <span className="contact-icon">📞</span>
        <div>
          <h4>Emergency Weather & Disaster Control Helpline</h4>
          <p>Quick assistance during extreme weather, flood or storm emergencies</p>
        </div>
      </div>

      <div className="contact-grid">
        {contactList.map((item, idx) => (
          <motion.div
            key={idx}
            className="contact-item"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 350 }}
          >
            <span className="c-icon">{item.icon}</span>
            <div className="c-details">
              <span className="c-label">{item.label}</span>
              <span className="c-val" style={{ color: item.color }}>{item.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
