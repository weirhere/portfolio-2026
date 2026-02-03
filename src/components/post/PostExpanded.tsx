import type { Post } from '../../types'
import PostGallery from './PostGallery'
import './PostExpanded.css'

interface PostExpandedProps {
  post: Post
}

function PostExpanded({ post }: PostExpandedProps) {
  const { details, images } = post

  return (
    <div className="post-expanded">
      <div className="post-expanded__description">
        <p>{details.description}</p>
      </div>

      <div className="post-expanded__meta">
        {details.role && (
          <div className="post-expanded__meta-item">
            <span className="post-expanded__meta-label">Role</span>
            <span className="post-expanded__meta-value">{details.role}</span>
          </div>
        )}
        {details.client && (
          <div className="post-expanded__meta-item">
            <span className="post-expanded__meta-label">Client</span>
            <span className="post-expanded__meta-value">{details.client}</span>
          </div>
        )}
        {details.year && (
          <div className="post-expanded__meta-item">
            <span className="post-expanded__meta-label">Year</span>
            <span className="post-expanded__meta-value">{details.year}</span>
          </div>
        )}
        {details.link && (
          <div className="post-expanded__meta-item">
            <a
              href={details.link.url}
              className="post-expanded__link link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {details.link.label}
              <span className="post-expanded__link-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        )}
      </div>

      {images.gallery && images.gallery.length > 0 && (
        <div className="post-expanded__gallery">
          <PostGallery images={images.gallery} />
        </div>
      )}
    </div>
  )
}

export default PostExpanded
