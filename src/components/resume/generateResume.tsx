export async function generateResume() {
  const [
    { pdf },
    { default: ResumeDocument },
    { default: about },
    { default: experience },
    { default: posts },
    { default: clients },
    { default: stack },
  ] = await Promise.all([
    import('@react-pdf/renderer'),
    import('./ResumeDocument'),
    import('../../data/about.json'),
    import('../../data/experience.json'),
    import('../../data/posts.json'),
    import('../../data/clients.json'),
    import('../../data/stack.json'),
  ])

  const documentId = crypto.randomUUID()
  const now = new Date()
  const generationDate = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const filename = `Andy-Weir-Resume-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}.pdf`

  const blob = await pdf(
    <ResumeDocument
      about={about}
      positions={experience.positions}
      projects={posts.posts}
      clients={clients.clients}
      tools={stack.tools}
      generationDate={generationDate}
      documentId={documentId}
    />
  ).toBlob()

  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
