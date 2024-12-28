import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language].contactPage;

  return (
    <div className="min-h-screen bg-gray-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            name="contact" // Nombre del formulario para Netlify
            method="POST"
            data-netlify="true" // Activación de Netlify Forms
            data-netlify-honeypot="bot-field" // Campo anti-bot
            className="space-y-6"
          >
            {/* Campo oculto para Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            {/* Campos del formulario */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder={t.form.name}
                className="col-span-2 md:col-span-1 p-3 rounded-lg border focus:ring-2 focus:ring-blue-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t.form.email}
                className="col-span-2 md:col-span-1 p-3 rounded-lg border focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <select
              name="service"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="">{t.form.service}</option>
              <option value="vulnerability">{t.form.services.vulnerability}</option>
              <option value="penetration">{t.form.services.penetration}</option>
              <option value="compliance">{t.form.services.compliance}</option>
              <option value="training">{t.form.services.training}</option>
            </select>
            <input
              type="text"
              name="subject"
              placeholder={t.form.subject}
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-600"
              required
            />
            <textarea
              name="message"
              placeholder={t.form.message}
              rows={6}
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300"
            >
              {t.form.submit}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Información adicional */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="text-lg font-semibold mb-2">
                {t.info.location.title}
              </h3>
              <p className="text-gray-600">
                {t.info.location.address[0]}
                <br />
                {t.info.location.address[1]}
                <br />
                {t.info.location.address[2]}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Phone className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="text-lg font-semibold mb-2">
                {t.info.contact.title}
              </h3>
              <p className="text-gray-600">
                {t.info.contact.phone}
                <br />
                Email: <a href="mailto:asphar.info@gmail.com">asphar.info@gmail.com</a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="text-lg font-semibold mb-2">
                {t.info.hours.title}
              </h3>
              <p className="text-gray-600">
                {t.info.hours.weekdays}
                <br />
                {t.info.hours.weekend}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;