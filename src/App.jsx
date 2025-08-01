import React, { useState, useEffect } from "react";
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
      <section className="h-screen w-full overflow-hidden relative text-white text-center flex flex-col justify-center items-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slowPan transition-opacity duration-1000"
          style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Bhutan Fartrek</h1>
          <p className="text-xl md:text-2xl mt-4">Trekking & Sightseeing in Bhutan since 2016</p>
          <a href="#tours" className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-300 smooth-scroll">View Packages</a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto" id="about">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>
          Bhutan Fartrek is a locally owned travel agency based in Thimphu, offering
          immersive trekking and cultural tours since 2016. We specialize in
          personalized experiences, guided by licensed local experts who bring the
          Kingdom of Bhutan to life.
        </p>
      </section>

      <section className="bg-gray-100 py-16 px-4" id="tours">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Tours & Treks</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tours.map((tour, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={tour.image} alt={tour.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">{tour.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">Duration: {tour.days}</p>
                  <p className="text-sm text-gray-600 mb-1">Highlights: {tour.highlights}</p>
                  <p className="text-lg font-semibold text-green-700 mt-2">Starting from {tour.price}</p>
                  <button onClick={() => setSelectedTour(tour)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-16 px-4 max-w-6xl mx-auto" id="gallery">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Bhutan</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[jomolhari, paro, punakha, bhutanView].map((img, i) => (
            <img key={i} src={img} alt={`Bhutan view ${i + 1}`} className="rounded-lg object-cover h-48 w-full" />
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto" id="contact">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact & Booking</h2>
        <p className="mb-6 text-center">Get in touch with us to plan your unforgettable journey to Bhutan!</p>
        <form
          action="https://formspree.io/f/mqallbbq"
          method="POST"
          className="grid gap-6 bg-gray-50 p-6 rounded-lg shadow"
        >
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="name">Name</label>
            <input id="name" name="name" className="w-full border p-2 rounded" type="text" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" className="w-full border p-2 rounded" type="email" placeholder="Your Email" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" className="w-full border p-2 rounded" type="tel" placeholder="Your Phone Number" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="message">Message</label>
            <textarea id="message" name="message" className="w-full border p-2 rounded" placeholder="Your Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500 font-semibold">
            Send Message
          </button>
        </form>
      </section>

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
