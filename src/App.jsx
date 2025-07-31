import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import paro from './assets/images/paro.jpg';
import punakha from './assets/images/punakha.jpg';
import jomolhari from './assets/images/jomolhari.jpg';
import bhutanView from './assets/images/bhutanview.jpg';
import bhutanHero from './assets/images/bhutan.jpg';

export default function App() {
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
      title: "Druk Path Trek",
      days: "6 Days",
      highlights: "Lakes, alpine forests, monasteries",
      price: "$980",
      image: paro,
      description: "A moderate trek between Paro and Thimphu featuring beautiful lakes and high mountain passes."
    },
    {
      title: "Cultural West Tour",
      days: "5 Days",
      highlights: "Paro, Thimphu, Punakha",
      price: "$850",
      image: punakha,
      description: "Explore the rich cultural heritage of Western Bhutan with visits to dzongs, monasteries, and local markets."
    },
    {
      title: "Jomolhari Trek",
      days: "9 Days",
      highlights: "Mount Jomolhari, yak herders, high passes",
      price: "$1,420",
      image: jomolhari,
      description: "A challenging and rewarding trek that takes you to the base of Bhutan’s second highest peak."
    }
  ];

  return (
    <div className="font-sans bg-white text-gray-800 relative">
      {/* Floating Social Icons */}
      <div className="fixed top-1/3 left-0 z-50 flex flex-col space-y-4 pl-2">
        <a href="https://facebook.com/bhutanfartrek" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 p-2 rounded-r hover:bg-blue-700">
          <FaFacebook size={24} />
        </a>
        <a href="https://instagram.com/bhutanfartrek" target="_blank" rel="noopener noreferrer" className="text-white bg-pink-500 p-2 rounded-r hover:bg-pink-600">
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Hero Section */}
      <section className="h-screen w-full overflow-hidden relative text-white text-center flex flex-col justify-center items-center px-4">
        <div className="absolute inset-0 bg-cover bg-center animate-slowPan transition-opacity duration-1000" style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Bhutan Fartrek</h1>
          <p className="text-xl md:text-2xl mt-4">Trekking & Sightseeing in Bhutan since 2016</p>
          <a href="#tours" className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-300">View Packages</a>
        </div>
      </section>

      {/* The rest of your existing sections (About, Tours, Gallery, Contact) remain unchanged... */}

      <footer className="text-center py-6 bg-gray-800 text-white">
        &copy; {new Date().getFullYear()} Bhutan Fartrek. All rights reserved.
      </footer>

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
