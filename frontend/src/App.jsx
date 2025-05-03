import React, { useRef } from 'react'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Tools from './components/Tools'
import MonCV from './components/MonCV'
import Contact from './components/Contact'

function App() {
  const projectsRef = useRef(null);

  // Fonction pour faire défiler jusqu'à la section Projets
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Section d'accueil avec fonction pour défiler vers les projets */}
      <Home scrollToProjects={scrollToProjects} />
      
      {/* Section des projets avec référence pour le défilement */}
      <div ref={projectsRef}>
        <Projects />
      </div>
      {/* Section outils & environnements */}
      <Tools />
      {/* Section Mon CV */}
      <MonCV />
      {/* Section Contact */}
      <Contact />
    </div>
  )
}

export default App
