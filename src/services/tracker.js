import React, { useEffect } from 'react';
import axios from 'axios';

const Tracker = (/*{ site }*/) => {
	useEffect(() => {
		const unloadCallback = async (event) => {
			event.preventDefault();
			const ip = await axios.get('https://json.geoiplookup.io/');
			const URL = 'http://localhost:8888/api/ip';
			const params = {
				data: ip,
			};

			axios.post(URL, params);
		};
		window.addEventListener('beforeunload', unloadCallback);
		return () => window.removeEventListener('beforeunload', unloadCallback);
	}, []);
	return;
};

export default Tracker;

/*
 */
