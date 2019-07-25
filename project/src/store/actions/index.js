import axios from "axios";

export const FETCH_EXCHANGE_START = "FETCH_EXCHANGE_START";
export const FETCH_EXCHANGE_SUCCESS = "FETCH_EXCHANGE_SUCCESS";
export const FETCH_EXCHANGE_FAILURE = "FETCH_EXCHANGE_FAILURE";

export const fetchExchange = () => dispatch => {
  dispatch({ type: FETCH_EXCHANGE_START });
  axios
    .get("https://api.coinlore.com/api/exchanges/")
    .then(res => {
      dispatch({
        type: FETCH_EXCHANGE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => console.log("Oh no! Not an error!", err.response));
};
