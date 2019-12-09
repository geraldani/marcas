import { useState, useEffect } from 'react'
import { SCREEN } from '../utils/constants'

//la primera variable re retorna representa el valor maximo de la ventana mientras que el segundo es el valor de la ventana del ViewPort
export const useWindowHeight = () => {
  const body = document.body
  const html = document.documentElement
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    setMaxHeight(Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight, html.clientHeight, html.scrollHeight, html.offsetHeight))
  }, [])
  return [maxHeight, html.clientHeight]
}

export const useWindowWidth = () => {
  const [dropDown, setDropDown] = useState(!(document.body.offsetWidth + 10 < SCREEN.lg))
  useEffect(() => {
    const handleResize = () => {
      const width = document.body.offsetWidth + 10
      width < SCREEN.lg
        ? setDropDown(false)
        : setDropDown(true)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [document.body.offsetWidth])
  return { dropDown, setDropDown }
}
