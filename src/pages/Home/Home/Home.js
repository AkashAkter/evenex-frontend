import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';

const Home = () => {
	return (
		<>
			<div className='header'>
				<Navbar />
				<Header />
			</div>
			<div></div>
		</>
	);
};

export default Home;