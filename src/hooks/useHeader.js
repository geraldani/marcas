import { useState, useRef, useEffect } from 'react'

export const useHeader = () => {
  const refContainer = useRef(null)
  const [hayHeader, setHayHeader] = useState(false)
  useEffect(() => {
    if (refContainer.current.previousSibling) setHayHeader(true)
    else setHayHeader(false)
  }, [])
  return [refContainer, hayHeader]
}
