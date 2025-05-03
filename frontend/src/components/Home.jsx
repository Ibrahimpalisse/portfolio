import React from 'react';
import { motion } from 'framer-motion';

const Home = ({ scrollToProjects }) => {
  return (
    <div id="accueil" className="min-h-screen w-full text-white relative overflow-hidden md:pl-64">
      {/* Icône < /> animée, blanche et flottante */}
      <motion.div
        className="absolute right-2 top-1/3 md:right-[10%] md:top-1/4 text-white text-6xl md:text-9xl opacity-80 z-0 select-none pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        &lt;/&gt;
      </motion.div>
      
      {/* Points lumineux (étoiles) */}
      <div className="absolute top-20 right-[20%] w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-[5%] w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
      <div className="absolute top-60 right-[15%] w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
      <div className="absolute top-80 right-[8%] w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
      
      {/* Contenu principal */}
      <div className="w-full px-4 md:px-8 lg:px-16 pt-24 md:pt-32 relative z-10 max-w-full md:max-w-[calc(100%-2rem)]">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-light mb-4">
            Bonjour,
            <span className="block w-32 h-1.5 bg-yellow-400 mt-2"></span>
          </h2>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            Je suis Vignes<br />Ibrahim
          </h1>
          
          <div className="mb-10">
            <h3 className="text-3xl md:text-4xl font-semibold text-yellow-400">
              développeur web
            </h3>
            <div className="text-gray-400 text-xl">&lt;/&gt;</div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Passionné par le développement d'applications web modernes 
            et créatives. En tant que développeur full stack, je maîtrise à la 
            fois les technologies front-end et back-end pour créer des 
            expériences utilisateur complètes et performantes.
          </p>     
        </div>
      </div>

      {/* Flèche de défilement vers le bas */}
      <div 
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20"
      >
        <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Home; 