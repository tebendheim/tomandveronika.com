import React, { useState, useEffect, useCallback } from 'react';
import logo from './Pictures/Logo_Ideer(white).png';
import style from './CSS/Navbar.module.css';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => {
		setClick(!click);
	};

	const falseClick = () => {
		setClick(false);
	};

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
		<header
			className={click ? style.navWrapperActive : style.navWrapper}
			id='home'
		>
			<div className={click ? style.wrapLogo : style.wrapLogo}>
				<a href='/'>
					<img className={style.logo} src={logo} alt='logo' id='logo'></img>
				</a>
			</div>
			<ul className={click ? style.menuObjectsActive : style.menuObjects}>
				<li className={style.navElement}>
					<a onClick={falseClick} className={style.atag} href='/'>
						Home
					</a>
				</li>
				<li className={style.navElement}>
					<a onClick={falseClick} className={style.atag} href='/about'>
						About
					</a>
				</li>
				<li className={style.navElement}>
					<a onClick={falseClick} className={style.atag} href='/videos'>
						Videos
					</a>
				</li>
				<li className={`${style.navElement}`}>
					<button
						onClick={falseClick}
						className={`${style.navContact}`}
						href='/contact'
					>
						<a
							onClick={falseClick}
							className={`${style.atag} ${style.abutton}`}
							href='/contact'
						>
							Contact
						</a>
					</button>
				</li>
			</ul>
			<div className={style.buttonWrapper}>
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
			</div>
		</header>
	);
};

export default Navbar;
