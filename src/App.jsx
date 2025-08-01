// src/App.jsx
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import paro from './assets/images/paro.jpg';
import punakha from './assets/images/punakha.jpg';
import jomolhari from './assets/images/jomolhari.jpg';
import bhutanView from './assets/images/bhutanview.jpg';
import bhutanHero from './assets/images/bhutan.jpg';

export default function App() {
  const { t, i18n } = useTranslation();
  const [selectedTour, setSelectedTour] = useState(null);
  const [bgIndex, setBgIndex] = useState(0);

  const bgImages = [bhutanHero, bhutanView, jomolhari];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const tours = [
    {
      title: t("druk_title"),
      days: t("druk_days"),
      highlights: t("druk_highlights"),
      price: "$980",
      image: paro,
      description: t("druk_description")
    },
    {
      title: t("cultural_title"),
      days: t("cultural_days"),
      highlights: t("cultural_highlights"),
      price: "$850",
      image: punakha,
      description: t("cultural_description")
    },
    {
      title: t("jomolhari_title"),
      days: t("jomolhari_days"),
      highlights: t("jomolhari_highlights"),
      price: "$1,420",
      image: jomolhari,
      description: t("jomolhari_description")
    }
  ];

  return (
    <div className="font-sans bg-white text-gray-800 relative">
      <div className="flex justify-end p-4">
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          value={i18n.language}
          className="border px-2 py-1 rounded"
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>

      {/* Hero Section */}
      <section className="h-screen w-full overflow-hidden relative text-white text-center flex flex-col justify-center items-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slowPan transition-opacity duration-1000"
          style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">{t('hero_title')}</h1>
          <p className="text-xl md:text-2xl mt-4">{t('hero_subtitle')}</p>
          <a href="#tours" className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-300 smooth-scroll">{t('view_packages')}</a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto" id="about">
        <h2 className="text-3xl font-bold mb-4">{t('about_heading')}</h2>
        <p className="text-gray-700 whitespace-pre-line">{t('about_text')}</p>
      </section>

      {/* Tours Section */}
      <section className="bg-gray-100 py-16 px-4" id="tours">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('tours_heading')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tours.map((tour, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={tour.image} alt={tour.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">{tour.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{tour.days}</p>
                  <p className="text-sm text-gray-600 mb-1">{tour.highlights}</p>
                  <p className="text-lg font-semibold text-green-700 mt-2">Starting from {tour.price}</p>
                  <button onClick={() => setSelectedTour(tour)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">{t('learn_more')}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Tour Details */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg relative">
            <button onClick={() => setSelectedTour(null)} className="absolute top-2 right-2 text-gray-700">✖</button>
            <img src={selectedTour.image} alt={selectedTour.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-2xl font-bold mb-2">{selectedTour.title}</h3>
            <p className="text-gray-700 mb-2">{selectedTour.days}</p>
            <p className="text-gray-700 mb-4">{selectedTour.description}</p>
            <p className="text-lg font-semibold text-green-700">Price: {selectedTour.price}</p>
          </div>
        </div>
      )}

      {/* Gallery Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto" id="gallery">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('gallery_heading')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[jomolhari, paro, punakha, bhutanView].map((img, i) => (
            <img key={i} src={img} alt={`Bhutan view ${i + 1}`} className="rounded-lg object-cover h-48 w-full" />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto" id="contact">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('contact_heading')}</h2>
        <p className="mb-6 text-center">{t('contact_subtitle')}</p>

        <form
          action="https://formspree.io/f/mqallbbq"
          method="POST"
          className="grid gap-6 bg-gray-50 p-6 rounded-lg shadow"
        >
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="name">{t('name')}</label>
            <input id="name" name="name" className="w-full border p-2 rounded" type="text" placeholder={t('your_name')} required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="email">{t('email')}</label>
            <input id="email" name="email" className="w-full border p-2 rounded" type="email" placeholder={t('your_email')} required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="phone">{t('phone')}</label>
            <input id="phone" name="phone" className="w-full border p-2 rounded" type="tel" placeholder={t('your_phone')} />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="message">{t('message')}</label>
            <textarea id="message" name="message" className="w-full border p-2 rounded" placeholder={t('your_message')} rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500 font-semibold">
            {t('send_message')}
          </button>
        </form>
      </section>

      {/* Footer with Social Media Icons */}
      <footer className="text-center py-8 bg-gray-800 text-white">
        <div className="mb-2 flex justify-center gap-6 text-2xl">
          <a href="https://www.facebook.com/bhutanfartrek" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/bhutanfartrek" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="https://wa.me/+61412716665" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <FaWhatsapp />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Bhutan Fartrek. All rights reserved.</p>
      </footer>

      {/* Background Pan Animation */}
      <style>
        {`
          @keyframes slowPan {
            0% { background-position: center top; }
            100% { background-position: center bottom; }
          }
          .animate-slowPan {
            animation: slowPan 60s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
