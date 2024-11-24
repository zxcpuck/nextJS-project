import React, {FC} from 'react';
import Link from "next/link";
import {IMovies} from "@/app/models/IMovies";
import {API_IMG} from "@/app/components/URL";
import '@/app/styles/style.css';



interface MovieListProps {
    movies: IMovies[];
}
const MovieCard:FC<MovieListProps> = ({ movies }) => {
    return (
        <div className="movie-container">
            {movies.map((movie) => (
                <div key={movie.id} className='movie-div-style'>
                    <Link href={`/movies/${movie.id}`}>
                        <img src={API_IMG + movie.poster_path} alt={movie.title} className='movie-img-style' />
                        <p className="movie-title">{movie.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MovieCard;