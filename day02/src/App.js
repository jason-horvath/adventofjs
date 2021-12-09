import Cart from './components/Cart/Cart'
import Menu from './components/Menu/Menu'
import menuItems from './data/menuItems'
import './App.css'

function App() {
  return (
    <div className="wrapper menu">
      <Menu menuItems={menuItems} />
      <Cart/>
    </div>
  )
}

export default App
