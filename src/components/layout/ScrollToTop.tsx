import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { hash, pathname, search } = useLocation()

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 80)
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [hash, pathname, search])

  return null
}
