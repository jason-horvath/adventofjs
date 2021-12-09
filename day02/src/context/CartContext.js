import { createContext, dispatch, useReducer} from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'addProduct': {

    }
    case 'removeProduct': {

    }

  }
}

const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, {})
  const value = {state, dispatch}

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export { CartProvider }