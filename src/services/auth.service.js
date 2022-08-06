import axios from 'axios';
const API_URL = 'https://api.tomandveronika.com/api/login';
const testURL = 'http://localhost:8888/api/login';
class AuthService {
	async login(email, password, captchaToken) {
		const params = {
			headers: {
				'content-type': 'application/JSON',
				'Access-Control-Allow-Origin': '*',
			},
			data: {
				email: email,
				password: password,
				token: captchaToken,
			},
		};
		return await axios.post(API_URL, params).then((response) => {
			if (response.data.accessToken) {
				localStorage.setItem('user', JSON.stringify(response.data));
			}

			console.log(localStorage);
			return response.data;
		});
	}
	logout() {
		localStorage.removeItem('user');
	}
	register(firstName, lastName, email, password, confirmationPass, token) {
		return axios
			.post(API_URL + 'register', {
				firstName,
				lastName,
				email,
				password,
				confirmationPass,
				token,
			})
			.then((res) => {
				if (res.data.accessToken) {
					localStorage.setItem('user', JSON.stringify(res.data));
				}
				return res.data;
			});
	}
}
export default new AuthService();
