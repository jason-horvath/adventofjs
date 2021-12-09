import './CartItem.css'

const CartItem = () => {
  return (
    <li>
      <div className="plate">
        <img src="images/plate__fish-sticks-fries.png" alt="Fish Sticks and Fries" className="plate" />
        <div className="quantity">1</div>
      </div>
      <div className="content">
        <p className="menu-item">Fish Sticks and Fries</p>
        <p className="price">$6.34</p>
      </div>
      <div className="quantity__wrapper">
        <button className="decrease">
          <img src="images/chevron.svg" alt="Remove 1" />
        </button>
        <div className="quantity">1</div>
        <button className="increase">
          <img src="images/chevron.svg" alt="Add 1" />
        </button>
      </div>
      <div className="subtotal">
        $6.34
      </div>
    </li>
  )
}

export default CartItem