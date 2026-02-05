import { useState, useRef, useCallback, useEffect } from 'react'
import './PostImage.css'

interface PostImageProps {
  src: string
  alt: string
  aspectRatio?: string
  className?: string
}

function PostImage({ src, alt, aspectRatio = '16/9', className = '' }: PostImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const targetTilt = useRef({ rotateX: 0, rotateY: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const animate = () => {
      setTilt(current => {
        const ease = 0.08
        const newRotateX = current.rotateX + (targetTilt.current.rotateX - current.rotateX) * ease
        const newRotateY = current.rotateY + (targetTilt.current.rotateY - current.rotateY) * ease
        return { rotateX: newRotateX, rotateY: newRotateY }
      })
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const maxTilt = 6
    targetTilt.current = {
      rotateX: (0.5 - y) * maxTilt,
      rotateY: (x - 0.5) * maxTilt,
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    targetTilt.current = { rotateX: 0, rotateY: 0 }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`post-image ${className}`}
      style={{ aspectRatio }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {!isLoaded && !hasError && (
        <div className="post-image__placeholder image-placeholder" />
      )}
      {hasError ? (
        <div className="post-image__error">
          <span>Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`post-image__img ${isLoaded ? 'post-image__img--loaded' : ''}`}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.05)`,
          }}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  )
}

export default PostImage
