import React, { useState, useEffect, useRef } from 'react';
import { fetchCitySuggestions } from '../services/weatherService';

export default function SearchBar({ onSearch, loading }) {
  const [inputQuery, setInputQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!inputQuery.trim() || inputQuery.trim().length < 2) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      const results = await fetchCitySuggestions(inputQuery);
      setSuggestions(results);
      setShowDropdown(results.length > 0);
      setIsSearching(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [inputQuery]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputQuery.trim()) {
      setShowDropdown(false);
      onSearch(inputQuery.trim(), null);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputQuery(suggestion.displayName);
    setShowDropdown(false);
    onSearch(suggestion.name, suggestion);
  };

  return (
    <div className="relative w-full mb-4" ref={wrapperRef}>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1 flex items-center">
          <span className="material-symbols-outlined absolute left-3.5 text-[#5c6f64] text-[20px]">search</span>
          <input
            type="text"
            className="w-full pl-11 pr-10 py-3 rounded-xl bg-white border border-[#e3e9e1] text-[#1e2923] text-sm font-medium placeholder-[#74796e] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all"
            placeholder="Search city, district or state (e.g. Lahar, Gwalior, Mumbai)..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
          />
          {inputQuery && (
            <button
              type="button"
              className="absolute right-3 text-[#5c6f64] hover:text-[#1e2923] text-sm"
              onClick={() => {
                setInputQuery('');
                setSuggestions([]);
                setShowDropdown(false);
              }}
            >
              ✕
            </button>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm shadow-sm transition-all disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Dropdown Suggestions */}
      {showDropdown && (
        <ul className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-[#e3e9e1] rounded-xl shadow-lg list-none p-1.5 z-50 max-h-64 overflow-y-auto">
          {suggestions.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelectSuggestion(item)}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg hover:bg-[#f4f7f2] cursor-pointer transition-all"
            >
              <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1e2923]">
                  <span>{item.name}</span>
                  {item.district && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary uppercase font-bold">
                      {item.district}
                    </span>
                  )}
                </div>
                <span className="text-xs text-[#5c6f64]">
                  {[item.state, item.country].filter(Boolean).join(', ')}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
