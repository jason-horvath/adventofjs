import { useContext, useState } from 'react'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../context/CartContext'
import './Cart.css'

const Cart = () => {
  const { cartItems } = {...useContext(CartContext)}
  const [items] = useState(cartItems)
  return (
    <div className="panel cart">
      <h1>Your Cart</h1>
      <p className="empty">Your cart is empty.</p>

      <ul className="cart-summary">
        {Object.keys(items).map((item, key) => {
          return <CartItem key={key}/>
        })}
      </ul>

      <div className="totals">
        <div className="line-item">
          <div className="label">Subtotal:</div>
          <div className="amount price subtotal">$10.80</div>
        </div>
        <div className="line-item">
          <div className="label">Tax:</div>
          <div className="amount price tax">$1.05</div>
        </div>
        <div className="line-item total">
          <div className="label">Total:</div>
          <div className="amount price total">$11.85</div>
        </div>
      </div>
    </div>
  )
}

export default Cart