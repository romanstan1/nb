import {FETCH_ALL, LOAD_MORE} from "../constants"

const initialState = {
  allShows: null,
  page: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        allShows: action.payload
          .filter((listing) =>
            listing && listing.show && listing.show.image && listing.show.image.medium
          ).map((listing) => ({
            ...listing,
            show: {
              ...listing.show,
              rating: Math.floor(Math.random() * 6) // This generates a fake show rating as it's missing from the data
            }
          }))
      }
    case LOAD_MORE:
      return {
        ...state,
        page: state.page + 1
      }
    default:
      return state
  }
}
