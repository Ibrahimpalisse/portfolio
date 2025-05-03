import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="min-h-screen w-full bg-[#1a2241] text-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-12">
        <h2 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <span className="text-2xl">📬</span> Contact
        </h2>
        <span className="block w-24 h-1.5 bg-yellow-400 mt-2 mb-4"></span>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row gap-12">
        {/* Formulaire */}
        <form className="flex-1 bg-[#22304a] rounded-2xl shadow-md p-8 flex flex-col gap-6 max-w-xl mx-auto md:mx-0">
          <div>
            <label className="block text-sm font-semibold mb-2">Nom</label>
            <input type="text" className="w-full rounded-lg bg-[#1a2241] text-white p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Votre nom" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" className="w-full rounded-lg bg-[#1a2241] text-white p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Votre email" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea className="w-full rounded-lg bg-[#1a2241] text-white p-3 h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Votre message" />
          </div>
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-[#1a2241] font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-200 focus:ring-2 focus:ring-yellow-400">
            Envoyer
          </button>
        </form>
        {/* Cadre infos contact */}
        <div className="flex-1 bg-[#22304a] rounded-2xl shadow-md p-8 flex flex-col items-center justify-center gap-6 min-w-[280px] max-w-xl mx-auto md:mx-0">
          <a href="https://github.com/ton-github" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-3xl flex items-center gap-3">
            <FaGithub /> <span className="text-lg font-semibold">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/ton-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-yellow-400 text-3xl flex items-center gap-3">
            <FaLinkedin /> <span className="text-lg font-semibold">LinkedIn</span>
          </a>
          <span className="flex items-center gap-3 text-white text-lg">
            <FaPhone className="text-pink-400" /> 06 12 34 56 78
          </span>
          <span className="flex items-center gap-3 text-white text-lg">
            <FaEnvelope className="text-yellow-400" /> mon.email@email.com
          </span>
        </div>
      </div>
    </section>
  );
} 