'use client'

import React from 'react';
import Navigation from '../../components/ui/Navigation'
import { Video } from '../../components/ui/Video'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion, useScroll } from 'framer-motion'

const templates = [
  {
    id: 1,
    title: "Style Up Página Guarda Roupa",
    description: "Site para Estilização de Vestuário Pessoal",
    image: "https://i.imgur.com/nYcCK1k.png",
    video: "https://stup-gamma.vercel.app/static/media/videotcc.24025350485fdcfa8b5f.mp4",
    category: "Design"
  },
  {
    id: 2,
    title: "Style Up Página Looks",
    image: "https://i.imgur.com/XcaYuWW.png",
    video: undefined,
    category: "Design"
  },
  {
    id: 3,
    title: "Style Up Página Contato",
    image: "https://i.imgur.com/OoxSwsd.png",
    video: undefined,
    category: "Design"
  },
  {
    id: 4,
    title: "Style Up Página Home",
    image: "https://i.imgur.com/Te5mnU0.png",
    video: undefined,
    category: "Design"
},
  {
    id: 5,
    title: "Portfólio Editor de video V1",
    image: "https://i.imgur.com/FZ1tgpJ.png",
    video: undefined,
    category: "Design"
  },
  {
    id: 6,
    title: "Portfólio Editor de video V1",
    image: "https://i.imgur.com/f7J51Kh.png",
    video: undefined,
    category: "Template Figma Vendido"
  },
  {
    id: 7,
    title: "Portfólio Editor de video V2",
    image: "https://i.imgur.com/qMLYBSc.png",
    video: undefined,
    category: "Template Figma Vendido"
  },
  {
    id: 8,
    title: "Portfólio Editor de video V2",
    image: "https://i.imgur.com/zdZolZM.png",
    video: undefined,
    category: "Template Figma Vendido"
  },
  
  
]



export default function TemplatesPage() {
    useScroll()


  // Estado para controlar a visibilidade do card de contato
  const [showContactCard, setShowContactCard] = useState(false)

  // Função para alternar a visibilidade do card
  const toggleContactCard = () => {
    setShowContactCard(!showContactCard)
  }

  const closeContactCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Impede que o clique no card feche o card
    e.stopPropagation();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Featured Template - Style Up */}
        <section className="mb-20 relative h-screen">
          <div className="absolute inset-0 z-0">
            <Video 
              src={templates[0].video}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-7xl font-bold text-white/70 mb-6">
                Web Design.
              </h1>
              <p className="text-2xl text-white/70">
                Flexible Design is Art.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
              {templates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/9 ] overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                          View Template
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">{template.category}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1">{template.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 bg-gray-800 bg-opacity-50 text-white py-8">
              <div className="container mx-auto px-4 flex justify-center space-x-6">
                <motion.a
                  href="https://github.com/oreinehr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="text-2xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/guilherme-reinehr-a24117340/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
                <motion.a
                  onClick={toggleContactCard}
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                >
                  <FaEnvelope className="text-2xl" />
                </motion.a>
              </div>
      
              {/* Card com email que aparece ao clicar no envelope */}
              {showContactCard && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
                  onClick={toggleContactCard} // Fechar o card ao clicar fora dele
                >
                  <div
                    onClick={closeContactCard} // Impede que o clique no card feche o card
                    className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-center max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg w-full sm:w-auto"
                  >
                    <button
                      onClick={toggleContactCard} // Botão de fechar
                      className="absolute top-4 right-4 text-xl text-gray-600"
                    >
                      &times; {/* Ícone de fechar */}
                    </button>
                    <p className="font-semibold text-black">
                      Contate <strong className="text-gradient">guilhermereinehr07@gmail.com</strong>
                    </p>
                  </div>
                </motion.div>
              )}
            </footer>
    </div>
  )
}

