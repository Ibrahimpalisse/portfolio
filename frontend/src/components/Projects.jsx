import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  // 10 projets fullstack
  {
    id: 1,
    title: "Dashboard Analytics",
    description: "Tableau de bord d'analyse de données avec graphiques interactifs et rapports personnalisables.",
    technologies: ["React", "D3.js", "Firebase"],
    isPrivate: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com/user/dashboard-analytics",
    liveUrl: "https://dashboard-analytics-demo.com",
    type: "fullstack"
  },
  {
    id: 1,
    title: "Dashboard Analytics",
    description: "Tableau de bord d'analyse de données avec graphiques interactifs et rapports personnalisables.",
    technologies: ["React", "D3.js", "Firebase"],
    isPrivate: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com/user/dashboard-analytics",
    liveUrl: "https://dashboard-analytics-demo.com",
    type: "statique"
  },
 
];

const slides = [
  {
    key: 'statique',
    label: 'Sites Statiques',
    projects: projects.filter(p => p.type === 'statique')
  },
  {
    key: 'fullstack',
    label: 'Front + Backend',
    projects: projects.filter(p => p.type === 'fullstack')
  }
];

// Flèche précédente personnalisée
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={
        `${className} z-30 flex items-center justify-center !left-0 md:!-left-12 !top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border-4 border-black transition-all duration-200 focus:outline-none hover:scale-110`
      }
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      aria-label="Précédent"
      type="button"
    >
      <FaChevronLeft className="text-4xl md:text-5xl" />
    </button>
  );
}

// Flèche suivante personnalisée
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={
        `${className} z-30 flex items-center justify-center !right-0 md:!-right-12 !top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border-4 border-black transition-all duration-200 focus:outline-none hover:scale-110`
      }
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      aria-label="Suivant"
      type="button"
    >
      <FaChevronRight className="text-4xl md:text-5xl" />
    </button>
  );
}

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3500,
  swipe: true,
  touchMove: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

export default function Projects() {
  return (
    <div id="projets" className="min-h-screen w-full text-white py-16 md:pl-64 bg-[#1a2241] overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-16 mb-12 max-w-full md:max-w-[calc(100%-2rem)]">
        <h2 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <span className="text-2xl">💻</span> Mes Projets
        </h2>
        <span className="block w-24 h-1.5 bg-yellow-400 mt-2 mb-4"></span>
      </div>
      <div className="w-full px-4 md:px-20 flex flex-col gap-16 max-w-full md:max-w-[calc(100%-2rem)]">
        {slides.map((slide) => (
          <div key={slide.key} className="w-full">
            <h3 className="text-3xl font-bold mb-8 text-white">{slide.label}</h3>
            <Slider {...sliderSettings} className="cursor-grab active:cursor-grabbing">
              {slide.projects.map((project) => (
                <div key={project.id} className="px-2">
                  <div className="bg-[#1e2b4d] rounded-3xl overflow-hidden shadow-xl hover:shadow-yellow-400/40 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300">
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-5">{project.description}</p>
                      <div className="mb-5">
                        <h4 className="font-bold text-yellow-400 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-[#2a3760] px-3 py-1 rounded-md text-sm text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`py-2 px-3 rounded-lg text-center font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-yellow-400 hover:text-[#1a2241] ${project.isPrivate ? 'bg-gray-600 opacity-70 cursor-not-allowed' : 'bg-gray-700 hover:bg-yellow-400 hover:text-[#1a2241]'}`}
                        >
                          {project.isPrivate ? 'Code privé' : 'Voir le code'}
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-yellow-400 hover:bg-yellow-500 text-[#1a2241] font-bold py-2 px-3 rounded-lg text-center shadow-md transition-all duration-300 transform hover:-translate-y-1"
                        >
                          Voir le site
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </div>
  );
} 