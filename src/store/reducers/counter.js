import {DECREMENT} from "../constants"

const initialState = {
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state
      }
    default:
      return state
  }
}
