import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	SET_MESSAGE,
} from './types';
import AuthService from '../../services/auth.service';
import store from '../store';

export const register = (username, email, password) => (dispatch) => {
	return AuthService.register(username, email, password).then(
		(response) => {
			dispatch({
				type: REGISTER_SUCCESS,
			});
			dispatch({
				type: SET_MESSAGE,
				payload: response.data.message,
			});
			return Promise.resolve();
		},
		(error) => {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			dispatch({
				type: REGISTER_FAIL,
			});
			dispatch({
				type: SET_MESSAGE,
				payload: message,
			});
			return Promise.reject();
		}
	);
};
export const login = (email, password, captchaToken) => (dispatch) => {
	const items = store.getState().auth;
	if (!items.isLoggedIn) {
		AuthService.login(email, password, captchaToken)
			.then((res) => {
				dispatch({
					type: LOGIN_SUCCESS,
					payload: { user: res },
				});
				const message = 'Login success';
				dispatch({
					type: SET_MESSAGE,
					payload: message,
				});

				return Promise.resolve();
			})
			.catch((err) => {
				const message =
					(err.response && err.response.data && err.response.data.message) ||
					err.message ||
					err.toString();
				dispatch({
					type: LOGIN_FAIL,
				});
				dispatch({
					type: SET_MESSAGE,
					payload: message,
				});

				return Promise.reject();
			});
	} else {
		return;
	}
};

export const logout = () => (dispatch) => {
	AuthService.logout();
	dispatch({
		type: LOGOUT,
	});
};

/*
export const register = (username, email, password) => (dispatch) => {};
export const login = () => (dispatch) => {
	if (true) {
		const data = 'test';
		dispatch({
			type: LOGIN_SUCCESS,
			payload: { user: data },
		});
	} else {
		const message = data;
		dispatch({
			type: LOGIN_FAIL,
		});
		dispatch({
			type: SET_MESSAGE,
			payload: message,
		});
	}
};
export const logout = () => (dispatch) => {};

*/
