import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    {
      icon: Shield,
      title: t.items[0].title,
      description: t.items[0].description,
    },
    {
      icon: Lock,
      title: t.items[1].title,
      description: t.items[1].description,
    },
    {
      icon: FileCheck,
      title: t.items[2].title,
      description: t.items[2].description,
    },
    {
      icon: GraduationCap,
      title: t.items[3].title,
      description: t.items[3].description,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-gray-600">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-700 flex items-center">
                {t.learnMore} →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;