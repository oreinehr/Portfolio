
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "./components/ui/lib/utils"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Guilherme Reinehr — Creative Developer",
  description: "Portfolio of Guilherme Reinehr, Creative Developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "bg-black text-white antialiased")}>{children}</body>
    </html>
  )
}

