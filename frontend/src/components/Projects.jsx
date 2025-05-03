import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
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
    id: 2,
    title: "E-commerce App",
    description: "Application de commerce électronique avec panier, paiement et gestion des commandes.",
    technologies: ["React", "Node.js", "MongoDB"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1556742208-999815fca738?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/ecommerce-app",
    liveUrl: "https://ecommerce-app-demo.com",
    type: "fullstack"
  },
  {
    id: 3,
    title: "Chat Application",
    description: "Application de messagerie en temps réel avec discussions privées et groupées.",
    technologies: ["React", "Socket.io", "Express"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/chat-app",
    liveUrl: "https://chat-app-demo.com",
    type: "fullstack"
  },
  {
    id: 4,
    title: "Portfolio HTML/CSS",
    description: "Site portfolio statique réalisé en HTML et CSS.",
    technologies: ["HTML", "CSS"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/portfolio-html-css",
    liveUrl: "https://portfolio-html-css-demo.com",
    type: "statique"
  },
  {
    id: 5,
    title: "Landing Page JS",
    description: "Landing page statique avec animations JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/landing-page-js",
    liveUrl: "https://landing-page-js-demo.com",
    type: "statique"
  }
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
        `${className} z-10 flex items-center justify-center !left-0 md:!-left-6 !top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-400 hover:bg-yellow-500 text-[#1a2241] shadow-lg transition-all duration-200 focus:outline-none`
      }
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      aria-label="Précédent"
      type="button"
    >
      <FaChevronLeft className="text-2xl md:text-3xl" />
    </button>
  );
}

// Flèche suivante personnalisée
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={
        `${className} z-10 flex items-center justify-center !right-0 md:!-right-6 !top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-400 hover:bg-yellow-500 text-[#1a2241] shadow-lg transition-all duration-200 focus:outline-none`
      }
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      aria-label="Suivant"
      type="button"
    >
      <FaChevronRight className="text-2xl md:text-3xl" />
    </button>
  );
}

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
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
    <div id="projects" className="min-h-screen w-full bg-[#1a2241] text-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-12">
        <h2 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <span className="text-2xl">💻</span> Mes Projets
        </h2>
        <span className="block w-24 h-1.5 bg-yellow-400 mt-2 mb-4"></span>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col gap-16">
        {slides.map((slide) => (
          <div key={slide.key}>
            <h3 className="text-3xl font-bold mb-8 text-white">{slide.label}</h3>
            <Slider {...sliderSettings}>
              {slide.projects.map((project) => (
                <div key={project.id} className="px-2">
                  <div className="bg-[#1e2b4d] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
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
                              className="bg-[#2a3760] px-3 py-1 rounded-md text-sm"
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
                          className={`py-2 px-3 rounded text-center ${project.isPrivate ? 'bg-gray-600 opacity-70' : 'bg-gray-700 hover:bg-gray-600'}`}
                        >
                          {project.isPrivate ? 'Code privé' : 'Voir le code'}
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-yellow-400 hover:bg-yellow-500 text-[#1a2241] font-bold py-2 px-3 rounded text-center"
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