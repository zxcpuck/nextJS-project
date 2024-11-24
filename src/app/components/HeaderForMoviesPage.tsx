import React from 'react';
import Link from "next/link";
import '@/app/styles/style.css';


const HeaderForMoviesPage = () => {
    return (
        <div className='movies-header-container'>
            <ul className='movies-header-list'>
                <li><Link href="/">Home</Link></li>
                <header>
                    <div className='header-movies-content'>
                        <a href={'/userInfo'}><img src="https://www.freeiconspng.com/uploads/blank-face-person-icon-7.png"
                             alt="empty avatar" className='user-movies-avatar'/></a>
                        <a href={'/userInfo'}>zxcpuk</a>
                    </div>
                </header>
            </ul>
        </div>
    );
};

export default HeaderForMoviesPage;