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
    title: "API REST Node",
    description: "API REST sécurisée pour gestion de données.",
    technologies: ["Node.js", "Express", "MongoDB"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/api-rest-node",
    liveUrl: "https://api-rest-node-demo.com",
    type: "fullstack"
  },
  {
    id: 5,
    title: "App de réservation",
    description: "Application de réservation en ligne avec calendrier.",
    technologies: ["React", "Node.js", "MySQL"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/reservation-app",
    liveUrl: "https://reservation-app-demo.com",
    type: "fullstack"
  },
  {
    id: 6,
    title: "Gestion de stock",
    description: "Application de gestion de stock pour PME.",
    technologies: ["React", "Express", "MongoDB"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/stock-management",
    liveUrl: "https://stock-management-demo.com",
    type: "fullstack"
  },
  {
    id: 7,
    title: "Blog Fullstack",
    description: "Blog avec authentification et gestion des articles.",
    technologies: ["React", "Node.js", "MongoDB"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/fullstack-blog",
    liveUrl: "https://fullstack-blog-demo.com",
    type: "fullstack"
  },
  {
    id: 8,
    title: "App météo",
    description: "Application météo avec API externe.",
    technologies: ["React", "Node.js", "API"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/weather-app",
    liveUrl: "https://weather-app-demo.com",
    type: "fullstack"
  },
  {
    id: 9,
    title: "Gestion de tâches",
    description: "To-do list collaborative avec notifications.",
    technologies: ["React", "Node.js", "Socket.io"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/todo-collab",
    liveUrl: "https://todo-collab-demo.com",
    type: "fullstack"
  },
  {
    id: 10,
    title: "Plateforme e-learning",
    description: "Plateforme de cours en ligne avec vidéos et quiz.",
    technologies: ["React", "Node.js", "MongoDB"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/elearning-platform",
    liveUrl: "https://elearning-platform-demo.com",
    type: "fullstack"
  },
  // 10 projets statiques
  {
    id: 11,
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
    id: 12,
    title: "Landing Page JS",
    description: "Landing page statique avec animations JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/landing-page-js",
    liveUrl: "https://landing-page-js-demo.com",
    type: "statique"
  },
  {
    id: 13,
    title: "Site Vitrine",
    description: "Site vitrine pour entreprise locale.",
    technologies: ["HTML", "CSS"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/site-vitrine",
    liveUrl: "https://site-vitrine-demo.com",
    type: "statique"
  },
  {
    id: 14,
    title: "Page événement",
    description: "Page d'inscription à un événement.",
    technologies: ["HTML", "CSS", "JavaScript"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/event-page",
    liveUrl: "https://event-page-demo.com",
    type: "statique"
  },
  {
    id: 15,
    title: "Mini Portfolio JS",
    description: "Mini portfolio avec effets de scroll.",
    technologies: ["HTML", "CSS", "JavaScript"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/mini-portfolio-js",
    liveUrl: "https://mini-portfolio-js-demo.com",
    type: "statique"
  },
  {
    id: 16,
    title: "Page Coming Soon",
    description: "Page d'attente avec compte à rebours.",
    technologies: ["HTML", "CSS", "JavaScript"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/coming-soon",
    liveUrl: "https://coming-soon-demo.com",
    type: "statique"
  },
  {
    id: 17,
    title: "Page de contact",
    description: "Formulaire de contact simple.",
    technologies: ["HTML", "CSS"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/contact-page",
    liveUrl: "https://contact-page-demo.com",
    type: "statique"
  },
  {
    id: 18,
    title: "Page FAQ",
    description: "Page FAQ statique avec accordéon.",
    technologies: ["HTML", "CSS", "JavaScript"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/faq-page",
    liveUrl: "https://faq-page-demo.com",
    type: "statique"
  },
  {
    id: 19,
    title: "Page galerie",
    description: "Galerie d'images statique.",
    technologies: ["HTML", "CSS"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/gallery-page",
    liveUrl: "https://gallery-page-demo.com",
    type: "statique"
  },
  {
    id: 20,
    title: "Page simple",
    description: "Page statique simple pour test.",
    technologies: ["HTML", "CSS"],
    isPrivate: false,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1374&auto=format&fit=crop",
    githubUrl: "https://github.com/user/simple-page",
    liveUrl: "https://simple-page-demo.com",
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