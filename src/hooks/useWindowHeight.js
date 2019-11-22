import { useState, useEffect } from 'react'

export const useWindowHeight = () => {
  const body = document.body
  const html = document.documentElement
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    setMaxHeight(Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight, html.clientHeight, html.scrollHeight, html.offsetHeight))
  }, [])
  return maxHeight
}
