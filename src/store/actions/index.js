import {DECREMENT} from "../constants"

export const decrement = () => {
  return (dispatch) => {
    dispatch({
      type: DECREMENT
    })
  }
}
