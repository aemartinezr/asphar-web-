import React from 'react';
import { motion } from 'framer-motion';
import { Network, Cloud, Shield, Fingerprint, Users, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const icons = {
  'Network Security': Network,
  'Cloud Security': Cloud,
  'Endpoint Protection': Shield,
  'Identity Management': Fingerprint,
  'Security Consulting': Users,
  'Incident Response': AlertTriangle,
  'Seguridad de Red': Network,
  'Seguridad en la Nube': Cloud,
  'Protección de Endpoints': Shield,
  'Gestión de Identidad': Fingerprint,
  'Consultoría de Seguridad': Users,
  'Respuesta a Incidentes': AlertTriangle,
};

const ServicesPage = () => {
  const { language } = useLanguage();
  const t = translations[language].servicesPage;

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => {
            const Icon = icons[service.title as keyof typeof icons];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 hover:text-purple-600 transition-colors flex items-center">
                  {t.learnMore} →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;