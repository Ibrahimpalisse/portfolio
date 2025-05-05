import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Remplace ces ID par ceux de ton compte EmailJS
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setStatus({
          submitted: true,
          success: true,
          message: 'Message envoyé avec succès!'
        });
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      })
      .catch((error) => {
        setStatus({
          submitted: true,
          success: false,
          message: 'Une erreur est survenue. Veuillez réessayer.'
        });
        setLoading(false);
        console.error('Erreur EmailJS:', error);
      });
  };

  return (
    <section id="contact" className="min-h-screen w-full bg-[#1a2241] text-white py-16 md:pl-64 overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-16 mb-12 max-w-full md:max-w-[calc(100%-2rem)]">
        <h2 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <span className="text-2xl">📬</span> Contact
        </h2>
        <span className="block w-24 h-1.5 bg-yellow-400 mt-2 mb-4"></span>
      </div>
      <div className="w-full px-4 md:px-8 lg:px-16 flex flex-col md:flex-row gap-12 max-w-full md:max-w-[calc(100%-2rem)]">
        {/* Formulaire */}
        <form 
          ref={form}
          onSubmit={handleSubmit} 
          className="flex-1 bg-[#22304a]/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-yellow-400/40 p-8 flex flex-col gap-6 max-w-xl mx-auto md:mx-0 transition-all duration-300"
        >
          {status.submitted && (
            <div className={`p-4 rounded-xl ${status.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
              {status.message}
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold mb-2">Nom</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1a2241]/80 text-white p-3 focus:outline-none focus:ring-4 focus:ring-yellow-400/60 focus:bg-[#232e4a] transition-all duration-300" 
              placeholder="Votre nom"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input 
              type="email"
              name="email" // EmailJS utilise ce nom pour la variable {{email}}
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1a2241]/80 text-white p-3 focus:outline-none focus:ring-4 focus:ring-yellow-400/60 focus:bg-[#232e4a] transition-all duration-300" 
              placeholder="Votre email"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea 
              name="message" // EmailJS utilise ce nom pour la variable {{message}}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#1a2241]/80 text-white p-3 h-32 focus:outline-none focus:ring-4 focus:ring-yellow-400/60 focus:bg-[#232e4a] transition-all duration-300" 
              placeholder="Votre message"
              required 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className={`bg-yellow-400 hover:bg-yellow-500 text-[#1a2241] font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 focus:ring-4 focus:ring-yellow-400/60 transform hover:-translate-y-1 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
        {/* Cadre infos contact */}
        <div className="flex-1 bg-[#22304a]/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-yellow-400/40 p-8 flex flex-col items-center justify-center gap-6 min-w-[280px] max-w-xl mx-auto md:mx-0 transition-all duration-300">
          <a href="https://github.com/ton-github" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-3xl flex items-center gap-3 transition-all duration-200 hover:scale-105">
            <FaGithub /> <span className="text-lg font-semibold">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/ton-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-yellow-400 text-3xl flex items-center gap-3 transition-all duration-200 hover:scale-105">
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