import type { Post } from '../../types'
import PostCard from '../post/PostCard'
import './FeedItem.css'

interface FeedItemProps {
  post: Post
}

function FeedItem({ post }: FeedItemProps) {
  return (
    <article className="feed-item" aria-labelledby={`post-title-${post.id}`}>
      <PostCard post={post} />
    </article>
  )
}

export default FeedItem
