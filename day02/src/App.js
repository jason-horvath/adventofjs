import Cart from './components/Cart/Cart'
import Menu from './components/Menu/Menu'
import menuItems from './data/menuItems'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
  return (
    <div className="wrapper menu">
      <CartProvider>
        <Menu menuItems={menuItems} />
        <Cart/>
      </CartProvider>
    </div>
  )
}

export default App
