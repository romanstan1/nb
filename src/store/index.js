import {createStore, applyMiddleware, compose} from "redux"
import {connectRouter, routerMiddleware} from "connected-react-router"
import thunk from "redux-thunk"
import createHistory from "history/createBrowserHistory"
import rootReducer from "./reducers"

export const history = createHistory()

const logger = (store) => (next) => (action) => {
  const result = next(action)
  console.log("action.type:: ", action.type)
  console.log("store:: ", store.getState())
  return result
}

const initialState = {}
const enhancers = []
const middleware = [thunk, logger, routerMiddleware(history)]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)
