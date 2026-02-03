import { useEffect, useCallback } from 'react'
import './Lightbox.css'

interface LightboxImage {
  src: string
  alt: string
}

interface LightboxProps {
  images: LightboxImage[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const currentImage = images[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < images.length - 1

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowLeft':
        if (hasPrev) onPrev()
        break
      case 'ArrowRight':
        if (hasNext) onNext()
        break
    }
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image lightbox">
      <div className="lightbox__backdrop" onClick={onClose} />

      <button
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="lightbox__content">
        {hasPrev && (
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={onPrev}
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <div className="lightbox__image-container">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="lightbox__image"
          />
        </div>

        {hasNext && (
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={onNext}
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>

      <div className="lightbox__counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default Lightbox
