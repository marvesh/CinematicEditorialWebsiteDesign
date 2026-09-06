import { useState, useEffect } from 'react'
import type { Page } from './types'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Stories from './pages/Stories'
import CreatorHub from './pages/CreatorHub'
import Resources from './pages/Resources'
import Shop from './pages/Shop'
import About from './pages/About'
import Admin from './pages/Admin'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home setPage={setPage} />
      case 'stories': return <Stories />
      case 'creator-hub': return <CreatorHub />
      case 'resources': return <Resources />
      case 'shop': return <Shop />
      case 'about': return <About />
      case 'admin': return <Admin />
      default: return <Home setPage={setPage} />
    }
  }

  const isAdmin = page === 'admin'

  return (
    <div className="min-h-full flex flex-col">
      {!isAdmin && (
        <Nav page={page} setPage={setPage} />
      )}
      <main className="flex-1">
        {renderPage()}
      </main>
      {!isAdmin && (
        <Footer setPage={setPage} />
      )}
    </div>
  )
}
