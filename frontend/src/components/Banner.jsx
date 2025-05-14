import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import imagePort from '../../public/icon/imagePort.jpg';

const Banner = ({ name, title }) => {
  const [activePage, setActivePage] = useState('accueil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'projets', 'competences', 'cv', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActivePage(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fermer le menu langue si on clique ailleurs
  useEffect(() => {
    if (!showLangMenu) return;
    const handleClick = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showLangMenu]);

  const handleNavLinkClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    // Trouver l'élément cible
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // Ajuster cette valeur si nécessaire
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes slideInRight {
        from { transform: translateX(-20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn { animation: fadeIn 0.3s forwards ease-in-out; }
      .menu-item-animate { animation: slideInRight 0.3s forwards; }
      .hamburger-top, .hamburger-middle, .hamburger-bottom {
        position: absolute; width: 60%; height: 2px; transition: all 0.3s ease-in-out; transform-origin: center;
      }
      .hamburger-top { top: calc(50% - 8px); }
      .hamburger-middle { top: 50%; }
      .hamburger-bottom { top: calc(50% + 8px); }
      .hamburger-active .hamburger-top { transform: translateY(8px) rotate(45deg); }
      .hamburger-active .hamburger-middle { opacity: 0; }
      .hamburger-active .hamburger-bottom { transform: translateY(-8px) rotate(-45deg); }
    `;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const navItems = [
    { id: 'accueil', icon: '🏠', label: t('menu.accueil'), href: '#accueil' },
    { id: 'projets', icon: '💻', label: t('menu.projets'), href: '#projets' },
    { id: 'competences', icon: '📝', label: t('menu.competences'), href: '#competences' },
    { id: 'cv', icon: '📄', label: t('menu.cv'), href: '#cv' },
    { id: 'contact', icon: '💬', label: t('menu.contact'), href: '#contact' },
  ];

  return (
    <>
      {/* Sélecteur de langue fixe en haut à droite */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(v => !v)}
            className={`p-3 rounded-full transition-all duration-300 border shadow-xl ${showLangMenu ? 'bg-yellow-400 text-blue-900 border-blue-900' : 'bg-blue-900/90 hover:bg-blue-800 text-yellow-400 border-yellow-400/80 hover:shadow-yellow-400/30'}`}
            title={t('banner.change_language')}
            type="button"
            aria-label="Changer de langue"
          >
            <FaGlobe className={`text-2xl transition-all duration-300 ${showLangMenu ? 'text-blue-900' : 'text-yellow-400'}`} />
          </button>
          {showLangMenu && (
            <div 
              ref={langMenuRef} 
              className="absolute right-0 top-14 flex flex-col items-center gap-3 bg-[#22304a]/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 z-50 border border-yellow-400 animate-fadeIn transition-all duration-300"
              style={{ minWidth: 80 }}
            >
              <button
                onClick={() => { i18n.changeLanguage('fr'); setShowLangMenu(false); }}
                className={`w-14 h-14 flex items-center justify-center rounded-full font-bold transition-all duration-300 text-lg ${i18n.language === 'fr' ? 'bg-yellow-400 text-blue-900 transform scale-110' : 'bg-blue-900/90 text-yellow-400 hover:bg-yellow-400/70 hover:text-blue-900 hover:scale-105'}`}
              >
                FR
              </button>
              <div className="w-full h-0.5 bg-yellow-400/20"></div>
              <button
                onClick={() => { i18n.changeLanguage('en'); setShowLangMenu(false); }}
                className={`w-14 h-14 flex items-center justify-center rounded-full font-bold transition-all duration-300 text-lg ${i18n.language === 'en' ? 'bg-yellow-400 text-blue-900 transform scale-110' : 'bg-blue-900/90 text-yellow-400 hover:bg-yellow-400/70 hover:text-blue-900 hover:scale-105'}`}
              >
                EN
              </button>
              <button
                onClick={() => { i18n.changeLanguage('ar'); setShowLangMenu(false); }}
                className={`w-14 h-14 flex items-center justify-center rounded-full font-bold transition-all duration-300 text-lg ${i18n.language === 'ar' ? 'bg-yellow-400 text-blue-900 transform scale-110' : 'bg-blue-900/90 text-yellow-400 hover:bg-yellow-400/70 hover:text-blue-900 hover:scale-105'}`}
              >
                AR
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Version bureau - barre latérale */}
      <div className="fixed top-0 left-0 h-full w-64 flex-col overflow-hidden hidden md:flex border-r-0 z-40" style={{
        backgroundImage: `url(${imagePort})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[0px]"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex flex-col items-center py-8">
            <div className="relative w-20 h-20 mb-4">
              <div className="absolute inset-0 rounded-full bg-blue-600"></div>
              <div className="absolute inset-0 rounded-full border border-yellow-400"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">VI</span>
              </div>
            </div>
            <h1 className="text-white text-xl font-bold drop-shadow-md">{t('banner.name')}</h1>
            <div className="mt-2 px-4 py-1 bg-yellow-400 rounded-full">
              <span className="text-gray-900 font-semibold text-sm">{t('banner.title')}</span>
            </div>
          </div>
          <nav className="flex-1 px-4 py-6">
            {navItems.map(item => (
              <div 
                key={item.id}
                className={`pl-4 mb-6 py-2 rounded-r-md transition-all ${activePage === item.id ? 'border-l-4 border-yellow-400 bg-blue-900/40' : 'hover:bg-blue-900/30 hover:border-l-4 hover:border-yellow-200/50'}`}
              >
                <a 
                  href={item.href}
                  className="flex items-center text-white hover:text-yellow-200 transition cursor-pointer pointer-events-auto"
                  onClick={e => { e.preventDefault(); handleNavLinkClick(item.id); }}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="text-lg drop-shadow-md">{item.label}</span>
                </a>
              </div>
            ))}
          </nav>
          <div className="relative py-6 px-4">
            <a
              href="/cv.pdf"
              download
              className="flex items-center justify-center bg-blue-600/90 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition shadow-md"
            >
              <span className="mr-2">⬇️</span>
              <span>{t('banner.download_cv')}</span>
            </a>
          </div>
        </div>
      </div>
      {/* Version mobile - uniquement l'icône de menu à gauche */}
      <div className="md:hidden z-40">
        {/* Bouton hamburger fixe en haut à gauche, style carré, fond bleu nuit, coins arrondis, ombre, barres fines et bien centrées */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="fixed top-4 left-4 w-12 h-12 flex justify-center items-center bg-[#1a2241] rounded-lg z-40 shadow-lg border border-[#22304a] transition-all duration-300"
          aria-label="Menu"
        >
          <div className="flex flex-col justify-center items-center w-7 h-7 gap-1.5">
            <span className="block w-7 h-1 bg-white rounded"></span>
            <span className="block w-7 h-1 bg-white rounded"></span>
            <span className="block w-7 h-1 bg-white rounded"></span>
          </div>
        </button>
        <div 
          className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        <div 
          className={`fixed top-0 left-0 bottom-0 w-64 z-30 transition-transform duration-300 ease-in-out shadow-xl ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} h-screen overflow-y-auto`}
          style={{
            backgroundImage: `url(${imagePort})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/50"></div>
          <div className="relative z-10 flex flex-col h-full w-full pt-20">
            <div className="flex flex-col items-center mt-4 mb-6">
              <div className="relative w-20 h-20 mb-5">
                <div className="absolute inset-0 rounded-full bg-blue-600"></div>
                <div className="absolute inset-0 rounded-full border border-yellow-400"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">VI</span>
                </div>
              </div>
              <h1 className="text-white text-2xl font-bold mb-3">{t('banner.name')}</h1>
              <div className="px-4 py-1 bg-yellow-400 rounded-full mb-4">
                <span className="text-gray-900 font-semibold">{t('banner.title')}</span>
              </div>
              <div className="p-4 w-full flex justify-center">
                <a
                  href="/CV/cv.pdf"
                  download
                  className="flex items-center justify-center bg-blue-600 text-white py-3 px-5 rounded-md shadow-md hover:bg-blue-700 transition w-full max-w-xs mb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-2">⬇️</span>
                  <span>{t('banner.download_cv')}</span>
                </a>
              </div>
            </div>
            <nav className="flex-1 px-8">
              {navItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`flex items-center mb-8 py-2 ${activePage === item.id ? 'relative' : ''} ${mobileMenuOpen ? 'menu-item-animate' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {activePage === item.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-400"></div>
                  )}
                  <a 
                    href={item.href}
                    className={`flex items-center text-white hover:text-yellow-200 pl-4 ${activePage === item.id ? 'font-bold' : ''}`}
                    onClick={e => { e.preventDefault(); handleNavLinkClick(item.id); }}
                  >
                    <span className="text-yellow-400 mr-4 text-xl">{item.icon}</span>
                    <span className="text-lg">{item.label}</span>
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner; 