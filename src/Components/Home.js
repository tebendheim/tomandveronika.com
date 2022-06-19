import React from 'react';
import styles from './CSS/Home.module.css';
import logo from './Pictures/Logo_Ideer(white).png';
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			state: '',
		};
	}
	render() {
		return (
			<section className='section'>
				<div className={styles.wrapper}>
					<img
						href='/home'
						className={styles.logo}
						src={logo}
						alt='logo'
						id='logo'
					></img>
					<h1 className={styles.header}>tomadveronika.com</h1>
				</div>
			</section>
		);
	}
}

export default Home;
