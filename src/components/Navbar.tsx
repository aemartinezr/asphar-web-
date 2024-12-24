import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { LanguageSwitch } from './LanguageSwitch';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language].nav;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="w-6 h-6 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text" />
          <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">ASPHAR</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">{t.home}</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">{t.services}</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">{t.pricing}</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">{t.about}</Link>
          <Link to="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">{t.faq}</Link>
          <LanguageSwitch />
        </div>

        <Link 
          to="/contact"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300"
        >
          {t.contact}
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;