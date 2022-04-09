import React, { createContext, useCallback, useMemo, useState } from 'react'
import { SneakerType } from '../../data/sneaker'
import { useProducts } from '../../hooks/useProducts'
import { CartContextData, CartProps } from './types'

export const CartContext = createContext({} as CartContextData)

export const CartProvider: React.FC<CartProps> = ({ children }) => {
  const { sneakers } = useProducts()

  const [cart, setCart] = useState<any[]>(() => {
    const storageValue = localStorage.getItem('cart')

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return [] as SneakerType[]
    }
  })

  const handleAddToCart = useCallback(
    (productId: number) => {
      const productAdded = sneakers.find(item => item.id === productId)

      setCart((prev: SneakerType[]) => {
        const isProductInCart = prev.find(item => item.id === productId)

        if (isProductInCart) {
          const additionalProduct = prev.map(item =>
            item.id === productId ? { ...item, amount: item.amount + 1 } : item
          )

          localStorage.setItem('cart', JSON.stringify(additionalProduct))
          return additionalProduct
        } else {
          const newProductAdded = [...prev, { ...productAdded, amount: 1 }]

          localStorage.setItem('cart', JSON.stringify(newProductAdded))
          return newProductAdded
        }
      })
    },
    [sneakers]
  )

  const handleRemoveFromCart = useCallback((productId: number) => {
    setCart((prev: SneakerType[]) => {
      const cartRemovedProduct = prev.reduce((acc, product) => {
        if (product.id === productId) {
          if (product.amount === 1) return acc
          return [...acc, { ...product, amount: product.amount - 1 }]
        } else {
          return [...acc, product]
        }
      }, [] as SneakerType[])

      localStorage.setItem('cart', JSON.stringify(cartRemovedProduct))
      return cartRemovedProduct
    })
  }, [])

  const isCartEmpty = useMemo(() => cart.length === 0, [cart.length])

  const totalProducts: number = useMemo(
    () =>
      cart.reduce(
        (acc: number, product: SneakerType) => acc + product.amount,
        0
      ),
    [cart]
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        isCartEmpty,
        handleRemoveFromCart,
        totalProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
