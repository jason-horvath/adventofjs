import { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import { ProductContext } from '../../context/ProductContext'
import priceString from '../../utility/priceString'
import './Cart.css'

const Cart = () => {
  const { cartItems, menuItems } = useContext(ProductContext) 
  
  const getSubtotal = () => {
    let subtotal = 0;
    Object.keys(cartItems).map(item => {
      let itemPrice = menuItems[item].price * cartItems[item].qty
      return subtotal += itemPrice
    })

    return subtotal;
  }

  const getSalesTax = () => {
    return getSubtotal() * 0.0975
  }

  const getTotal = () => {
    return getSubtotal() + getSalesTax()
  }

  return (
    <div className="panel cart">
      <h1>Your Cart</h1>
      {Object.keys(cartItems).length > 0 ? '' : <p className="empty">Your cart is empty.</p> }

      <ul className="cart-summary">
        {Object.keys(cartItems).map((item) => {
          return <CartItem key={item} item={menuItems[item]}/>
        })}
      </ul>

      <div className="totals">
        <div className="line-item">
          <div className="label">Subtotal:</div>
          <div className="amount price subtotal">{priceString(getSubtotal())}</div>
        </div>
        <div className="line-item">
          <div className="label">Tax:</div>
          <div className="amount price tax">{priceString(getSalesTax())}</div>
        </div>
        <div className="line-item total">
          <div className="label">Total:</div>
          <div className="amount price total">{priceString(getTotal())}</div>
        </div>
      </div>
    </div>
  )
}

export default Cart