import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import style from '../Components/CSS/About.module.css';

const About = () => {
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

	return (
		<section
			className={`section ${style.about}`}
			id={'about'}
			aria-labelledby={'about'}
		>
			<h1 className={`header ${style.header}`}>About us</h1>
			<div className={style.aboutText}>
				<ReactMarkdown>{post}</ReactMarkdown>
			</div>
		</section>
	);
};

export default About;
