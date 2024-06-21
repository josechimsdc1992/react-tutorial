import { URLFACT } from '../Constants.jsx'

export const getRandomFact = async () => {
  const res = await fetch(URLFACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
