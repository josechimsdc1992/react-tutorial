import { useCatImage } from '../Hooks/useCatImage.js'
import { useCatFact } from '../Hooks/useCatFact.js'

export function ImageCat () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <>
      <button type='submit' onClick={handleClick}>Get new Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${imageUrl}`} alt='image of cats says a fact' />}
    </>
  )
}
