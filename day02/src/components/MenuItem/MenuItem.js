import { useContext } from 'react'
import priceString from '../../utility/priceString'
import { productActions, ProductContext } from '../../context/ProductContext'
import './MenuItem.css'

const MenuItem = ({item}) => {
  
  const { cartItems, dispatchAction } = useContext(ProductContext)
  const { id, name, price, image, alt } = {...item}

  const productInCart = (id) => {
    return Object.keys(cartItems).includes(id.toString())
    
  }

  const addToCart = (id) => {
    dispatchAction({ type: productActions.ADD_TO_CART, payload: id})
  }
  
  return (
    <li>
      <div className="plate">
        <img src={`images/${image}`} alt={alt} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">{priceString(price)}</p>
        {productInCart(id) ?
          <button className="in-cart">
            <img src="images/check.svg" alt="Check" />
            In Cart
          </button>
        :
          <button className="add" onClick={(e) => addToCart(id)}>Add to Cart</button>
        }

      </div>
    </li>
  )
}

export default MenuItem
