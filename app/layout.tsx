import './globals.css'
import { Poppins, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '../components/ui/ThemeContext'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Portfólio de Guilherme Reinehr',
  description: 'Desenvolvedor Web & Estudante de Técnico em Informática',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <ThemeProvider>
        <body className="font-sans">{children}</body>
      </ThemeProvider>
    </html>
  )
}

