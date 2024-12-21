'use client'

import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useSpring, animated } from '@react-spring/web'
import Navigation2 from './ui/Navigation2'
import { 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiMongodb, 
  SiMysql, 
  SiNextdotjs, 
  SiPython 
} from 'react-icons/si'
import { OrganicShape } from './OrganicShape'
import Image from 'next/image'

const projects = [
  { 
    id: 1, 
    title: 'Style Up', 
    description: 'Site para Estilização de Vestuário Pessoal que permite tirar fotos de roupas, remover o fundo e criar looks personalizados em um guarda-roupa virtual.',
    link: 'https://stup-gamma.vercel.app/',
    image: 'https://sjc.microlink.io/6w6E3fBeBiDNWn5bcJQEX5esJ7NjpM9eAZcTImUH8u7e4A5Gl6ynARXz4vEvGLR010YSV3ssPFJzNKzSdIbCPg.jpeg'
  },
  { 
    id: 2, 
    title: 'Casa Boa', 
    description: 'Site Imobiliário com o objetivo de facilitar a compra e venda de imóveis.',
    link: 'https://catalog-site-next-gyzvwk1mm-vitorhascs-projects.vercel.app/',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fcatalog-site-next-gyzvwk1mm-vitorhascs-projects.vercel.app%2Fpages%2Fhome&screenshot=true&embed=screenshot.url'
  },
  { id: 3, title: 'Portfólio Gustavo', description: 'Um portfólio destinado ao Editor e Diretor de Conteúdo do Gustavo Reinehr',
    link: 'https://gustavo-reinehr.vercel.app/',
    image:'https://api.microlink.io/?url=https%3A%2F%2Fgustavo-reinehr.vercel.app%2F&screenshot=true&embed=screenshot.url'
  },
  { id: 4, title: 'Blog Nike', description: 'Trabalho Escolar',
    link: 'https://oreinehr.github.io/Blog/',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Foreinehr.github.io%2FBlog%2F&screenshot=true&embed=screenshot.url'
  },
]

const technologies = [
  { id: 1, name: 'React', icon: SiReact, color: 'text-blue-500' },
  { id: 2, name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { id: 3, name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { id: 4, name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { id: 5, name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
  { id: 6, name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800' },
  { id: 7, name: 'Python', icon: SiPython, color: 'text-blue-400' },
]

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const springProps = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: { mass: 1, tension: 120, friction: 14 },
  })

  // Estado para controlar a visibilidade do card de contato
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
    
  

    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 overflow-hidden">
        <Navigation2/>
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ scale, opacity }}
      >
        <OrganicShape className="absolute top-0 left-0 w-full h-full text-yellow-300 opacity-20" />
      </motion.div>

      <header className="relative z-10 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mt-4 text-white mb-4"
        >
          Guilherme Reinehr
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-white"
        >
          Designer & Desenvolvedor Frontend
        </motion.p>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-12">
        <animated.section style={springProps} className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Sobre Mim</h2>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 text-white">
            <p className="mb-4">
              Sou estudante de Técnico em Informática no CIMOL (Taquara), com previsão de finalização do curso técnico em 2024 e estágio de 400 horas em 2025. Durante minha formação, tive a oportunidade de trabalhar em diversos projetos de desenvolvimento web, utilizando ferramentas e frameworks modernos para criar soluções eficientes e escaláveis.
            </p>
            <p className="mb-4">
              Estou sempre em busca de novas tecnologias e melhores práticas de programação para aprimorar minhas habilidades. Minha paixão pela programação e meu compromisso com a excelência me impulsionam a enfrentar novos desafios e a crescer constantemente como desenvolvedor.
            </p>
            <p>
              Meu Trabalho de Conclusão de Curso, chamado Style Up, é um exemplo do meu empenho e criatividade. Trata-se de um site para Estilização de Vestuário Pessoal, no qual é possível tirar fotos de roupas, remover o fundo das mesmas e adicioná-las a um guarda-roupa virtual. Além disso, os usuários podem criar looks com as roupas salvas e armazená-los na aba de looks, proporcionando uma experiência única de organização e planejamento de vestuário.
            </p>
          </div>
        </animated.section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-300"
              >
                {project.image && (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={500} // Ajuste a largura conforme necessário
                    height={300} // Ajuste a altura conforme necessário
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Tecnologias Utilizadas</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.0, type: 'spring', stiffness: 260, damping: 20 }}
                className="flex flex-col items-center"
              >
                <tech.icon className={`text-6xl ${tech.color}`} />
                <span className="mt-2 text-white font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-purple-900 bg-opacity-50 text-white py-8">
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
