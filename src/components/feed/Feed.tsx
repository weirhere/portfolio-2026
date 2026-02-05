import { useState, useMemo } from 'react'
import type { Post } from '../../types'
import postsData from '../../data/posts.json'
import aboutData from '../../data/about.json'
import FeedFilters from './FeedFilters'
import FeedItem from './FeedItem'
import './Feed.css'

function Feed() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null)

  const posts: Post[] = postsData.posts as Post[]

  // Sort posts by date (newest first)
  const sortedPosts = useMemo(() => {
    return [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  }, [posts])

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)))
    return Array.from(tags).sort()
  }, [posts])

  // Filter posts
  const filteredPosts = useMemo(() => {
    if (!activeTag) return sortedPosts
    return sortedPosts.filter((post) => post.tags.includes(activeTag))
  }, [sortedPosts, activeTag])

  const handleToggle = (postId: string) => {
    setExpandedPostId((current) => (current === postId ? null : postId))
  }

  const introBio = aboutData.bio.split('\n\n')[0]

  return (
    <section className="feed container">
      <header className="feed__intro">
        <img
          src="/images/avatar.jpg"
          alt={aboutData.name}
          className="feed__avatar"
        />
        <div className="feed__intro-content">
          <h1 className="feed__name">{aboutData.name}</h1>
          <p className="feed__title">{aboutData.title}</p>
          <p className="feed__bio">{introBio}</p>
        </div>
      </header>
      <FeedFilters
        activeTag={activeTag}
        onTagChange={setActiveTag}
        availableTags={allTags}
      />
      <div className="feed__list">
        {filteredPosts.length === 0 ? (
          <p className="feed__empty">No posts found.</p>
        ) : (
          filteredPosts.map((post) => (
            <FeedItem
              key={post.id}
              post={post}
              isExpanded={expandedPostId === post.id}
              onToggle={() => handleToggle(post.id)}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default Feed
