import React, { useState } from 'react'

import {
  Container,
  CartHeader,
  CartContent,
  EmptyCart,
  CartList
} from './styles'

import { sneaker, SneakerProps } from '../../data/sneaker'
import { Button } from '../../pages/Home/style'

const Cart: React.FC<{ isCartOpen: boolean }> = ({ isCartOpen }) => {
  const [product] = useState<SneakerProps>(sneaker)

  return (
    <Container isCartOpen={isCartOpen}>
      <CartHeader>
        <h3>Cart</h3>
      </CartHeader>

      {/* <EmptyCart>Your cart is empty.</EmptyCart> */}

      <CartContent>
        <CartList>
          <li>
            <img src={product.images[1]} alt={product.name} />

            <div className="productInfo">
              <h4>
                {product.name} dawdq wdqwd qw dqw qw qw qw qwqw qwd qwd qw d
              </h4>
              <span>
                {product.price.actual_price} x 3 <strong>$375.00</strong>
              </span>
            </div>

            <button type="button">
              <img src="images/icon-delete.svg" alt="Remove item from cart" />
            </button>
          </li>
        </CartList>

        <Button>Checkout</Button>
      </CartContent>
    </Container>
  )
}

export default Cart
