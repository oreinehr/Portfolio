'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Minus, Plus, ShoppingBag, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface TemplateDetailProps {
  template: {
    id: number
    title: string
    description: string
    image: string
    category: string
  }
  onClose: () => void
}

export default function TemplateDetail({ template, onClose }: TemplateDetailProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <nav className="flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/templates" className="text-gray-600 hover:text-gray-900">Design</a>
          </nav>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            X {/* Fechar botão */}
          </button>
        </div>

        {/* Template Details */}
        <div className="flex justify-between">
          <div className="w-1/2">
            <img
              src={template.image}
              alt={template.title}
              className="w-full bg-black h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-1/2 pl-8">
            <h2 className="text-3xl font-semibold text-gray-900">{template.title}</h2>
            <p className="text-gray-600 mt-4 bg-black">{template.description}</p>
            <div className="mt-4">
  <a href='/templates'>
    <button className="bg-black w-30 p-3  text-white hover:bg-gray-800 transition-colors duration-300 rounded-lg">
      Veja outros Templates
    </button>
  </a>
</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
