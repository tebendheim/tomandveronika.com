import React from 'react';
import logo from './Pictures/Logo_Ideer.png';

const Navbar = () => {
	return (
		<div id='home'>
			<img src={logo} alt='logo' id='logo'></img>
			<h1>Tom & Veronika</h1>

			<ul>
				<li className='navElement'>
					<a href='#home'>Home</a>
				</li>
				<li className='navElement'>
					<a href='#about'>About</a>
				</li>
				<li className='navElement'>
					<a href='#videos'>Videos</a>
				</li>
				<li className='navElement'>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
