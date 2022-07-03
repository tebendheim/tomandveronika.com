import React from 'react';
import styles from '../Components/CSS/Home.module.css';
import logo from '../Components/Pictures/Logo_Ideer2.png';
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
				<div className={styles.wrapper}>
					<img
						href='/home'
						className={styles.logo}
						src={logo}
						alt='logo'
						id='logo'
					></img>
					<h1 className={`header ${styles.header}`}>tomandveronika.com</h1>
				</div>
			</section>
		);
	}
}

export default Home;
