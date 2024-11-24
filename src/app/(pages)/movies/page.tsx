"use client"
import React, { useEffect, useState } from "react";
import '@/app/styles/style.css';

import MoviePagination from "@/app/components/Pagination";
import Loading from "@/app/components/Loading";
import {IGenres} from "@/app/models/IGenres";
import {IMovies} from "@/app/models/IMovies";
import GenresList from "@/app/components/GenresList";
import MovieList from "@/app/components/MovieList";
import {API_GENRES, API_KEY, API_URL} from "@/app/components/URL";
import HeaderForMoviesPage from "@/app/components/HeaderForMoviesPage";

const Page = () => {
    const [movies, setMovies] = useState<IMovies[]>([]);
    const [genres, setGenres] = useState<IGenres[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchGenres();
        fetchMovies(currentPage);
    }, [currentPage]);

    const fetchMovies = (page: number) => {
        fetch(API_URL(page))
            .then((res) => res.json())
            .then(data => {
                setMovies(data.results);
            });
    };

    const fetchGenres = () => {
        fetch(API_GENRES)
            .then((res) => res.json())
            .then((data) => setGenres(data.genres));
    };

    const filterByGenre = (genreId: number) => {
        setCurrentPage(1); // Скидаємо на першу сторінку
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
                setCurrentPage(1);
            });
    };

    if (genres.length === 0 || movies.length === 0) {
        return <Loading/>;
    }
    return (
        <div>
            <HeaderForMoviesPage/>
            <GenresList genres={genres} filterByGenre={filterByGenre}/>
            <MovieList movies={movies}/>
            <MoviePagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>

    );
};

export default Page;