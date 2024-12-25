'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../../components/ui/Navigation'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
const aiImages = [

  {
    id: 1,
    src: "https://i.imgur.com/zoAuPii.png",
    alt: "Portrait with upward gaze",
    className: "col-span-1 aspect-square"
  },
  {
    id: 2,
    src: "https://i.imgur.com/kvt3rvH.jpeg",
    alt: "Motion blur portrait",
    className: "col-span-1 aspect-square"
  },
  {
    id: 3,
    src: "https://i.imgur.com/npyeY4z.png",
    alt: "Dark dramatic portrait",
    className: "col-span-1 aspect-square"
  },
  // Row 2 - One 1:1 and one 2:1
  {
    id: 4,
    src: "https://i.imgur.com/ACGxac2.png",
    alt: "Side profile blur",
    className: "col-span-1 aspect-square"
  },
  {
    id: 5,
    src: "https://i.imgur.com/ONetzB8.png",
    alt: "Cracked glass",
    className: "col-span-2 aspect-[2/1]"
  },
  // Row 3 - One 2:1 and one 1:1
  {
    id: 6,
    src: "https://i.imgur.com/L6MiY15.png",
    alt: "Iridescent bubbles",
    className: "col-span-2 aspect-[2/1]"
  },
  {
    id: 7,
    src: "https://i.imgur.com/iTJWbSX.png",
    alt: "Motion portrait",
    className: "col-span-1 aspect-square"
  },
  // Row 4 - Three 1:1 images
  {
    id: 8,
    src: "https://i.imgur.com/P18bBZs.png",
    alt: "Humanoid robot",
    className: "col-span-1 aspect-square"
  },
  {
    id: 9,
    src: "https://i.imgur.com/14Ge8ur.png",
    alt: "Hair motion",
    className: "col-span-1 aspect-square"
  },
  {
    id: 10,
    src: "https://i.imgur.com/eGFbYK8.png",
    alt: "Astronaut landscape",
    className: "col-span-1 aspect-square"
  }
]


export default function AIPage() {
    const [showContactCard, setShowContactCard] = useState(false)
    
      // Função para alternar a visibilidade do card
      const toggleContactCard = () => {
        setShowContactCard(!showContactCard)
      }
    
      const closeContactCard = (e: React.MouseEvent<HTMLDivElement>) => {
        // Impede que o clique no card feche o card
        e.stopPropagation()
      }
    
  return (
    <div className="min-h-screen bg-[#0F1010]">
      <Navigation />
      
      <main className="pt-24 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 text-gray-300">
              AI Gallery
            </h1>
            <p className="text-xl text-gray-500">
              Exploring the intersection of artificial intelligence and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-3 auto-rows-auto gap-4">
            {/* Row 1 - Three 1:1 images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="col-span-1 aspect-square relative group"
            >
              <img
                src={aiImages[0].src}
                alt={aiImages[0].alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                    View Image
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-1 aspect-square relative group"
            >
              <img
                src={aiImages[1].src}
                alt={aiImages[1].alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                    View Image
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="col-span-1 aspect-square relative group"
            >
              <img
                src={aiImages[2].src}
                alt={aiImages[2].alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                    View Image
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Row 2 - One 1:1 and one 2:1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="col-span-1 aspect-square relative group"
            >
              <img
                src={aiImages[3].src}
                alt={aiImages[3].alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                    View Image
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="col-span-2 aspect-[2/1] relative group"
            >
              <img
                src={aiImages[4].src}
                alt={aiImages[4].alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                    View Image
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Row 3 - One 2:1 and one 1:1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="col-span-2 aspect-[2/1] relative group"
            >
              <img
                src={aiImages[5].src}
                alt={aiImages[5].alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                    View Image
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="col-span-1 aspect-square relative group"
            >
              <img
                src={aiImages[6].src}
                alt={aiImages[6].alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                    View Image
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Row 4 - Three 1:1 images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="col-span-1 aspect-square relative group"
            >
              <img
                src={aiImages[7].src}
                alt={aiImages[7].alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                    View Image
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="col-span-1 aspect-square relative group"
            >
              <img
                src={aiImages[8].src}
                alt={aiImages[8].alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                    View Image
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="col-span-1 aspect-square relative group"
            >
              <img
                src={aiImages[9].src}
                alt={aiImages[9].alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                    View Image
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
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

