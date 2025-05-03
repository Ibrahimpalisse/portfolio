import React, { useState } from 'react';
import { FaGraduationCap, FaBook, FaPalette, FaPhone } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const sections = [
  {
    title: "Éducation",
    icon: <FaGraduationCap className="text-3xl text-purple-400 bg-[#232e4a] rounded-xl p-2" />,
    content: <div className="text-gray-300 mt-4">Détail de l'éducation...</div>
  },
  {
    title: "Formations",
    icon: <FaBook className="text-3xl text-blue-400 bg-[#232e4a] rounded-xl p-2" />,
    content: <div className="text-gray-300 mt-4">Détail des formations...</div>
  },
  {
    title: "Intérêts et Loisirs",
    icon: <FaPalette className="text-3xl text-pink-400 bg-[#232e4a] rounded-xl p-2" />,
    content: <div className="text-gray-300 mt-4">Détail des intérêts et loisirs...</div>
  },
  {
    title: "Contact",
    icon: <FaPhone className="text-3xl text-pink-500 bg-[#232e4a] rounded-xl p-2" />,
    content: <div className="text-gray-300 mt-4">Détail du contact...</div>
  },
];

export default function MonCV() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="min-h-screen w-full bg-[#1a2241] text-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-12">
        <h2 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <span className="text-2xl">🎓</span> Mon CV
        </h2>
        <span className="block w-24 h-1.5 bg-yellow-400 mt-2 mb-4"></span>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-6">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              className="bg-[#22304a] rounded-2xl shadow-md px-6 py-5"
            >
              <button
                className="flex items-center justify-between w-full focus:outline-none"
                onClick={() => toggle(idx)}
              >
                <div className="flex items-center gap-4">
                  {section.icon}
                  <span className="text-white text-lg font-semibold">{section.title}</span>
                </div>
                <span className={`w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 shadow-md transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <MdKeyboardArrowUp className="text-white text-2xl" />
                </span>
              </button>
              {openIndex === idx && (
                <div>
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 