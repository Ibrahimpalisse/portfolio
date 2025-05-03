import React, { useRef, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'

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
    </div>
  )
}

export default App
