import { createContext, useReducer, useState} from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'addProduct': {
      let productId = action.payload;
      if (!Object.keys(state).includes(productId)) {
        console.log(state)
        state[productId] = { id: productId, qty: 1 }
      }
      break
    }
    default: {
      return
    }
  }
  return state;
}

const CartProvider = ({children}) => {
  const [state] = useState({})
  const [cartItems, dispatch] = useReducer(cartReducer, state)
  const value = { cartItems, dispatch }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export { CartContext, CartProvider, cartReducer }