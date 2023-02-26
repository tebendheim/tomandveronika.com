import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Kontakt from './Pages/Kontakt'
import Videos from './Pages/Videos';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Forgotpassword from './Pages/Forgotpassword';
import Reset from './Pages/Reset';
import AdminBoard from './Pages/Protected/AdminBoard';
import Profile from './Pages/Protected/Profile';
import {
	ProtectedAdmin,
	ProtectedModerator,
	ProtectedUser,
	Protected,
} from './services/Protected';
import { NoPage } from './Pages/NoPage';
import { history } from './helpers/history';
import { Provider } from 'react-redux';

import store from './redux/store';
//import LangProvider from './Components/LangProvider';
import {LangContext} from './Components/LangProvider'



function App() {
	const {erNorsk} = useContext(LangContext)


	//const [language, togglelang] = useContext(LangContext)

	//useEffect(() => {console.log(language)})

	return (
		
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='contact' element={erNorsk ? <Kontakt /> : <Contact />} />
					<Route path='Videos' element={<Videos />} />
					<Route path='login' element={<Login />} />
					<Route path='blog' element={<NoPage />} />
					<Route path='editblog' element={<NoPage />} />
					<Route path='services' element={<NoPage />} />

					<Route
						path='signup'
						element={
							<ProtectedAdmin>
								<Signup />
							</ProtectedAdmin>
						}
					/>

					<Route path='*' element={<NoPage />} />
					<Route path='forgotpassword'>
						<Route index element={<Forgotpassword />} />
						<Route path='reset/:token' element={<Reset />} />
					</Route>
					<Route
						path='/adminboard'
						element={
							<ProtectedAdmin>
								<AdminBoard />
							</ProtectedAdmin>
						}
					/>
					<Route
						path='/profile'
						element={
							<Protected>
								<Profile />
							</Protected>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

