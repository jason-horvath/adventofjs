import { createContext, useReducer, useState} from 'react'
import priceFloat from '../utility/pricePriceFloat'

const BillContext = createContext()

const billActions = {
  UPDATE_TOTAL: 'updateTotal',
  UPDATE_TIP_PERCENT: 'updateTipPercent',
  UPDATE_PERSONS: 'updatePersons'
}

const billReducer = (state, action) => {
  switch(action.type) {
    case billActions.UPDATE_TOTAL:
      state.total = priceFloat(action.payload)
      break
    case billActions.UPDATE_TIP_PERCENT:
      state.tipPercent = priceFloat(action.payload)
      break
    case billActions.UPDATE_PERSONS:
      state.numPersons = parseInt(action.payload)
      break
    default:
      break
  }
  return Object.assign({}, state)
}

const BillProvider = ({ children }) => {
  const [billState] = useState(() => {
     return {
      total: 0.00,
      tipPercent: 0.00,
      numPersons: 0
    }
  })

  const [bill, dispatch] = useReducer(billReducer, billState)
  
  const getTipAmount = () => {
    const billWithTip = (bill.total * 100) * bill.tipPercent
    return billWithTip / 100
  }

  const getTotalPerPerson = () => {
    const billTotal = bill.total * 100
      if(billTotal > 0) { 
        const tipAmount = billTotal * bill.tipPercent
        const billPlusTip = billTotal + tipAmount
        return (billPlusTip / 100) / bill.numPersons
      }
      return 0
  }

  const value = { bill, dispatch, getTipAmount, getTotalPerPerson }
  return (
    <BillContext.Provider value={value}>{children}</BillContext.Provider>
  )
}

export { billActions, BillContext, BillProvider, billReducer }