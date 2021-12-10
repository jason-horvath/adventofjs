import Cart from './components/Cart/Cart'
import Menu from './components/Menu/Menu'
import menuItems from './data/menuItems'
import { ProductProvider } from './context/ProductContext'
import './App.css'

function App() {
  return (
    <div className="wrapper menu">
      <ProductProvider>
        <Menu menuItems={menuItems} />
        <Cart/>
      </ProductProvider>
    </div>
  )
}

export default App
