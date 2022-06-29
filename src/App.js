import React from 'react';
import reactDOM from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Videos from './Components/Videos';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
	return (
		<div className='App'>
			<main>
				<Navbar />
				<Home id={'home'} />
				<About id={'about'} />
				<Videos id={'videos'} />
				<Contact id={'contact'} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
