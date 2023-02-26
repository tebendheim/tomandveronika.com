import React, { useState, useEffect, useCallback, useContext } from 'react';
import logo from './Pictures/Logo_Ideer(white).png';
import style from './CSS/Navbar.module.css';
import { useSelector } from 'react-redux';
import userService from '../services/user.service';
import { logout } from '../redux/actions/auth';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import {LangContext} from './LangProvider'


const Navbar = () => {
	const state = useSelector((state) => state.auth);
	const {erNorsk} = useContext(LangContext)
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
		dispatch(logout());
	};

	return (
		<header
			className={click ? style.navWrapperActive : style.navWrapper}
			id='home'
		>
			<div className={style.wrapLogo}>
				<Link to='/'>
					<img className={style.logo} src={logo} alt='logo' id='logo'></img>
				</Link>
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
								<Link onClick={falseClick} className={style.atagProfile} to='/'>
									{erNorsk ? "Hjem":"Home"}
								
								</Link>
							</li>
							<li className={style.navElementProfile}>
								<Link
									onClick={falseClick}
									className={style.atagProfile}
									to='/about'
								>
									{erNorsk ? "Om Oss":"About"}
								</Link>
							</li>
							<li className={style.navElementProfile}>
								<Link
									onClick={falseClick}
									className={style.atagProfile}
									to='/videos'
								>
									{erNorsk ? "Videoer":"Videos"}
								</Link>
							</li>
							<li className={style.navElementProfile}>
								<Link
									onClick={falseClick}
									className={style.atagProfile}
									to='/contact'
								>
									{erNorsk ? "Kontakt":"Contact"}
								</Link>
							</li>
							{userService.checkAdmin() && (
								<li className={style.navElementProfile}>
									<Link
										onClick={falseClick}
										className={style.atagProfile}
										to='/adminBoard'
									>
										Admin Board
									</Link>
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
						<Link onClick={falseClick} className={style.atag} to='/'>
						{erNorsk ? "Hjem":"Home"}
						</Link>
					</li>
					<li className={style.navElement}>
						<Link onClick={falseClick} className={style.atag} to='/about'>
						{erNorsk ? "Om Oss":"About"}
						</Link>
					</li>
					<li className={style.navElement}>
						<Link onClick={falseClick} className={style.atag} to='/videos'>
						{erNorsk ? "Videoer":"Videos"}
						</Link>
					</li>
					<li className={style.navElement}>
						<Link onClick={falseClick} className={style.atag} to='/contact'>
						{erNorsk ? "Kontakt":"Contact"}
						</Link>
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
