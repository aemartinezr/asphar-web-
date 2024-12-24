import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
    >
      <span>{language.toUpperCase()}</span>
    </button>
  );
};