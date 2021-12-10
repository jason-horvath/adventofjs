import { useContext, useEffect } from 'react'
import priceString from '../../utility/priceString'
import { CartContext } from '../../context/CartContext'
import './MenuItem.css'

const MenuItem = ({item}) => {
  const { cartItems, dispatch } = {...useContext(CartContext)}
  const { id, name, price, image, alt } = {...item}

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])
  const productInCart = (id) => {
    return Object.keys(cartItems).includes(id)
  }
  const test = () => {
    dispatch({ type: 'addProduct', payload: id})
    console.log(cartItems)
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
          <button className="add" onClick={(e) => test()}>Add to Cart</button>
        }

      </div>
    </li>
  )
}

export default MenuItem