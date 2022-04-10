import { render } from 'react-dom'
import App from './App'
import { CartProvider } from './contexts/CartContext'
import { ModalProvider } from './contexts/ModalContext'

render(
  <CartProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </CartProvider>,
  document.getElementById('root')
)
