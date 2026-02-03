import './FilterButton.css'

interface FilterButtonProps {
  children: React.ReactNode
  isActive: boolean
  onClick: () => void
}

function FilterButton({ children, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      className={`filter-button ${isActive ? 'filter-button--active' : ''}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      {children}
    </button>
  )
}

export default FilterButton
