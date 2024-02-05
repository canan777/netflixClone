import { combineReducers, createStore, applyMiddleware } from "redux";
import movieReducer from "./reducers/movieReducers";
import { thunk } from "redux-thunk";
import genreReducer from "./reducers/genreReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
