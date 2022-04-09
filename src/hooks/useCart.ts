import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export const useCart = () => {
  const {
    cart,
    handleAddToCart,
    isCartEmpty,
    handleRemoveFromCart,
    totalProducts
  } = useContext(CartContext)

  return {
    cart,
    handleAddToCart,
    isCartEmpty,
    handleRemoveFromCart,
    totalProducts
  }
}
