import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Feed from './components/feed/Feed'
import About from './components/about/About'
import Stack from './components/stack/Stack'
import './App.css'

type View = 'work' | 'about' | 'stack'

function App() {
  const [currentView, setCurrentView] = useState<View>('work')

  const renderView = () => {
    switch (currentView) {
      case 'work':
        return <Feed />
      case 'about':
        return <About />
      case 'stack':
        return <Stack />
    }
  }

  return (
    <div className="app">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      <main className="main">
        {renderView()}
      </main>
      <Footer />
    </div>
  )
}

export default App
