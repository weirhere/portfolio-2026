import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import type { Post } from '../../types'
import postsData from '../../data/posts.json'
import aboutData from '../../data/about.json'
import FeedItem from './FeedItem'
import './Feed.css'

function Feed() {
  const [generatingResume, setGeneratingResume] = useState(false)

  const posts: Post[] = postsData.posts as Post[]

  // Sort posts by date (newest first)
  const sortedPosts = useMemo(() => {
    return [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  }, [posts])

  const handleResumeClick = async () => {
    if (generatingResume) return
    setGeneratingResume(true)
    try {
      const { generateResume } = await import('../resume/generateResume')
      await generateResume()
    } catch (err) {
      console.error('Resume generation failed:', err)
    } finally {
      setGeneratingResume(false)
    }
  }

  const introBio = aboutData.bio.split('\n\n')[0]

  return (
    <section className="feed container container--narrow">
      <header className="feed__intro">
        {/* <img
          src="/images/avatar.jpg"
          alt={aboutData.name}
          className="feed__avatar"
        /> */}
        <div className="feed__intro-content">
          <h1 className="feed__name">Andy Weir is a <s className="feed__name--struck">vibe coder</s> design engineer in the making...</h1>
          <p className="feed__bio">{introBio}</p>
          <div className="feed__actions">
            <Link to="/about" className="feed__btn">About</Link>
            <button className="feed__btn" onClick={handleResumeClick} disabled={generatingResume}>
              {generatingResume ? 'Generating...' : 'Resume'}
              {!generatingResume && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M6 2v6.5M3 6.5L6 9.5 9 6.5M2.5 11h7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      <div className="feed__list">
        {sortedPosts.length === 0 ? (
          <p className="feed__empty">No posts found.</p>
        ) : (
          sortedPosts.map((post) => (
            <FeedItem key={post.id} post={post} />
          ))
        )}
      </div>
    </section>
  )
}

export default Feed
