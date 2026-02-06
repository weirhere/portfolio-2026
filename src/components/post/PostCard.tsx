import { Link } from 'react-router-dom'
import type { Post } from '../../types'
import Tag from '../ui/Tag'
import PostImage from './PostImage'
import './PostCard.css'

interface PostCardProps {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  return (
    <Link to={`/work/${post.id}`} className="post-card">
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
        <h2 className="post-card__title">{post.title}</h2>
        <p className="post-card__caption">{post.caption}</p>
        <div className="post-card__tags">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default PostCard
