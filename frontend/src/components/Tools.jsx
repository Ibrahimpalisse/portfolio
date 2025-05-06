import React from 'react';
import { FaGitAlt, FaDocker, FaFigma, FaGithub, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiTailwindcss } from 'react-icons/si';

const frontend = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-5xl mx-auto" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-400 text-5xl mx-auto" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-5xl mx-auto" /> },
  { name: 'React', icon: <FaJs className="text-sky-400 text-5xl mx-auto" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400 text-5xl mx-auto" /> },
  { name: 'Figma', icon: <FaFigma className="text-orange-400 text-5xl mx-auto" /> },
];

const backend = [
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-5xl mx-auto" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-200 text-5xl mx-auto" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-400 text-5xl mx-auto" /> },
  { name: 'MySQL', icon: <FaDatabase className="text-blue-300 text-5xl mx-auto" /> },
];

const tools = [
  { name: 'Git', icon: <FaGitAlt className="text-orange-500 text-5xl mx-auto" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white text-5xl mx-auto" /> },
  { name: 'Docker', icon: <FaDocker className="text-sky-400 text-5xl mx-auto" /> },
  { name: 'phpMyAdmin', icon: <FaDatabase className="text-orange-400 text-5xl mx-auto" /> },
];

const Section = ({ title, items }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {items.map((tool) => (
        <div
          key={tool.name}
          className="bg-[#22304a] rounded-xl p-8 flex flex-col items-center shadow-md hover:shadow-xl transition-all duration-300"
        >
          {tool.icon}
          <span className="mt-6 text-lg text-white font-semibold tracking-wide text-center">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Tools = () => {
  return (
    <section className="min-h-screen w-full bg-[#1a2241] text-white py-16 md:pl-64 overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-16 mb-12 max-w-full md:max-w-[calc(100%-2rem)]">
        <h3 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <span className="text-2xl">📝</span> Mes Compétences
        </h3>
        <span className="block w-24 h-1.5 bg-yellow-400 mt-2 mb-4"></span>
      </div>
      <div className="w-full px-4 md:px-8 lg:px-16 max-w-full md:max-w-[calc(100%-2rem)]">
        <Section title="Front-end" items={frontend} />
        <Section title="Back-end" items={backend} />
        <Section title="Environnements & Outils" items={tools} />
      </div>
    </section>
  );
};

export default Tools; 