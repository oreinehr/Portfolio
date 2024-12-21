'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, ShoppingBag } from 'lucide-react'

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 20, y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1 flex items-center justify-start space-x-8">
            <Link href="/" className="text-gray-900 hover:text-gray-600 transition-colors">
              Home
            </Link>
            
            <Link href="/templates" className="text-gray-900 hover:text-gray-600 transition-colors">
              Projetos
            </Link>
          </div>
          
          <Link href="/" className="flex-shrink-0">
            <span className="sr-only">Your Logo</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-"
            >
              GR
            </motion.div>
          </Link>
          
    
        </div>
      </div>
    </motion.nav>
  )
}

