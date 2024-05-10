import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
      const { data } = await MoviesService.getMovieById(id);
      setMovie(data);
    }
  
    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <>
        <h1>{movie.title}</h1>

        <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path}></img>

        <article>
            <label>Description: {movie.overview}</label> <br/><br/>
            <label>Votos: {movie.vote_average}</label> 
        </article>
        </>
        
    )
}