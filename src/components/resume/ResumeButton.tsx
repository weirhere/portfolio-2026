import { useState } from 'react'

export default function ResumeButton() {
  const [generating, setGenerating] = useState(false)

  async function handleClick() {
    if (generating) return
    setGenerating(true)
    try {
      const { generateResume } = await import('./generateResume')
      await generateResume()
    } catch (err) {
      console.error('Resume generation failed:', err)
    } finally {
      setGenerating(false)
    }
  }

  return (
    <button
      className="header__nav-link header__resume-btn"
      onClick={handleClick}
      disabled={generating}
      aria-label={generating ? 'Generating resume' : 'Download resume'}
    >
      {generating ? 'Generating...' : 'Resume'}
      {!generating && (
        <svg
          className="header__resume-icon"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 2v6.5M3 6.5L6 9.5 9 6.5M2.5 11h7"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}
