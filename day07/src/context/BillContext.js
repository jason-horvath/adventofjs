import { createContext, useReducer, useState} from 'react'

const BillContext = createContext()

const billActions = {
  UPDATE_TOTAL: 'updateTotal',
  UPDATE_TIP_PERCENT: 'updateTipPercent',
  UPDATE_PERSONS: 'updatePersons'
}

const billReducer = (state, action) => {
  switch(action.type) {
    case billActions.UPDATE_TOTAL:
      state.total = action.payload
      break
    case billActions.UPDATE_TIP_PERCENT:
      state.tipPercent = action.payload
      break
    case billActions.UPDATE_PERSONS:
      state.numPersions = action.payload
      break
    default:
      break
  }
  return state
}

const BillProvider = ({ children }) => {
  const [bill, setBill] = useState(() => {
     return {
      total: 0,
      tipPercent: 0,
      numPersons: 0
    }
  })
  const [billState, dispatch] = useReducer(billReducer, bill)
  const value = { bill, billState, dispatch }
  return (
    <BillContext.Provider value={value}>{children}</BillContext.Provider>
  )
}

export { BillContext, BillProvider, billReducer }