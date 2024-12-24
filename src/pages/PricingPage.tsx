import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const PricingPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].pricing;

  const plans = [
    {
      name: t.basic.name,
      features: t.basic.features,
    },
    {
      name: t.standard.name,
      popular: true,
      features: t.standard.features,
    },
    {
      name: t.premium.name,
      features: t.premium.features,
    },
    {
      name: t.enterprise.name,
      features: t.enterprise.features,
    }
  ];

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-8 relative ${
                plan.popular ? 'border-2 border-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-6">{plan.name}</h3>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleGetStarted}
                className={`w-full py-3 rounded-full transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                {t.getStarted}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;