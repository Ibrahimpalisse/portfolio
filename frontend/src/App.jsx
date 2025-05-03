import React, { useRef } from 'react'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Tools from './components/Tools'
import MonCV from './components/MonCV'
import Contact from './components/Contact'
import Banner from './components/Banner'

function App() {
  const projectsRef = useRef(null);

  // Fonction pour faire défiler jusqu'à la section Projets
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex w-full bg-[#1a2241] overflow-x-hidden">
      {/* Banner latéral ou menu mobile */}
      <Banner name="Vignes Ibrahim" title="Développeur Web" />
      {/* Contenu principal */}
      <main className="flex-1 flex flex-col w-full overflow-x-hidden">
        {/* Section d'accueil avec fonction pour défiler vers les projets */}
        <Home scrollToProjects={scrollToProjects} />
        {/* Section des projets avec référence pour le défilement */}
        <div ref={projectsRef} className="w-full">
          <Projects />
        </div>
        {/* Section outils & environnements */}
        <Tools />
        {/* Section Mon CV */}
        <MonCV />
        {/* Section Contact */}
        <Contact />
      </main>
    </div>
  )
}

export default App
