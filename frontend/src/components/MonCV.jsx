import React, { useState } from 'react';
import { FaGraduationCap, FaBook, FaPalette, FaPhone, FaEnvelope, FaSchool, FaUserGraduate, FaStar, FaBriefcase, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useTranslation } from 'react-i18next';

export default function MonCV() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: t('cv.experience'),
      icon: <FaBriefcase className="text-3xl text-orange-400 bg-[#232e4a] rounded-xl p-2" />,
      content: (
        <div className="text-gray-300 mt-4 space-y-2">
          <div className="flex items-center gap-2"><FaLaptopCode className="text-yellow-400" /> Stage dans le numérique à l'École de la Plateforme <span className="text-xs text-gray-400">1 mois, 2024</span></div>
          <div className="flex items-center gap-2"><FaMobileAlt className="text-blue-400" /> Mission développeur web & mobile chez Idée Intérim <span className="text-xs text-gray-400">2024-2025</span></div>
        </div>
      )
    },
    {
      title: t('cv.education'),
      icon: <FaSchool className="text-3xl text-blue-400 bg-[#232e4a] rounded-xl p-2" />,
      content: (
        <div className="text-gray-300 mt-4 space-y-2">
          <div className="flex items-center gap-2"><FaUserGraduate className="text-yellow-400" /> Ecole privée Lycée Marrakech Maroc <span className="text-xs text-gray-400">2021-2023</span></div>
        </div>
      )
    },
    {
      title: t('cv.trainings'),
      icon: <FaBook className="text-3xl text-green-400 bg-[#232e4a] rounded-xl p-2" />,
      content: (
        <div className="text-gray-300 mt-4 space-y-2">
          <div className="flex items-center gap-2"><FaStar className="text-pink-400" /> CIERES Pic Axe 2 (Validation projet pro) <span className="text-xs text-gray-400">2023-2024, Marseille</span></div>
          <div className="flex items-center gap-2"><FaStar className="text-yellow-400" /> Ecole de la Deuxième Chance (Remise à niveau, construction projet pro) <span className="text-xs text-gray-400">2024</span></div>
        </div>
      )
    },
    {
      title: t('cv.interests'),
      icon: <FaPalette className="text-3xl text-pink-400 bg-[#232e4a] rounded-xl p-2" />,
      content: (
        <div className="text-gray-300 mt-4 space-y-2">
          <div className="flex items-center gap-2"><FaStar className="text-yellow-400" /> Les manhua (manga chinois)</div>
          <div className="flex items-center gap-2"><FaStar className="text-blue-400" /> Les manhwa (manga coréen)</div>
          <div className="flex items-center gap-2"><FaStar className="text-green-400" /> Lire des light novels (xianxia)</div>
        </div>
      )
    },
    {
      title: t('cv.contact'),
      icon: <FaPhone className="text-3xl text-yellow-400 bg-[#232e4a] rounded-xl p-2" />,
      content: (
        <div className="text-gray-300 mt-4 space-y-2">
          <div className="flex items-center gap-2"><FaPhone className="text-pink-400" /> 07.63.88.37.20</div>
          <div className="flex items-center gap-2"><FaEnvelope className="text-yellow-400" /> ibrahim.vignes@gmail.com</div>
        </div>
      )
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="min-h-screen w-full bg-[#1a2241] text-white py-16 md:pl-64 overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-16 mb-12 max-w-full md:max-w-[calc(100%-2rem)]">
        <h2 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <span className="text-2xl">🎓</span> {t('cv.title')}
        </h2>
        <span className="block w-24 h-1.5 bg-yellow-400 mt-2 mb-4"></span>
      </div>
      <div className="w-full px-4 md:px-8 lg:px-16 max-w-full md:max-w-[calc(100%-2rem)]">
        <div className="flex flex-col gap-6">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              className="bg-[#22304a]/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-yellow-400/40 px-6 py-5 transition-all duration-300"
            >
              <button
                className="flex items-center justify-between w-full focus:outline-none"
                onClick={() => toggle(idx)}
              >
                <div className="flex items-center gap-4">
                  {section.icon}
                  <span className="text-white text-lg font-semibold tracking-wide drop-shadow">{section.title}</span>
                </div>
                <span className={`w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 shadow-md transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <MdKeyboardArrowUp className="text-white text-2xl" />
                </span>
              </button>
              <div
                className={`transition-all duration-500 overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
              >
                {openIndex === idx && (
                  <div>
                    {section.content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 