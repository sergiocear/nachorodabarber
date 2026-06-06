import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
      if (ringRef.current) {
        setTimeout(() => {
          ringRef.current.style.left = e.clientX + 'px'
          ringRef.current.style.top = e.clientY + 'px'
        }, 80)
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
      <Navbar />
      <Hero />
      <Gallery />
      <Booking />
      <Reviews />
      <Location />
      <Footer />
    </>
  )
}

export default App