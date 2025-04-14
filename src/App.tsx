import React from 'react'
import './index.css'
import Banner from './components/Banner'
import Home from './components/Home'

function App() {
  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Barre latérale de navigation */}
      <Banner 
        name="Vignes Ibrahim" 
        title="Full Stack"
      />
      
      {/* Contenu principal - décalé à droite en desktop, plein écran en mobile */}
      <main className="md:ml-64 flex-1 bg-navy-900 w-full">
        <section id="accueil" className="min-h-screen">
          <Home />
        </section>
        
        <section id="projets" className="min-h-screen py-12 md:py-16 bg-gray-50">
          <div className="px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-36 md:h-48 bg-gray-300"></div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-2">Projet {item}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4">
                      Description détaillée du projet {item}. Technologies utilisées et défis relevés.
                    </p>
                    <div className="flex justify-between">
                      <a href="#" className="text-blue-600 hover:underline text-sm md:text-base">Voir le projet</a>
                      <a href="#" className="text-blue-600 hover:underline text-sm md:text-base">GitHub</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="competences" className="min-h-screen py-12 md:py-16 bg-gray-50">
          <div className="px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS'].map(skill => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs md:text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL'].map(skill => (
                    <span key={skill} className="bg-green-100 text-green-800 px-2 py-1 text-xs md:text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact" className="min-h-screen py-12 md:py-16 bg-gray-50">
          <div className="px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Contact</h2>
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md max-w-2xl">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre message"
                  ></textarea>
      </div>
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-md transition"
                >
                  Envoyer
        </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      </div>
  )
}

export default App