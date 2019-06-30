import {
  FETCH_ALL,
  LOAD_MORE,
  SELECT_SHOW,
  FETCH_SHOW
} from "../constants"

const initialState = {
  allShows: null,
  page: 1,
  selectedShow: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        allShows: action.payload
          .filter((listing) =>
            listing &&
            listing.show &&
            listing.show.image &&
            listing.show.image.medium &&
            listing.show.name
          ).map((listing) => ({
            ...listing,
            show: {
              ...listing.show,
              rating: Math.floor(Math.random() * 6)
              // This^ generates a fake show rating as it's missing from the tvmaze data
            }
          }))
      }
    case LOAD_MORE:
      return {
        ...state,
        page: state.page + 1
      }
    case SELECT_SHOW: case FETCH_SHOW:
      return {
        ...state,
        selectedShow: action.payload
      }
    // @TODO handle api errors
    default:
      return state
  }
}
