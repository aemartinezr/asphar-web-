import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="relative h-[80vh] bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Background Image - 3D Chain */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center blur-sm"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80")'
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto pt-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t.subtitle}
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              {t.exploreServices}
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              {t.contactUs}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;