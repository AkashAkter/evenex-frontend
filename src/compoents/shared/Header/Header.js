import React from 'react';
import './Header.css';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
	return (

		<div>
			<div className="navbar bg-base-100 border mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm text-[#F94E43]'>Home</a></li>
							<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>Pricing</a></li>
							<li tabIndex={0}>
								<a href='/' className='hover:text-[#F94E43] font-semibold text-sm justify-between' >
									Pages
									<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
								</a>
								<ul className="p-2 bg-white">
									<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>Page 1</a></li>
									<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>Page 2</a></li>
								</ul>
							</li>

							<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>About</a></li>
							<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>Contact</a></li>
						</ul>
					</div>
					<a href='/' className='hover:text-[#F94E43] font-semibold text-sm w-32'>
						<img src="https://i.ibb.co/4FzXB4P/logo.png" alt="" />
					</a>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm text-[#F94E43]'>Home</a></li>
						<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>Pricing</a></li>
						<li tabIndex={0}>
							<a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>
								Page
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
							</a>
							<ul className="p-2 bg-white">
								<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>Page 1</a></li>
								<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>Page 2</a></li>
							</ul>
						</li>
						<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>About</a></li>
						<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>Contact</a></li>
						<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>Contact</a></li>
						<li><a href='/' className='hover:text-[#F94E43] font-semibold text-sm'>
							<BsSearch />
						</a></li>
						<li><a href='/' className='btn-grad text-sm font-semibold px-6'>Book Tickets</a></li>
					</ul>
				</div>

			</div>
		</div>

	);
};

export default Header;