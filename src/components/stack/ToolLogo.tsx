import './ToolLogo.css'

interface ToolLogoProps {
  name: string
}

function ToolLogo({ name }: ToolLogoProps) {
  return (
    <div className="tool-logo">
      <img
        src={`/images/logos/${name}.png`}
        alt=""
        className="tool-logo__image"
      />
    </div>
  )
}

export default ToolLogo
