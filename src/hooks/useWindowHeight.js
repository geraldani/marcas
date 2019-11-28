import { useState, useEffect } from 'react'
import { SCREEN } from '../utils/constants'

export const useWindowHeight = () => {
  const body = document.body
  const html = document.documentElement
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    setMaxHeight(Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight, html.clientHeight, html.scrollHeight, html.offsetHeight))
  }, [])
  return maxHeight
}

export const useWindowWidth = () => {
  const [dropDown, setDropDown] = useState(!(document.body.offsetWidth + 10 < SCREEN.lg))
  useEffect(() => {
    const handleResize = () => {
      const width = document.body.offsetWidth + 10
      if (width < SCREEN.lg) {
        setDropDown(false)
      } else {
        setDropDown(true)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [document.body.offsetWidth])
  return { dropDown, setDropDown }
}
