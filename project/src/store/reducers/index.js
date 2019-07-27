import {
  FETCH_EXCHANGE_START,
  FETCH_EXCHANGE_SUCCESS,
  FETCH_EXCHANGE_FAILURE
} from "../actions/index";

export const initialState = {
  error: "",
  isFetching: false,
  exchange: [{}]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXCHANGE_START:
      return {
        ...state,
        error: "",
        isFetching: true,
        exchange: []
      };
    case FETCH_EXCHANGE_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        exchange: action.payload
      };
    // case FETCH_EXCHANGE_FAILURE:
    //   return {
    //     ...state,
    //     error: "",
    //     isFetching: true,
    //     exchange: {}
    //   };
    default:
      return state;
  }
};
