import { useEffect, useState } from 'react'
import { URLPREFIX, URLIMAGE } from '../Constants'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageurl] = useState()

  useEffect(() => {
    if (!fact) return

    const threefirstWord = fact.split(' ').slice(0, 3).join(' ')
    setImageurl(`${URLPREFIX}${URLIMAGE}${threefirstWord}`)
  }, [fact])

  return { imageUrl }
}
