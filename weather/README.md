# 🌍 Atmosphere Live — Weather Intelligence Dashboard (Terra Edition)

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![Open-Meteo API](https://img.shields.io/badge/API-Open--Meteo-008080.svg)](https://open-meteo.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Atmosphere Live** is a state-of-the-art, high-performance meteorological intelligence platform built with **React 19** and **Vite**. Designed with the **Stitch Terra Edition** aesthetic, it features live weather tracking, real-time air quality index (AQI) monitoring, interactive hourly timelines, 5-day forecasts, astronomical sun/moon trajectories, live radar scanning, and emergency assistance tools.

---

## ✨ Features

- 🌡️ **Real-Time Weather Metrics**: Instant access to ambient temperature, feels-like index, humidity, wind velocity/direction, surface pressure, atmospheric visibility, dew point, UV index, and precipitation.
- 🔍 **Smart Geocoding Autocomplete**: District & State aware location search resolving cities, towns, and regions accurately without duplicated titles.
- 📍 **GPS Geolocation Detection**: One-click instant auto-detection of your precise local weather coordinates.
- 💨 **Air Quality Index (AQI) Module**: Dynamic semi-circular AQI gauge monitoring PM2.5, PM10, SO₂, NO₂, and O₃ pollutants with categorized health advisory indicators.
- ☀️ **Sun & Moon Arc Trajectory**: Visual astronomical timeline tracking sunrise, solar noon, sunset, daylight remaining, and moon phase illumination.
- ⏱️ **24-Hour Forecast Timeline**: Horizontal hourly scroll showcasing temperature curves and precipitation probabilities.
- 📅 **5-Day Extended Outlook**: Daily high/low temperature bars, condition icons, and rain likelihood metrics.
- 📡 **OpenStreetMap Live Radar**: Interactive meteorological radar preview with scanning sweep animations.
- 🚨 **Emergency SOS & Helplines**: Quick access to national disaster management, ambulance, fire, and weather emergency hotlines.
- 🔄 **Imperial / Metric Toggle**: Seamless unit switching between Celsius (°C) and Fahrenheit (°F).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom Terra color tokens (`#0F1412`, `#1E2723`, `#D97706`, `#10B981`, `#F59E0B`)
- **Icons**: [Google Material Symbols Outlined](https://fonts.google.com/icons)
- **Data APIs**: 
  - [Open-Meteo Weather API](https://open-meteo.com/en/docs)
  - [Open-Meteo Air Quality API](https://open-meteo.com/en/docs/air-quality-api)
  - [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- **Map Provider**: [OpenStreetMap](https://www.openstreetmap.org/)

---

## 📁 Project Architecture

```
weather/
├── public/
├── src/
│   ├── components/
│   │   ├── AirQualityCard.jsx       # Semi-circular AQI gauge & pollutant metrics
│   │   ├── CurrentWeatherCard.jsx   # Hero weather overview, status pill & location details
│   │   ├── EmergencyModal.jsx       # Emergency SOS helpline dialog
│   │   ├── ForecastSection.jsx      # 5-Day forecast list with temperature ranges
│   │   ├── Header.jsx               # Navigation bar, GPS locator & °C/°F toggle
│   │   ├── HourlyForecast.jsx       # 24-Hour horizontal timeline slider
│   │   ├── LocationMapCard.jsx      # OpenStreetMap radar container with radar scan animation
│   │   ├── QuickActionsCard.jsx     # Shortcut buttons for radar, alerts & unit toggles
│   │   ├── SearchBar.jsx            # Autocomplete search input with district/state pills
│   │   ├── SideNavBar.jsx           # Vertical navigation menu & emergency trigger
│   │   └── SunTimelineCard.jsx      # Solar/Lunar arc visualization card
│   ├── services/
│   │   └── weatherService.js        # Data fetcher, Open-Meteo API integrator & geocoding logic
│   ├── App.jsx                      # Main dashboard controller & global state container
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global CSS & Tailwind utilities
├── index.html                       # HTML shell, Google Fonts & Material Symbols CDN
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rudrashrivastava/WeatherInteligence.git
   cd WeatherInteligence
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your web browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-ready assets will be compiled into the `dist/` directory.

---

## 📊 Data Source & Credits

- Weather forecast, air quality metrics, and location search powered by [Open-Meteo](https://open-meteo.com/).
- UI/UX layout inspired by **Stitch Terra Edition** design framework.
- Maps provided by [OpenStreetMap](https://www.openstreetmap.org/).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
