import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './CartContext.jsx'
import { AuthProvider } from './AuthContext.jsx'
import { ProductProvider } from './Productcontext.jsx'

createRoot(document.getElementById('root')).render(
<AuthProvider>
  <ProductProvider>  
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </ProductProvider>
</AuthProvider>
)
