import {createStore, applyMiddleware, compose} from "redux"
import {connectRouter, routerMiddleware} from "connected-react-router"
import thunk from "redux-thunk"
import createHistory from "history/createBrowserHistory"
import rootReducer from "./reducers"

export const history = createHistory()

const logger = (store) => (next) => (action) => {
  const result = next(action)
  console.log("%c Type: ", "background: #222; color: #fff", action.type)
  console.log("%c Store: ", "background: #222; color: #bada55", store.getState().data)
  console.log(" ")
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
