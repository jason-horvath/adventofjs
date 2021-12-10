import { useContext } from 'react'
import { productActions, ProductContext } from '../../context/ProductContext'
import priceString from '../../utility/priceString'
import './CartItem.css'

const CartItem = ({ item }) => {
  const { cartItems, dispatchAction } = useContext(ProductContext)
  const { id, name, price, image, alt } = {...item}

  const itemQty = (id) =>{
    return cartItems[id].qty
  }

  const itemSubtotal = (id) => {
    const qty = itemQty(id);
    return qty * price;
  }

  const decreaseQty = () => {
    dispatchAction({type: productActions.DECREASE_QTY, payload: id})
  }

  const increaseQty = () => {
    dispatchAction({type: productActions.INCREASE_QTY, payload: id})
  }

  return (
    <li>
      <div className="plate">
        <img src={`images/${image}`} alt={alt} className="plate" />
        <div className="quantity">{itemQty(id)}</div>
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">{priceString(price)}</p>
      </div>
      <div className="quantity__wrapper">
        <button className="decrease" onClick={(e) => decreaseQty(id)}>
          <img src="images/chevron.svg"  alt="Remove 1" />
        </button>
        <div className="quantity">{itemQty(id)}</div>
        <button className="increase" onClick={(e) => increaseQty(id)}>
          <img src="images/chevron.svg" alt="Add 1" />
        </button>
      </div>
      <div className="subtotal">
        {priceString(itemSubtotal(id))}
      </div>
    </li>
  )
}

export default CartItem
