// src/app/movies/[id]/page.tsx
import React from 'react';
import {API_IMG, API_KEY} from "@/app/components/URL";

const MovieDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const movie = await res.json();

    if (!movie) {
        return <div>Movie not found</div>;
    }

    console.log(movie)

    return (
        <div>
            <h1>{movie.title}</h1>
            <h2>Release Year: {movie.release_date}</h2>
            <img src={API_IMG + movie.poster_path} alt={movie.title} />
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieDetailsPage;