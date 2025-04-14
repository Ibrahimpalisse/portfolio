import React, { useState, useEffect } from 'react';
import imagePort from '../assets/imagePort.jpg';

interface BannerProps {
  name: string;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ name, title }) => {
  const [activePage, setActivePage] = useState('accueil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Détecte la section active en fonction du défilement
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'projets', 'competences', 'cv', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Si la section est visible dans la fenêtre
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActivePage(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fermer le menu mobile quand on clique sur un lien
  const handleNavLinkClick = (id: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  // Désactiver le défilement du body quand le menu est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Ajouter les styles CSS d'animation au document
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(-20px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      .menu-item-animate {
        animation: slideInRight 0.3s forwards;
      }
      
      /* Animation pour le bouton hamburger */
      .hamburger-top, .hamburger-middle, .hamburger-bottom {
        position: absolute;
        width: 60%;
        height: 2px;
        transition: all 0.3s ease-in-out;
        transform-origin: center;
      }
      
      .hamburger-top {
        top: calc(50% - 8px);
      }
      
      .hamburger-middle {
        top: 50%;
      }
      
      .hamburger-bottom {
        top: calc(50% + 8px);
      }
      
      .hamburger-active .hamburger-top {
        transform: translateY(8px) rotate(45deg);
      }
      
      .hamburger-active .hamburger-middle {
        opacity: 0;
      }
      
      .hamburger-active .hamburger-bottom {
        transform: translateY(-8px) rotate(-45deg);
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const navItems = [
    { id: 'accueil', icon: '🏠', label: 'Accueil', href: '#accueil' },
    { id: 'projets', icon: '💻', label: 'Projets', href: '#projets' },
    { id: 'competences', icon: '📝', label: 'Compétences', href: '#competences' },
    { id: 'cv', icon: '📄', label: 'CV', href: '#cv' },
    { id: 'contact', icon: '💬', label: 'Contact', href: '#contact' },
  ];
  
  return (
    <>
      {/* Version bureau - barre latérale */}
      <div className="fixed top-0 left-0 h-full w-64 flex-col overflow-hidden hidden md:flex" style={{
        backgroundImage: `url(${imagePort})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[0px]"></div>
        
        {/* Contenu de la navigation */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Logo et nom en haut */}
          <div className="flex flex-col items-center py-8">
            <div className="relative w-20 h-20 mb-4">
              {/* Cercle bleu */}
              <div className="absolute inset-0 rounded-full bg-blue-600"></div>
              {/* Bordure jaune */}
              <div className="absolute inset-0 rounded-full border border-yellow-400"></div>
              {/* Texte centré */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">VI</span>
              </div>
            </div>
            <h1 className="text-white text-xl font-bold drop-shadow-md">{name}</h1>
            <div className="mt-2 px-4 py-1 bg-yellow-400 rounded-full">
              <span className="text-gray-900 font-semibold text-sm">{title}</span>
            </div>
          </div>
          
          {/* Menu de navigation - version bureau */}
          <nav className="flex-1 px-4 py-6">
            {navItems.map(item => (
              <div 
                key={item.id}
                className={`
                  pl-4 mb-6 py-2 rounded-r-md transition-all
                  ${activePage === item.id 
                    ? 'border-l-4 border-yellow-400 bg-blue-900/40' 
                    : 'hover:bg-blue-900/30 hover:border-l-4 hover:border-yellow-200/50'}
                `}
              >
                <a 
                  href={item.href} 
                  className="flex items-center text-white hover:text-yellow-200 transition"
                  onClick={() => setActivePage(item.id)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="text-lg drop-shadow-md">{item.label}</span>
                </a>
              </div>
            ))}
          </nav>
          
          {/* Bouton de téléchargement en bas */}
          <div className="relative py-6 px-4">
            <a 
              href="#download" 
              className="flex items-center justify-center bg-blue-600/90 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition shadow-md"
            >
              <span className="mr-2">⬇️</span>
              <span>Télécharger CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* Version mobile - uniquement l'icône de menu à gauche */}
      <div className="md:hidden">
        {/* Bouton hamburger fixe en haut à gauche avec animation */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`fixed top-4 left-4 w-12 h-12 flex justify-center items-center bg-gray-900/80 rounded-md z-50 shadow-lg border border-yellow-400 transition-all duration-300 ${mobileMenuOpen ? 'hamburger-active' : ''}`}
          aria-label="Menu"
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <span className="hamburger-top bg-white absolute"></span>
            <span className="hamburger-middle bg-white absolute"></span>
            <span className="hamburger-bottom bg-white absolute"></span>
          </div>
        </button>
        
        {/* Overlay sombre qui apparaît derrière le menu */}
        <div 
          className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Menu mobile - seulement sur une partie de l'écran */}
        <div 
          className={`fixed top-0 left-0 bottom-0 w-64 z-40 transition-transform duration-300 ease-in-out shadow-xl ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{
            backgroundImage: `url(${imagePort})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-blue-900/50"></div>
          
          {/* Contenu du menu */}
          <div className="relative z-10 flex flex-col h-full w-full pt-20">
            {/* En-tête du menu */}
            <div className="flex flex-col items-center mt-4 mb-10">
              <div className="relative w-20 h-20 mb-5">
                {/* Cercle bleu */}
                <div className="absolute inset-0 rounded-full bg-blue-600"></div>
                {/* Bordure jaune */}
                <div className="absolute inset-0 rounded-full border border-yellow-400"></div>
                {/* Texte centré */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">VI</span>
                </div>
              </div>
              <h1 className="text-white text-2xl font-bold mb-3">{name}</h1>
              <div className="px-4 py-1 bg-yellow-400 rounded-full">
                <span className="text-gray-900 font-semibold">{title}</span>
              </div>
            </div>
            
            {/* Menu de navigation */}
            <nav className="flex-1 px-8">
              {navItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`flex items-center mb-8 py-2 ${
                    activePage === item.id ? 'relative' : ''
                  } ${mobileMenuOpen ? 'menu-item-animate' : ''}`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {activePage === item.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-400"></div>
                  )}
                  <a 
                    href={item.href}
                    className={`flex items-center text-white hover:text-yellow-200 pl-4 ${
                      activePage === item.id ? 'font-bold' : ''
                    }`}
                    onClick={() => handleNavLinkClick(item.id)}
                  >
                    <span className="text-yellow-400 mr-4 text-xl">{item.icon}</span>
                    <span className="text-lg">{item.label}</span>
                  </a>
                </div>
              ))}
            </nav>
            
            {/* Bouton en bas */}
            <div className="py-8 px-8">
              <a 
                href="#download" 
                className="flex items-center justify-center bg-blue-600 text-white py-3 px-5 rounded-md shadow-md hover:bg-blue-700 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mr-2">⬇️</span>
                <span>Télécharger CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ajustement du contenu principal pour le responsive */}
      <div className="md:ml-64"></div>
    </>
  );
};

export default Banner; 