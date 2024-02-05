import axios from "axios";
import { useEffect, useState } from "react";
import { baseImgURL, options } from "../constant";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
    const [movies,setMovies] = useState(null);
   
   
    
useEffect(()=>{
    axios
    .get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`, 
    options
    )
    .then((res)=> setMovies(res.data.results));
},[]);
console.log(movies);
  return (
    <div className='p-4'>
      <h1 className="mb-3">{genre.name}</h1>

<Splide 
  options = {{
    gap: "10px",
    autoWidth: true,
    pagination: false,
}}
>
{movies?.map((movie) =>(
    <SplideSlide>
        <Link to = {`/detay/${movie.id}`}>
        <img 
       className="movie" 
       src={baseImgURL + movie.poster_path}
       />
        </Link> 
    </SplideSlide>
))}
</Splide>
</div>
  );
};

export default MovieList;
