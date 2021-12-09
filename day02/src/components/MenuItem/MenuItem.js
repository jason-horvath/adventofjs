import priceString from '../../utility/priceString'
import './MenuItem.css'

const MenuItem = ({item}) => {
  const { name, price, image, alt } = {...item}

  return (
    <li>
      <div className="plate">
        <img src={`images/${image}`} alt={alt} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">{priceString(price)}</p>
        <button className="in-cart">
          <img src="images/check.svg" alt="Check" />
          In Cart
        </button>
        <button class="add">Add to Cart</button>
      </div>
    </li>
  )
}

export default MenuItem