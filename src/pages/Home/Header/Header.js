import React from 'react';
import './Header.css';
import { AiFillPlusCircle } from 'react-icons/ai';

const Header = () => {
    return (

        <header>
            <div className='header-content'>
                <h3># Events for Startups</h3>
                <h1>Startup Grind Global Conference</h1>
                <ul>
                    <li>
                        - 14th FEB 2023
                    </li>
                    <li>
                        - NEW YORK CITY
                    </li>
                </ul>
                <div>
                    <button className='purches-button'>Purches Tickets</button>
                    <button className='button'> <AiFillPlusCircle className='mr-2' /> Add to Calender</button>
                </div>
            </div>
            <div className='header-img'>
                <img className='object-cover' src="https://demo.xpeedstudio.com/evenex/wp-content/uploads/2020/01/home-1-banner-mike.png" alt="" />
            </div>
        </header>

    );
};

export default Header;