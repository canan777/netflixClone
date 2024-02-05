import { options } from "../../constant";
import axios from "axios";
import { actionTypes } from "./../actionTypes";


axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getPopular = () => (dispatch) => {

dispatch({
    type: actionTypes.SET_MOVIES_LOADING,
});

  axios
  .get("/movie/popular?language=tr", options)

  .then((res) =>
    dispatch({
      type: actionTypes.SET_MOVIES,
      payload: res.data.results,
    })
  )
  //olumsuz olursa reducer'a hatayı aktar
  .catch((err) => {
     dispatch({
        type: actionTypes.SET_MOVIES_ERROR,
        payload:err.message,
     });
  });
};

export const getGenres = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_GENRES_LOADING});

  axios.get('/genre/movie/list?language=tr',options)
  .then((res) => {
    dispatch({
      type: actionTypes.SET_GENRES,
      payload: res.data.genres,
    });
  })
  .catch (err => dispatch({
    type:actionTypes.SET_GENRES_ERROR,
    payload: err.message,
  })
  );
};
