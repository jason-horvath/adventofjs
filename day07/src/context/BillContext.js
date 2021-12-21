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
      console.log(action.payload)
      state.total = parseFloat(action.payload).toFixed(2)
      break
    case billActions.UPDATE_TIP_PERCENT:
      console.log('tip')
      state.tipPercent = parseFloat(action.payload).toFixed(2)
      break
    case billActions.UPDATE_PERSONS:
      console.log('persons')
      state.numPersons = parseInt(action.payload)
      break
    default:
      break
  }
  return state
}

const BillProvider = ({ children }) => {
  const [billState] = useState(() => {
     return {
      total: 0,
      tipPercent: 0,
      numPersons: 0
    }
  })
  const [bill, dispatch] = useReducer(billReducer, billState)
  const value = { bill, dispatch }
  return (
    <BillContext.Provider value={value}>{children}</BillContext.Provider>
  )
}

export { billActions, BillContext, BillProvider, billReducer }