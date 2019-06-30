import {FETCH_ALL} from "../constants"

const initialState = {
  allShows: null,
  page: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        allShows: action.payload.filter((listing) => {
          return listing && listing.show && listing.show.image && listing.show.image.medium
        })
      }
    default:
      return state
  }
}
