"use client"
import React, { FC } from "react";

interface MoviePaginationProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const MoviePagination: FC<MoviePaginationProps> = ({ currentPage, setCurrentPage }) => {
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevious = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };

    return (
        <div className='pagination-component'>
            <button onClick={handlePrevious} disabled={currentPage === 1}>
                Попередня
            </button>
            <span>Сторінка {currentPage}</span>
            <button onClick={handleNext}>
                Наступна
            </button>
        </div>
    );
};

export default MoviePagination;