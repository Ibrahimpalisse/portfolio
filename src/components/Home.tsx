import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-navy-900 text-white px-6 py-16 md:px-16 md:py-24">
      {/* Éléments de design d'arrière-plan */}
      
      <div className="absolute top-1/4 left-0 w-8 h-8 rounded-full bg-blue-400 blur-sm opacity-30"></div>
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-cyan-400 blur-sm opacity-30"></div>
      
      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl">
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-6">Bonjour,</h2>
          <div className="border-l-4 border-yellow-400 pl-4 mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-2">Je suis Vignes</h1>
            <h1 className="text-5xl md:text-6xl font-bold">Ibrahim</h1>
          </div>
          
          <div className="mt-12">
            <h3 className="text-yellow-400 text-3xl md:text-4xl font-semibold mb-2">développeur web</h3>
            <div className="text-yellow-400 text-lg mb-6">&lt;/&gt;</div>
          </div>
          
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mt-8">
            Passionné par le développement d'applications web modernes 
            et créatives. En tant que développeur full stack, je maîtrise à la 
            fois les technologies front-end et back-end pour créer des 
            expériences utilisateur complètes et performantes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 