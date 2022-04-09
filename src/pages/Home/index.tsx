import React, { useEffect, useMemo, useState } from 'react'
import Gallery from '../../components/Gallery'

import {
  Main,
  ProductInfo,
  Price,
  ActualPrice,
  OldPrice,
  CartActions,
  CartControls,
  Button
} from './style'

import { sneaker, SneakerType } from '../../data/sneaker'
import { useCart } from '../../hooks/useCart'
import { useProducts } from '../../hooks/useProducts'
import { CartIcon, MinusIcon, PlusIcon } from '../../components/Icons'
import { formattedCurrency } from '../../utils/formattedCurrency'

export const Home: React.FC = () => {
  const { handleAddToCart, cart, handleRemoveFromCart } = useCart()
  const { sneakers } = useProducts()

  const selectedProduct = useMemo(
    () => sneakers.find(item => item.id === sneaker.id),
    [sneakers]
  )

  const [product, setProduct] = useState<SneakerType>(() => {
    return selectedProduct as SneakerType
  })

  useEffect(() => {
    const productInCart = cart.find(item => item.id === product.id)

    if (productInCart) {
      setProduct(productInCart)
    } else {
      setProduct(selectedProduct as SneakerType)
    }
  }, [cart, product.id, selectedProduct])

  return (
    <Main>
      <Gallery />
      <ProductInfo>
        <h1>{product.brand}</h1>
        <h2>{product.name}</h2>
        <p>{product.description}</p>

        <Price>
          <ActualPrice>
            <strong> {formattedCurrency(product.price.actualPrice)}</strong>
            <span>{product.price.discount}%</span>
          </ActualPrice>

          <OldPrice>{formattedCurrency(product.price.oldPrice)}</OldPrice>
        </Price>

        <CartActions>
          <CartControls>
            <button
              type="button"
              disabled={product.amount === 0}
              onClick={() => handleRemoveFromCart(product.id)}
            >
              <MinusIcon aria-label="Remove product from cart" />
            </button>
            <span>{product.amount}</span>
            <button type="button" onClick={() => handleAddToCart(product.id)}>
              <PlusIcon aria-label="Add product to cart" />
            </button>
          </CartControls>
          <Button
            type="button"
            onClick={() => handleAddToCart(product.id)}
            disabled={product.amount > 0}
          >
            <CartIcon /> Add to cart
          </Button>
        </CartActions>
      </ProductInfo>
    </Main>
  )
}
