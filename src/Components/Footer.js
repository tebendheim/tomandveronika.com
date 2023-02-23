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
			<ul className={style.menuObjects}>
				<li className={style.navElement}>
					<a onClick={falseClick} className={style.atag} href='https://www.facebook.com/Tom-Elbin-Bendheim-493293257858119'>
						<i class="fa fa-facebook-square" aria-hidden="true"></i>
					</a>
				</li>
				<li className={style.navElement}>
					<a onClick={falseClick} className={style.atag} href='/contact'>
						<i class="fa fa-envelope" aria-hidden="true"></i>
					</a>
				</li>
				<li className={style.navElement}>
					<a onClick={falseClick} className={style.atag} href='https://www.instagram.com/veronikalangmo'>
						<i class="fa fa-instagram" aria-hidden="true"></i>
					</a>
				</li>
			</ul>
			<div></div>
		</footer>
	);
};

export default Footer;
