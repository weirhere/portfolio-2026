import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Feed from './components/feed/Feed'
import About from './components/about/About'
import Stack from './components/stack/Stack'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/about" element={<About />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  )
}

export default App
