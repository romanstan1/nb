import {
  FETCH_ALL,
  ERROR_FETCHING_ALL
} from "../constants"

function formatDate() {
  const date = new Date()
  let month = `${date.getMonth() + 1}`
  let day = `${date.getDate()}`
  const year = date.getFullYear()
  if (month.length < 2) month = `0${month}`
  if (day.length < 2) day = `0${day}`
  return [year, month, day].join("-")
}

async function getTodaysShows() {
  const date = formatDate()
  return fetch(`http://api.tvmaze.com/schedule?country=GB&date=${date}`)
    .then((res) => res.json())
    .catch((error) => {
      return {error}
    })
}

export function fetchTodaysShows() {
  return async(dispatch) => {
    const data = await getTodaysShows()
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
