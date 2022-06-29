import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Videos from './Pages/Videos';
import { NoPage } from './Pages/NoPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='contact' element={<Contact />} />
					<Route path='Videos' element={<Videos />} />
					<Route path='*' element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
