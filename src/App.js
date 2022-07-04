import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Videos from './Pages/Videos';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
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
					<Route path='login' element={<Login />} />
					<Route path='blog' element={<NoPage />} />
					<Route path='editblog' element={<NoPage />} />
					<Route path='services' element={<NoPage />} />
					<Route path='signup' element={<Signup />} />
					<Route path='*' element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
