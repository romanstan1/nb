import {
  FETCH_ALL,
  ERROR_FETCHING_ALL,
  FETCH_SHOW,
  ERROR_FETCHING_SHOW,
  LOAD_MORE,
  SELECT_SHOW
} from "../constants"

const URL = "http://api.tvmaze.com"

function formatDate() {
  const date = new Date()
  let month = `${date.getMonth() + 1}`
  let day = `${date.getDate()}`
  const year = date.getFullYear()
  if (month.length < 2) month = `0${month}`
  if (day.length < 2) day = `0${day}`
  return [year, month, day].join("-")
}

async function fetchTvData(url) {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => {
      return {error}
    })
}

export const fetchTodaysShows = () => {
  return async(dispatch) => {
    const date = formatDate()
    const data = await fetchTvData(`${URL}/schedule?country=US&date=${date}`)
    if (data.error) {
      return dispatch({
        type: ERROR_FETCHING_ALL,
        payload: data.error
      })
    }
    return dispatch({
      type: FETCH_ALL,
      payload: data
    })
  }
}

export const loadMore = () => {
  return (dispatch) => dispatch({
    type: LOAD_MORE
  })
}

export const selectShow = (showData) => {
  return (dispatch) => dispatch({
    type: SELECT_SHOW,
    payload: showData
  })
}

export const fetchASingleShow = (id) => {
  return async(dispatch) => {
    const data = await fetchTvData(`${URL}/shows/${id}?embed=cast`)
    console.log("data:", data)

    if (data.error) {
      return dispatch({
        type: ERROR_FETCHING_SHOW,
        payload: data.error
      })
    }
    return dispatch({
      type: FETCH_SHOW,
      payload: data
    })
  }
}
