import React, { useState } from 'react'
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
import { sneaker, SneakerProps } from '../../data/sneaker'

export const Home: React.FC = () => {
  const [product] = useState<SneakerProps>(sneaker)

  return (
    <Main>
      <Gallery />
      <ProductInfo>
        <h1>{product.brand}</h1>
        <h2>{product.name}</h2>
        <p>{product.description}</p>

        <Price>
          <ActualPrice>
            <strong>${product.price.actual_price}.00</strong>
            <span>{product.price.discount}%</span>
          </ActualPrice>

          <OldPrice>${product.price.old_price}.00</OldPrice>
        </Price>

        <CartActions>
          <CartControls>
            <button>
              <img src="images/icon-minus.svg" alt="Remove product from cart" />
            </button>
            <span>4</span>
            <button>
              <img src="images/icon-plus.svg" alt="Add product from cart" />
            </button>
          </CartControls>
          <Button>Add to cart</Button>
        </CartActions>
      </ProductInfo>
    </Main>
  )
}
