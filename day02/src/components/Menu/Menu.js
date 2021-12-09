import MenuItem from '../MenuItem/MenuItem'
import './Menu.css'

const Menu = (props) => {
  const { menuItems } = {...props}
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