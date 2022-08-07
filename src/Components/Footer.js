import React, { useState } from 'react';
import style from './CSS/Footer.module.css';
import { useSelector } from 'react-redux';

const Footer = () => {
	const state = useSelector((state) => state.auth);
	const [click, setClick] = useState(false);
	const handleClick = () => {
		setClick(!click);
	};

	const falseClick = () => {
		setClick(false);
	};
	return (
		<footer className={style.wrap}>
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
						Videos
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
