'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navigation() {
  // Estado para controle da visibilidade do navbar
  const [visible, setVisible] = useState(true)
  let lastScrollY = 0

  // Função para lidar com o evento de rolagem
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      // Verifica a direção do scroll
      if (window.scrollY > lastScrollY) {
        // Rolando para baixo, esconder o navbar
        setVisible(false)
      } else {
        // Rolando para cima, mostrar o navbar
        setVisible(true)
      }
      // Atualiza a última posição da rolagem
      lastScrollY = window.scrollY
    }
  }

  // Usar useEffect para adicionar o ouvinte de evento de rolagem
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -60 }} // Controlando a visibilidade
      transition={{ duration: 0.3 }}
      className=" w-full top-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1 flex items-center justify-start space-x-8">
            <Link href="/" className="text-white hover:text-gray-600 transition-colors">
              Home
            </Link>

            <Link href="/templates" className="text-white hover:text-gray-600 transition-colors">
              Projetos
            </Link>
          </div>

          <Link href="/" className="flex-shrink-0">
            <span className="sr-only">Your Logo</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white"
            >
              GR
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
