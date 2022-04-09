import { render } from 'react-dom'
import App from './App'
import { CartProvider } from './contexts/CartContext'

render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
)
