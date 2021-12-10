import { createContext, useReducer, useState} from 'react'
import menuItems from '../data/menuItems';

const ProductContext = createContext()

const productActions = {
  ADD_TO_CART: 'addToCart',
  DECREASE_QTY: 'decreaseQty',
  INCREASE_QTY: 'increaseQty',
}

const productInCart = (state, id) => {
  return Object.keys(state).includes(id.toString())
}

const cartReducer = (state, action) => {
  const productId = action.payload;
  switch (action.type) {
    case productActions.ADD_TO_CART:
      if (!productInCart(state, productId)) {
        state[productId] = { id: productId, qty: 1 }
      }
      break
    case productActions.DECREASE_QTY:
      if (productInCart(state, productId)) {
        if(state[productId].qty === 1) {
          delete state[productId]
        } else {
          state[productId].qty--
        }
      }
      break
    case productActions.INCREASE_QTY:
      if (productInCart(state, productId)) {
        state[productId].qty++
      }
      break
    default:
      break
  }
  return state;
}

const ProductProvider = ({children}) => {
  const [state, setCartItems] = useState({})
  const [cartItems] = useReducer(cartReducer, state)
  
  const dispatchAction = (action) => {
    cartReducer(cartItems, action)
    setCartItems({cartItems})
  }

  const value = { cartItems, dispatchAction, menuItems, setCartItems }
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export { productActions, ProductContext, ProductProvider}
