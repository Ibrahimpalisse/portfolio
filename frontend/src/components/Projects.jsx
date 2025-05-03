import React from 'react';

const Projects = () => {
  // Données des projets
  const projects = [
    {
      id: 1,
      title: "Dashboard Analytics",
      description: "Tableau de bord d'analyse de données avec graphiques interactifs et rapports personnalisables.",
      technologies: ["React", "D3.js", "Firebase"],
      isPrivate: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      githubUrl: "https://github.com/user/dashboard-analytics",
      liveUrl: "https://dashboard-analytics-demo.com"
    },
    {
      id: 2,
      title: "E-commerce App",
      description: "Application de commerce électronique avec panier, paiement et gestion des commandes.",
      technologies: ["React", "Node.js", "MongoDB"],
      isPrivate: false,
      image: "https://images.unsplash.com/photo-1556742208-999815fca738?q=80&w=1374&auto=format&fit=crop",
      githubUrl: "https://github.com/user/ecommerce-app",
      liveUrl: "https://ecommerce-app-demo.com"
    },
    {
      id: 3,
      title: "Chat Application",
      description: "Application de messagerie en temps réel avec discussions privées et groupées.",
      technologies: ["React", "Socket.io", "Express"],
      isPrivate: false,
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1374&auto=format&fit=crop",
      githubUrl: "https://github.com/user/chat-app",
      liveUrl: "https://chat-app-demo.com"
    }
  ];

  return (
    <div id="projects" className="min-h-screen w-full bg-[#1a2241] text-white py-16">
      {/* Titre de la section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-12">
        <h2 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <span className="text-2xl">💻</span> Mes Projets
        </h2>
        <span className="block w-24 h-1.5 bg-yellow-400 mt-2 mb-4"></span>
      </div>
      {/* Grille de projets */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#1e2b4d] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Image du projet */}
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
                {/* Technologies utilisées - avec titre */}
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
                {/* Boutons pour GitHub et site web */}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 