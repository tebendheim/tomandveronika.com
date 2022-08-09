import React from 'react';
import styles from '../Components/CSS/Home.module.css';
import logo from '../Components/Pictures/Logo_Ideer2.png';
import Tracker from '../services/tracker';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			state: '',
		};
	}
	render() {
		return (
			<section
				name='home'
				className={`section ${styles.section_home}`}
				id={'home'}
				aria-labelledby={'home'}
			>
				<Tracker />
				<div className={styles.wrapper}>
					<div className={styles.logoWrapper}>
						<img
							href='/home'
							className={styles.logo}
							src={logo}
							alt='logo'
							id='logo'
						></img>
					</div>
					<h1 className={`header ${styles.header}`}>tomandveronika.com</h1>
				</div>
			</section>
		);
	}
}

export default Home;
