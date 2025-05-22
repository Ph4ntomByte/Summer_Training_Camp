'use client'

import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return visible ? (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-8 right-8 p-3 rounded-full bg-white/20 text-white shadow-lg
        hover:bg-white/30 transition-opacity opacity-90 hover:opacity-100
        focus:outline-none z-50
      "
    >
      <FiArrowUp size={24} />
    </button>
  ) : null
}