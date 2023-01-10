import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/' className='hover:text-[#F94E43]'>Home</a></li>
                            <li><a href='/' className='hover:text-[#F94E43]'>Pricing</a></li>
                            <li><a href='/' className='hover:text-[#F94E43]'>About</a></li>
                            <li><a href='/' className='hover:text-[#F94E43]'>Contact</a></li>
                        </ul>
                    </div>
                    <a href='/' className="w-36">
                        <img src="https://i.ibb.co/4FzXB4P/logo.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/' className='hover:text-[#F94E43]'>Home</a></li>
                        <li><a href='/' className='hover:text-[#F94E43]'>Pricing</a></li>
                        <li><a href='/' className='hover:text-[#F94E43]'>About</a></li>
                        <li><a href='/' className='hover:text-[#F94E43]'>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/' className='ctn hover:bg-black'>Register Here</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;