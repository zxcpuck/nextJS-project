import React from 'react';
import {API_KEY} from "@/app/components/URL";
import Link from "next/link";
import '@/app/styles/movieDetailsPageStyle.css';


const MovieDetail = async ({ params }) => {
    const { id } =await params;

    // Отримання даних про фільм з API
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const movie = await res.json();

    // Переконайтеся, що фільм існує
    if (!movie || !movie.title) {
        return <div>Movie not found</div>;
    }

    return (
        <div className='movie-details-page'>
            <div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/movies">Movies</Link></li>
                </ul>
            </div>
            <h1>{movie.title}</h1>
            <h4>Release Year: {movie.release_date} <br/> Popularity: {movie.popularity}</h4>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <p>{movie.overview}</p>
        </div>


    );
};

export default MovieDetail;