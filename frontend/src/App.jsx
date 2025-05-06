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
  const competencesRef = useRef(null);
  const cvRef = useRef(null);
  const contactRef = useRef(null);

  // Fonction pour faire défiler jusqu'à la section Projets
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex w-full bg-[#1a2241] overflow-x-hidden relative">
      {/* Banner latéral ou menu mobile - en position absolue avec un z-index élevé */}
      <div className="z-50 relative">
        <Banner name="Vignes Ibrahim" title="Développeur Web" />
      </div>
      {/* Contenu principal */}
      <main className="flex-1 flex flex-col w-full overflow-x-hidden">
        {/* Section d'accueil avec fonction pour défiler vers les projets */}
        <div id="accueil">
          <Home scrollToProjects={scrollToProjects} />
        </div>
        {/* Section des projets avec référence pour le défilement */}
        <div id="projets" ref={projectsRef}>
          <Projects />
        </div>
        {/* Section outils & environnements */}
        <div id="competences" ref={competencesRef}>
          <Tools />
        </div>
        {/* Section Mon CV */}
        <div id="cv" ref={cvRef}>
          <MonCV />
        </div>
        {/* Section Contact */}
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
