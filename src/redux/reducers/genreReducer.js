import { actionTypes } from "../actionTypes";

const initialState = {
  genres: [],
  isLoading: false,
  isError: false,
};

const genreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_GENRES_LOADING:
      return { ...state, isLoading: true };

    case actionTypes.SET_GENRES_ERROR:
      return { ...state, isLoading: false, isError: payload };

    case actionTypes.SET_GENRES:
      return {
        ...state,
        isLoading: false,
        isError: false,
        genres: payload,
      };

    default:
      return state;
  }
};

export default genreReducer;
