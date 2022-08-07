import React, { useState, useEffect, useCallback } from 'react';
import logo from './Pictures/Logo_Ideer(white).png';
import style from './CSS/Navbar.module.css';
import { useSelector } from 'react-redux';
import userService from '../services/user.service';
import { logout } from '../redux/actions/auth';
import { useDispatch } from 'react-redux';

const Navbar = () => {
	const state = useSelector((state) => state.auth);
	const [click, setClick] = useState(false);
	const [profile, setProfile] = useState(false);
	const handleClick = () => {
		setClick(!click);
	};
	const handleProfileClick = () => {
		setProfile(!profile);
	};
	const profileFalse = () => {
		setProfile(false);
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
	const dispatch = useDispatch();
	const handleLogout = (event) => {
		event.preventDefault();
		console.log('er inne');
		dispatch(logout());
	};

	return (
		<header
			className={click ? style.navWrapperActive : style.navWrapper}
			id='home'
		>
			<div className={style.wrapLogo}>
				<a href='/'>
					<img className={style.logo} src={logo} alt='logo' id='logo'></img>
				</a>
			</div>
			{state.isLoggedIn ? (
				<div className={style.profileWrapper}>
					<button
						className={style.toggleProfile}
						onClick={handleProfileClick}
						type='button'
						aria-label='toggle-navigation'
					>
						{profile ? (
							<i className='fas fa-times'></i>
						) : (
							<i className='fas fa-bars'></i>
						)}
					</button>
					{profile && (
						<ul className={style.profileObjects}>
							<li className={style.navElementProfile}>
								<a onClick={falseClick} className={style.atagProfile} href='/'>
									Home
								</a>
							</li>
							<li className={style.navElementProfile}>
								<a
									onClick={falseClick}
									className={style.atagProfile}
									href='/about'
								>
									About
								</a>
							</li>
							<li className={style.navElementProfile}>
								<a
									onClick={falseClick}
									className={style.atagProfile}
									href='/videos'
								>
									Videos
								</a>
							</li>
							<li className={style.navElementProfile}>
								<a
									onClick={falseClick}
									className={style.atagProfile}
									href='/contact'
								>
									Contact
								</a>
							</li>
							{userService.checkAdmin() && (
								<li className={style.navElementProfile}>
									<a
										onClick={falseClick}
										className={style.atagProfile}
										href='/adminBoard'
									>
										Admin Board
									</a>
								</li>
							)}
							<li className={style.navElementProfile}>
								<button
									className={style.atagProfile}
									onClick={handleLogout}
									type='button'
								>
									Log out
								</button>
							</li>
						</ul>
					)}
				</div>
			) : (
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
					<li className={style.navElement}>
						<a onClick={falseClick} className={style.atag} href='/contact'>
							Contact
						</a>
					</li>
				</ul>
			)}
			{!state.isLoggedIn && (
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
			)}
		</header>
	);
};

export default Navbar;

/*	
//hvordan jeg kan lage siste i listen som en button med andre CSS verdier

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

		*/
