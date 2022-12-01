import {createStore, combineReducers, compose, applyMiddleware  } from "redux"
import thunk from "redux-thunk"
import AuthReducer from "./Redux/Reducer/AuthReducer"

const middleware = applyMiddleware(thunk)
const composeEnahancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
 AuthReducer:AuthReducer
})

const store = createStore(reducers,composeEnahancers(middleware))

export default store