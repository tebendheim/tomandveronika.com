import React, { useState, useEffect, useCallback } from 'react';
import logo from './Pictures/Logo_Ideer(white).png';
import style from './CSS/Navbar.module.css';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const handleClick = () => {
		setClick(!click);
	};
	/*   //Trenger senere?
	const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		setDropdown(true);
	};
	const onMouseLeave = () => {
		setDropdown(false);
	};

	const onMouseClick = () => {
		if (window.innerWidth < 960) {
			setDropdown(!dropdown);
		}
	}; */

	const [height, setHeight] = useState(window.innerWidth);
	const [width, setWidth] = useState(window.innerHeight);
	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
	}, []);

	useEffect(() => {
		updateDimensions();
	}, [window.innerWidth]);

	const updateDimensions = useCallback(() => {
		setHeight(window.innerHeight);
		setClick(false);
		setWidth(window.innerWidth);
	});

	/*
	useEffect(() => {
		function updateSize() {
			setClick(false);
		}
		window.addEventListener = ('resize', updateSize);
		return (_) => {
			window.removeEventListener('resize', updateSize);
		};
	});*/

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
			<ul className={click ? style.menuObjectsActive : style.menuObjects}>
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
				onClick={handleClick}
				type='button'
				aria-label='toggle-navigation'
			>
				{click ? (
					<i className='fas fa-times'></i>
				) : (
					<i className='fas fa-bars'></i>
				)}
			</button>
		</header>
	);
};

export default Navbar;
