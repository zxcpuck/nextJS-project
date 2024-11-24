import React from 'react';
import Link from "next/link";
import '@/app/styles/style.css';

const UserDetails = () => {
    return (
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="movies">Movies</Link></li>
            </ul>
            <div className='user-container'>
                <img src="https://www.freeiconspng.com/uploads/blank-face-person-icon-7.png" alt="user image"/>
                <p className='user-info-txt'>name:Markiyan <br/> username: zxcpuk <br/> email:
                    qweasdzxc@gmail.com <br/> phone: 1-770-736-8031 x56442 <br/>website: hildegard.org</p>
            </div>
        </div>
    );
};

export default UserDetails;