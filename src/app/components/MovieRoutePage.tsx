import React from 'react';
import { Link } from 'react-router-dom';
import {IMovies} from "@/app/models/IMovies";

const MovieRoutePage: React.FC<{ movie: IMovies }> = ({ movie }) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`}>
                <h3>{movie.title}</h3>
            </Link>
        </div>
    );
};

export default MovieRoutePage;