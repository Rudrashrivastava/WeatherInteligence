import React, { useState, useEffect } from 'react';
import SideNavBar from './components/SideNavBar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecentSearches from './components/RecentSearches';
import WeatherDashboard from './components/WeatherDashboard';
import { fetchWeatherData, fetchWeatherByCoords } from './services/weatherService';

export default function App() {
  const [unit, setUnit] = useState('C');
  const [currentCity, setCurrentCity] = useState('Mumbai');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [recentCities, setRecentCities] = useState(['Mumbai', 'Delhi', 'Gwalior', 'Lahar', 'London', 'New York']);

  const handleFetchWeather = async (cityName, suggestionObj = null) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherData(cityName, suggestionObj);
      setWeatherData(data);
      setCurrentCity(data.city);

      setRecentCities((prev) => {
        const filtered = prev.filter((c) => c.toLowerCase() !== data.city.toLowerCase());
        return [data.city, ...filtered].slice(0, 6);
      });
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setLocationLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const data = await fetchWeatherByCoords(latitude, longitude);
          setWeatherData(data);
          setCurrentCity(data.city);
        } catch (err) {
          setError('Could not get weather for your exact GPS location.');
        } finally {
          setLocationLoading(false);
        }
      },
      (err) => {
        setLocationLoading(false);
        setError('GPS permission denied or unavailable. Please search manually.');
      },
      { timeout: 10000 }
    );
  };

  useEffect(() => {
    handleFetchWeather(currentCity);
  }, []);

  const handleToggleUnit = (selectedUnit) => {
    setUnit(selectedUnit);
  };

  const handleClearHistory = () => {
    setRecentCities([]);
  };

  const handleEmergencySOS = () => {
    alert('🚨 Emergency SOS Alert Triggered! Connecting to National Disaster Control Desk (112 / 1078)...');
  };

  return (
    <div className="flex min-h-screen bg-[#f7f9f6]">
      {/* Sidebar */}
      <SideNavBar activeTab={activeTab} setActiveTab={setActiveTab} onEmergencyTrigger={handleEmergencySOS} />

      {/* Main Workspace */}
      <main className="flex-1 lg:ml-64 p-4 lg:p-8 min-h-screen">
        <Header
          unit={unit}
          onToggleUnit={handleToggleUnit}
          onDetectLocation={handleDetectLocation}
          locationLoading={locationLoading}
        />

        <SearchBar onSearch={handleFetchWeather} loading={loading} />

        <RecentSearches cities={recentCities} onSelectCity={handleFetchWeather} onClear={handleClearHistory} />

        <WeatherDashboard weatherData={weatherData} unit={unit} loading={loading} error={error} />

        <footer className="mt-12 text-center text-xs font-semibold text-[#74796e] pb-6">
          Atmosphere Live •⚡
        </footer>
      </main>
    </div>
  );
}
