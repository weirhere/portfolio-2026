import { useState } from 'react'
import type { PostImage as PostImageType } from '../../types'
import PostImage from './PostImage'
import Lightbox from '../ui/Lightbox'
import './PostGallery.css'

interface PostGalleryProps {
  images: PostImageType[]
}

function PostGallery({ images }: PostGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (images.length === 0) return null

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const goToPrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1)
    }
  }

  const goToNext = () => {
    if (lightboxIndex !== null && lightboxIndex < images.length - 1) {
      setLightboxIndex(lightboxIndex + 1)
    }
  }

  return (
    <>
      <div className="post-gallery">
        {images.map((image, index) => (
          <button
            key={index}
            className="post-gallery__button"
            onClick={(e) => {
              e.stopPropagation()
              openLightbox(index)
            }}
            aria-label={`View ${image.alt}`}
          >
            <PostImage
              src={image.src}
              alt={image.alt}
              aspectRatio={image.aspectRatio}
              className="post-gallery__image"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images.map(img => ({ src: img.src, alt: img.alt }))}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </>
  )
}

export default PostGallery
