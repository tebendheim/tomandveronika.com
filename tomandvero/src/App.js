import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Videos from './Components/Videos';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Navbar />
			</header>
			<main>
				<About id={'about'} />
				<Videos id={'videos'} />
				<Contact id={'contact'} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
