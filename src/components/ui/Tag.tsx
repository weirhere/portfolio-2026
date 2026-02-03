import './Tag.css'

interface TagProps {
  children: React.ReactNode
}

function Tag({ children }: TagProps) {
  return <span className="tag">{children}</span>
}

export default Tag
