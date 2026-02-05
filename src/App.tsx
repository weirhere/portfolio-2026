import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Feed from './components/feed/Feed'
import About from './components/about/About'
import Stack from './components/stack/Stack'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/about" element={<About />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
