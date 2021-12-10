import { useContext } from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { ProductContext } from '../../context/ProductContext'

const Menu = () => {
  const { menuItems } = useContext(ProductContext)
  
  return (
    <div className="panel">
      <h1>To Go Menu</h1>
      <ul className="menu">
      {Object.keys(menuItems).map((id) => {
        return (
          <MenuItem key={id} item={menuItems[id]}/>
        )
      })}
      </ul>
    </div>
  )
}

export default Menu
