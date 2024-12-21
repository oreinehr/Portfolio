'use client'

import { useEffect, useRef } from 'react'

interface VideoProps {
  src: string
  className?: string
}

export function Video({ src, className = '' }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className={`w-full h-full object-cover ${className}`}
      loop
      muted
      playsInline
      controls={false}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

