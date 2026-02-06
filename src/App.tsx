import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Feed from './components/feed/Feed'
import About from './components/about/About'
import Stack from './components/stack/Stack'
import ProjectDetail from './components/post/ProjectDetail'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  const { pathname } = useLocation()
  const isProjectDetail = pathname.startsWith('/work/')

  return (
    <div className="app">
      <ScrollToTop />
      {!isProjectDetail && <Header />}
      <main className={`main${isProjectDetail ? ' main--flush' : ''}`}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/about" element={<About />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/work/:projectId" element={<ProjectDetail />} />
        </Routes>
      </main>
      {!isProjectDetail && <Footer />}
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
