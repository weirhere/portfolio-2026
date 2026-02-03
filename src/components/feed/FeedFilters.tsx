import './FeedFilters.css'

interface FeedFiltersProps {
  activeTag: string | null
  onTagChange: (tag: string | null) => void
  availableTags: string[]
}

function FeedFilters({
  activeTag,
  onTagChange,
  availableTags,
}: FeedFiltersProps) {
  if (availableTags.length === 0) return null

  return (
    <div className="feed-filters">
      <div className="feed-filters__tags" role="group" aria-label="Filter by tag">
        <button
          className={`feed-filters__tag ${!activeTag ? 'feed-filters__tag--active' : ''}`}
          onClick={() => onTagChange(null)}
          aria-pressed={!activeTag}
        >
          All
        </button>
        {availableTags.map((tag) => (
          <button
            key={tag}
            className={`feed-filters__tag ${activeTag === tag ? 'feed-filters__tag--active' : ''}`}
            onClick={() => onTagChange(activeTag === tag ? null : tag)}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FeedFilters
