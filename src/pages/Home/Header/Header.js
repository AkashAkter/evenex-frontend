import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='header-content'>
                <h2>PREPARE YOURSELF FOR THE</h2>
                <div className='line'></div>
                <h1>CONFERENCE</h1>
                <h4>14th FEB 2023 - NEW YORK CITY</h4>
                <button className=''> <a href="/" className='ctn'>BOOK NOW</a></button>
            </div>
        </header>
    );
};

export default Header;