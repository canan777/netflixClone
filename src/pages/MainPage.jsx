import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPopular } from "../redux/actions/movieActions";
import Hero from "../components/Hero";
import store from "../redux/store";
import MovieList from "../components/MovieList";

const MainPage = () => {
const state = useSelector((store) => store.genre)
const dispatch = useDispatch();
  
    useEffect(()=> {
      dispatch(getPopular());

      dispatch(getGenres());
    },[]);
    

    return (
    <div>
        <Hero/>

        {state.isLoading ? (
          <div class="spinner-border text-primary" role="status"></div>
        ) : state.isError ? (
          <p>Üzgünüz bir hata oluştu {state.isError}</p>
          ) : (
      state.genres.map((genre) => (
      <MovieList key= {genre.id} genre={genre}/>
      ))
    )}
    </div>
    );
};
 

export default MainPage;
