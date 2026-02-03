import { useState } from 'react'
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

  return (
    <div
      className={`post-image ${className}`}
      style={{ aspectRatio }}
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
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  )
}

export default PostImage
