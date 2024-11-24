import React from 'react';
import '@/app/styles/style.css';


const Header = () => {
    return (
            <header className="header">
                <div className='header-content'>
                    <a href={'/userInfo'}><img src="https://www.freeiconspng.com/uploads/blank-face-person-icon-7.png" alt="empty avatar" className='user-avatar'/></a>
                    <a href={'/userInfo'}>  zxcpuk</a>
                </div>
            </header>
    );
};

export default Header;