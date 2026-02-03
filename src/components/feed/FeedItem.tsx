import { useRef, useEffect } from 'react'
import type { Post } from '../../types'
import PostCard from '../post/PostCard'
import PostExpanded from '../post/PostExpanded'
import './FeedItem.css'

interface FeedItemProps {
  post: Post
  isExpanded: boolean
  onToggle: () => void
}

function FeedItem({ post, isExpanded, onToggle }: FeedItemProps) {
  const itemRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (isExpanded && itemRef.current) {
      const headerHeight = 64
      const offset = 24
      const elementTop = itemRef.current.getBoundingClientRect().top + window.scrollY
      const scrollTo = elementTop - headerHeight - offset

      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      })
    }
  }, [isExpanded])

  return (
    <article
      ref={itemRef}
      className={`feed-item ${isExpanded ? 'feed-item--expanded' : ''}`}
      aria-labelledby={`post-title-${post.id}`}
    >
      <PostCard post={post} isExpanded={isExpanded} onClick={onToggle} />
      <div className="feed-item__expand-wrapper">
        <div className="feed-item__expand-content">
          {isExpanded && <PostExpanded post={post} />}
        </div>
      </div>
    </article>
  )
}

export default FeedItem
