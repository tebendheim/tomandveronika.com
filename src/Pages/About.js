import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import style from '../Components/CSS/About.module.css';
import { useSelector } from 'react-redux';
import Tracker from '../services/tracker';

const About = () => {
	//const state = useSelector((state) => state.auth); //dette finner redux state //{[state.user.Roles]} kaller på den.
	const file_name = 'aboutText.md';
	const [post, setPost] = useState('');
	useEffect(() => {
		import(`../Components/markdown/${file_name}`)
			.then((res) => {
				fetch(res.default)
					.then((res) => res.text())
					.then((res) => setPost(res))
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	});
	/*
	useEffect(() => {
		const unloadCallback = (event) => {
			event.preventDefault();
			const URL = 'http://localhost:8888/api/ip';

			axios.get(URL);
		};
		window.addEventListener('beforeunload', unloadCallback);
		return () => window.removeEventListener('beforeunload', unloadCallback);
	}, []);*/

	return (
		<section
			className={`section ${style.about}`}
			id={'about'}
			aria-labelledby={'about'}
		>
			<Tracker />
			<h1 className={`header ${style.header}`}>About us </h1>
			<div className={style.aboutText}>
				<ReactMarkdown>{post}</ReactMarkdown>
			</div>
		</section>
	);
};

export default About;
