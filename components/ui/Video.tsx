'use client'

import { useEffect, useRef } from 'react'

interface VideoProps {
  src: string | undefined // src pode ser string ou undefined
  className?: string
}

export function Video({ src, className = '' }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Usando useEffect para garantir que o vídeo será tocado após o carregamento
  useEffect(() => {
    if (videoRef.current && src) { // Verifica se src está definido antes de tentar tocar
      videoRef.current.play().catch(error => {
        console.log("Erro ao tentar reproduzir o vídeo:", error);
      });
    }
  }, [src]); // Dependência em src, para que a effect reaja à mudanças do src

  // Se src não for fornecido, você pode definir um valor de fallback
  const videoSrc = src || 'https://your-default-video-url.mp4'; // Substitua pela URL do seu vídeo de fallback

  return (
    <video
      ref={videoRef}
      className={`w-full h-full object-cover ${className}`}
      loop
      muted
      playsInline
      controls={false}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
