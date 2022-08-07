import axios from 'axios';
import React from 'react';
import authHeader from './auth-headers';
import store from '../redux/store';
const API_URL = 'http://localhost:8080/api/test/';
class UserService extends React.Component {
	constructor(props) {
		super(props);
	}
	getPublicContent() {
		return axios.get(API_URL + 'all');
	}
	getUserBoard() {
		return axios.get(API_URL + 'user', { headers: authHeader() });
	}
	getModeratorBoard() {
		return axios.get(API_URL + 'mod', { headers: authHeader() });
	}
	getAdminBoard() {
		return axios.get(API_URL + 'admin', { headers: authHeader() });
	}
	checkAdmin() {
		const props = store.getState();
		const Roles = props.auth.user.Roles;
		if (Roles.includes('ROLE_admin')) {
			return true;
		}
		return false;
	}
	checkModerator() {
		const props = store.getState();
		const Roles = props.auth.user.Roles;
		if (Roles.includes('ROLE_moderator')) {
			return true;
		}
		return false;
	}
	checkUser() {
		const props = store.getState();
		const Roles = props.auth.user.Roles;
		if (Roles.includes('ROLE_user')) {
			return true;
		}
		return false;
	}
}

export default new UserService();
