import type { Post } from '../../types'
import Tag from '../ui/Tag'
import PostImage from './PostImage'
import './PostCard.css'

interface PostCardProps {
  post: Post
  isExpanded: boolean
  onClick: () => void
}

function PostCard({ post, isExpanded, onClick }: PostCardProps) {
  return (
    <button
      className={`post-card ${isExpanded ? 'post-card--expanded' : ''}`}
      onClick={onClick}
      aria-expanded={isExpanded}
    >
      <div className="post-card__image-wrapper">
        <div className="post-card__image-inner">
          <PostImage
            src={post.images.hero}
            alt={post.title}
            aspectRatio={post.images.heroAspectRatio}
            className="post-card__image"
          />
        </div>
      </div>
      <div className="post-card__content">
        <div className="post-card__header">
          <h2 className="post-card__title">{post.title}</h2>
          <span className="post-card__toggle" aria-hidden="true">
            {isExpanded ? '−' : '+'}
          </span>
        </div>
        <p className="post-card__caption">{post.caption}</p>
        <div className="post-card__tags">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </button>
  )
}

export default PostCard
