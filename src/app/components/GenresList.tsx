import React from 'react';
import {IGenres} from "@/app/models/IGenres";

interface GenresListProps {
    genres: IGenres[];
    filterByGenre: (genreId: number) => void;
}

const GenresList: React.FC<GenresListProps> = ({ genres, filterByGenre }) => {
    return (
        <div>
            <h1>Список жанрів:</h1>
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                {genres.map((genre) => (
                    <button key={genre.id} onClick={() => filterByGenre(genre.id)} className="genre-button">
                        {genre.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GenresList;