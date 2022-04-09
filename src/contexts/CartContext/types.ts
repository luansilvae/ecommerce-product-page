import { ReactNode } from 'react'
import { SneakerType } from '../../data/sneaker'

export type CartProps = {
  children: ReactNode
}

export type CartContextData = {
  cart: SneakerType[]
  isCartEmpty: boolean
  totalProducts: number
  handleAddToCart: (productId: number) => void
  handleRemoveFromCart: (productId: number) => void
}
