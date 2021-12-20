import { createContext, useReducer, useState} from "react"

const BillContext = createContext()

const billActions = {
  UPDATE_TOTAL: 'updateTotal',
  UPDATE_TIP_PERCENT: 'updateTipPercent',
  UPDATE_PERSONS: 'updatePersons'
}

const billReducer = (state, action) => {
  switch(action.type) {
    case UPDATE_TOTAL:
      state.total = action.payload
      break
    case UPDATE_TIP_PERCENT:
      state.tipPercent = action.payload
      break
    case UPDATE_PERSONS:
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
  const [numOfPeople, setNumOfPeople] = useState(() => 1)
  const value = { billAmount, numOfPeople }
  return (
    <BillContext.Provider value={value}>{children}</BillContext.Provider>
  )
}

export { BillProvider, billReducer }