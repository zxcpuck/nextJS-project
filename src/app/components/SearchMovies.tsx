"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {IMovies} from "@/app/models/IMovies";
import {API_IMG} from "@/app/components/URL";
import MovieCard from "@/app/components/MovieCard";

interface FormData {
    query: string;
}

const SearchMovies = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [movies, setMovies] = useState<IMovies[]>([]);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: FormData) => {
        if (!data.query.trim()) return;

        setLoading(true);
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=400eeb38275ce610c985a6cb3f3134c9&query=${encodeURIComponent(data.query)}`
            );
            const result = await response.json();
            setMovies(result.results || []);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('query', { required: 'Please enter a movie name' })}
                    placeholder="Search for a movie..."
                />
                {errors.query && <p>{errors.query.message}</p>}

                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}

            <div>
                {/*{movies.length > 0 ? (*/}
                {/*    movies.map((movie) => (*/}
                {/*        <div key={movie.id}>*/}
                {/*            <h3>{movie.title} - {movie.release_date}</h3>*/}
                {/*            <img src={API_IMG + movie.poster_path} alt={movie.title}/>*/}
                {/*        </div>*/}
                {/*    ))*/}
                {/*) : (*/}
                {/*    !loading && <p>No movies found.</p>*/}
                {/*)}*/}
                <MovieCard movies={movies}/>

            </div>
        </div>
    );
};

export default SearchMovies;
