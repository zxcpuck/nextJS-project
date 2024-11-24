import React from 'react';
import Link from 'next/link';
import SearchMovies from "@/app/components/SearchMovies";
import Header from "@/app/components/Header";
import '@/app/styles/style.css';



const MenuComponent = () => {
    return (
        <div>
            <Header/>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="movies">Movies</Link></li>
            </ul>
            <SearchMovies/>
        </div>
    );
};

export default MenuComponent;