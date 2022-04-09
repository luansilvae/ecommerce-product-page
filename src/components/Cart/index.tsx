import React from 'react'

import {
  Container,
  CartHeader,
  CartContent,
  EmptyCart,
  CartList
} from './styles'

import { Button } from '../../pages/Home/style'
import { useCart } from '../../hooks/useCart'

const Cart: React.FC<{ isCartOpen: boolean }> = ({ isCartOpen }) => {
  const { cart, isCartEmpty, handleRemoveFromCart } = useCart()

  return (
    <Container isCartOpen={isCartOpen}>
      <CartHeader>
        <h3>Cart</h3>
      </CartHeader>

      {isCartEmpty ? (
        <EmptyCart>Your cart is empty.</EmptyCart>
      ) : (
        <CartContent>
          <CartList>
            {cart.map((product, index) => (
              <li key={index}>
                <img src={product.images[0]} alt={product.name} />

                <div className="productInfo">
                  <h4>{product.name}</h4>
                  <span>
                    {product.price.actualPrice} x {product.amount}{' '}
                    <strong>
                      ${product.price.actualPrice * product.amount}
                    </strong>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  <img
                    src="images/icon-delete.svg"
                    alt="Remove item from cart"
                  />
                </button>
              </li>
            ))}
          </CartList>

          <Button>Checkout</Button>
        </CartContent>
      )}
    </Container>
  )
}

export default Cart
