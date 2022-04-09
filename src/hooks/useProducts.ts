import { sneaker, SneakerProps } from '../data/sneaker'

export const useProducts = () => {
  const sneakers: SneakerProps[] = []
  sneakers.push(sneaker)

  return { sneakers }
}
