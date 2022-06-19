import React, { useEffect } from 'react';
import logo from './Pictures/Logo_Ideer(white).png';
import style from './CSS/Navbar.module.css';

const Navbar = () => {
	return (
		<header className={style.navWrapper} id='home'>
			<div className={style.wrapLogo}>
				<img
					href='/home'
					className={style.logo}
					src={logo}
					alt='logo'
					id='logo'
				></img>
			</div>
			<ul className={style.menuObjects}>
				<li className={style.navElement}>
					<a className={style.atag} href='#home'>
						Home
					</a>
				</li>
				<li className={style.navElement}>
					<a className={style.atag} href='#about'>
						About
					</a>
				</li>
				<li className={style.navElement}>
					<a className={style.atag} href='#videos'>
						Videos
					</a>
				</li>
				<li className={`${style.navElement}`}>
					<button className={`${style.navContact}`}>
						<a className={`${style.atag} ${style.abutton}`} href='#contact'>
							Contact
						</a>
					</button>
				</li>
			</ul>

			<button
				className={style.toggleButton}
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria='navbarSupportedContent'
				aria-expanded='false'
				aria-label='toggle-navigation'
			>
				<i className='fas fa-bars'></i>
			</button>
		</header>
	);
};

export default Navbar;
