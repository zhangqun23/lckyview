import { combineReducers } from "redux"
import { reducer as reduxFormReducer } from 'redux-form'

import orders from './orders'
import results from './results'

const reducers = combineReducers({
    orders,
    results,
    form: reduxFormReducer
})

export default reducers;