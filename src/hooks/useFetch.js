import { useEffect, useState } from 'react'

// un customHook para hacer fetchin de data
export function useFetchData (url, body) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await window.fetch(url)
        const response = await res.json()
        setData(response)
        setLoading(false)
      } catch (error) {
        console.log('Ocurrio un error: ', error)
      }
    }
    getData()
  }, [])
  return [data, loading]
}
