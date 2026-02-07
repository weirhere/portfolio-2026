import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import type { Post } from '../../types'
import postsData from '../../data/posts.json'
import Tag from '../ui/Tag'
import PostImage from './PostImage'
import PostGallery from './PostGallery'
import './ProjectDetail.css'

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()

  const posts: Post[] = postsData.posts as Post[]
  const currentIndex = posts.findIndex((p) => p.id === projectId)
  const post = currentIndex !== -1 ? posts[currentIndex] : undefined
  const nextPost = currentIndex !== -1 ? posts[(currentIndex + 1) % posts.length] : undefined

  useEffect(() => {
    if (!post) {
      navigate('/', { replace: true })
    }
  }, [post, navigate])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate(-1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate])

  if (!post) return null

  const { details, images } = post

  return (
    <div className="project-detail">
      <div className="project-detail__body">
        <div className="project-detail__hero">
          <PostImage
            src={images.hero}
            alt={post.title}
            aspectRatio={images.heroAspectRatio}
          />
        </div>

        <div className="project-detail__content">
          <div>
            <h1 className="project-detail__title">{post.title}</h1>
            <p className="project-detail__caption">{post.caption}</p>
          </div>

          <div className="project-detail__tags">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <p className="project-detail__description">{details.description}</p>

          <div className="project-detail__meta">
            {details.role && (
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Role</span>
                <span className="project-detail__meta-value">{details.role}</span>
              </div>
            )}
            {details.client && (
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Client</span>
                <span className="project-detail__meta-value">{details.client}</span>
              </div>
            )}
            {details.year && (
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Year</span>
                <span className="project-detail__meta-value">{details.year}</span>
              </div>
            )}
            {details.link && (
              <div className="project-detail__meta-item">
                <a
                  href={details.link.url}
                  className="project-detail__link link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {details.link.label}
                  <span className="project-detail__link-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            )}
          </div>

          {images.gallery && images.gallery.length > 0 && (
            <PostGallery images={images.gallery} />
          )}

          {nextPost && (
            <Link to={`/work/${nextPost.id}`} className="project-detail__next">
              <span className="project-detail__next-label">Next Project</span>
              <span className="project-detail__next-title">
                {nextPost.title}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
