import React, {FC} from 'react';
import { IMovies } from '@/app/models/IMovies';
import MovieCard from "@/app/components/MovieCard";

interface MovieListProps {
    movies: IMovies[];
}

const MovieList:FC<MovieListProps> = ({ movies }) => {
    return (
        <div>
            <MovieCard movies={movies}/>
        </div>
    );
};

export default MovieList;