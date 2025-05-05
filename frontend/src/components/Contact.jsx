import React, { useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '../services/validationService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  
  // Configuration de React Hook Form avec Zod
  const { 
    register, 
    handleSubmit, 
    formState: { errors, dirtyFields, isValid }, 
    reset 
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onChange', // validation en temps réel pendant que l'utilisateur tape
  });
  
  // Détermine si un champ doit afficher l'indicateur de validation
  const shouldShowValidation = (fieldName) => {
    return dirtyFields[fieldName] && !errors[fieldName];
  };

  // Fonction pour envoyer le formulaire
  const onSubmit = (data) => {
    // Protection anti-spam : vérification du honeypot
    if (data.website) {
      // Si le champ caché est rempli, c'est probablement un bot
      console.log("Tentative de spam détectée");
      return;
    }
    
    setLoading(true);
    
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      toast.success('Message envoyé avec succès!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      reset(); // Réinitialiser le formulaire
      setLoading(false);
    })
    .catch((error) => {
      toast.error('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      setLoading(false);
      console.error('Erreur EmailJS:', error);
    });
  };

  return (
    <section id="contact" className="min-h-screen w-full bg-[#1a2241] text-white py-16 md:pl-64 overflow-hidden">
      <ToastContainer />
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
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 bg-[#22304a]/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-yellow-400/40 p-8 flex flex-col gap-6 max-w-xl mx-auto md:mx-0 transition-all duration-300"
        >
          {/* Champ Nom */}
          <div>
            <label className="block text-sm font-semibold mb-2">Nom</label>
            <div className="relative">
              <input 
                type="text" 
                {...register('name')}
                className={`w-full rounded-xl bg-[#1a2241]/80 text-white p-3 pr-10 focus:outline-none focus:ring-4 focus:ring-yellow-400/60 focus:bg-[#232e4a] transition-all duration-300 ${errors.name ? 'border border-red-500' : shouldShowValidation('name') ? 'border border-green-500' : ''}`}
                placeholder="Votre nom"
              />
              {shouldShowValidation('name') && (
                <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
              )}
              {errors.name && (
                <ImCross className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-xs" />
              )}
            </div>
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          
          {/* Champ Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <div className="relative">
              <input 
                type="email"
                {...register('email')}
                className={`w-full rounded-xl bg-[#1a2241]/80 text-white p-3 pr-10 focus:outline-none focus:ring-4 focus:ring-yellow-400/60 focus:bg-[#232e4a] transition-all duration-300 ${errors.email ? 'border border-red-500' : shouldShowValidation('email') ? 'border border-green-500' : ''}`}
                placeholder="Votre email"
              />
              {shouldShowValidation('email') && (
                <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
              )}
              {errors.email && (
                <ImCross className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-xs" />
              )}
            </div>
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          
          {/* Champ Message */}
          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <div className="relative">
              <textarea 
                {...register('message')}
                className={`w-full rounded-xl bg-[#1a2241]/80 text-white p-3 pr-10 h-32 focus:outline-none focus:ring-4 focus:ring-yellow-400/60 focus:bg-[#232e4a] transition-all duration-300 ${errors.message ? 'border border-red-500' : shouldShowValidation('message') ? 'border border-green-500' : ''}`}
                placeholder="Votre message"
              />
              {shouldShowValidation('message') && (
                <FaCheckCircle className="absolute right-3 top-4 text-green-500" />
              )}
              {errors.message && (
                <ImCross className="absolute right-3 top-4 text-red-500 text-xs" />
              )}
            </div>
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>
          
          {/* Honeypot anti-spam (champ caché) */}
          <div aria-hidden="true" className="hidden">
            <input
              type="text"
              {...register('website')}
              tabIndex="-1"
              autoComplete="off"
              style={{ display: 'none' }}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading || !isValid}
            className={`bg-yellow-400 hover:bg-yellow-500 text-[#1a2241] font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 focus:ring-4 focus:ring-yellow-400/60 transform hover:-translate-y-1 ${(loading || !isValid) ? 'opacity-70 cursor-not-allowed' : ''}`}
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