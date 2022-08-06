import React, { useState, useEffect } from 'react';
import Style from '../Components/CSS/Contact.module.css';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import AuthService from '../services/auth.service';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import { connect } from 'react-redux';
import { login, logout } from '../redux/actions/auth';

const required = (value) => {
	if (!value) {
		return (
			<div className='alert alert-danger' role='alert'>
				This field is required!
			</div>
		);
	}
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.reRef = React.createRef(null);
		this.state = {
			email: '',
			password: '',
			result: '',
			loading: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	async handleLogin(event) {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
			loading: true,
		});

		if (!this.state.password === this.state.confirmPass) {
			this.setState({
				result: 'matchError',
			});
			return;
		}
		const captchaToken = await this.reRef.current.executeAsync();
		this.reRef.current.reset();

		//Herfra og videre er hentet fra nett
		//this.form.validateAll();
		const { dispatch, history } = this.props;
		//if (this.checkBtn.context._errors.length === 0) {
		/*const data = await AuthService.login(
			this.state.email,
			this.state.password,
			captchaToken
		);*/
		dispatch(login(this.state.email, this.state.password, captchaToken));
		/*
			.then(() => {
				history.push('/');
				window.location.reload();
			})
			.catch(() => {
				this.setState({
					loading: false,
				});
			});*/
		//} else {
		//	this.setState({
		//		loading: false,
		//	});

		/*
		const params = {
			headers: {
				'content-type': 'application/JSON',
				'Access-Control-Allow-Origin': '*',
			},
			data: {
				email: this.state.email,
				password: this.state.password,
				token: captchaToken,
			},
		};
		const testurl = 'http://localhost:8888/api/login';
		const url = 'https://api.tomandveronika.com/api/login';
		return await axios
			.post(url, params)
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					this.setState({
						result: 'success',
					});
					return res.status;
				} else {
					this.setState({
						result: 'error',
					});
					return res.status;
				}
				console.log();
			})
			.catch((err) => {
				console.log(err.status);
				console.log(err.response);
				this.setState({
					result: 'error',
					resultMess: err.response.data,
				});
			});
			*/
	}

	render() {
		return (
			<section className={`section ${Style.sectionC}`} id='contact'>
				<h1 className={`header ${Style.headliner}`}>Log in</h1>
				<form className={Style.form} onSubmit={this.handleLogin}>
					<ReCAPTCHA
						sitekey={process.env.REACT_APP_REC_SITE_KEY}
						size='invisible'
						ref={this.reRef}
					/>
					<fieldset className={`${Style.fieldset} ${Style.fieldsetone}`}>
						<label className={Style.label}>
							E-mail:
							<input
								className={`${Style.input} ${Style.email}`}
								type='email'
								value={this.state.email}
								name='email'
								onChange={this.handleChange}
								ref={(ref) => (this.input = ref)}
							/>
						</label>
						<label className={Style.label}>
							Password:
							<input
								className={`${Style.input} ${Style.password}`}
								type='password'
								value={this.state.password}
								name='password'
								onChange={this.handleChange}
								ref={(ref) => (this.input = ref)}
							/>
						</label>
					</fieldset>
					<fieldset className={`${Style.fieldset} ${Style.submitfield}`}>
						<label className={`${Style.label} ${Style.submitLabel}`}>
							<input
								className={`${Style.input} ${Style.submit}`}
								type='submit'
								value='Submit'
							/>
						</label>
					</fieldset>
				</form>
			</section>
		);
	}
}
function mapStateToProps(state) {
	const { isLoggedIn } = state.auth;
	const { message } = state.message;
	return {
		isLoggedIn,
		message,
	};
}

export default connect(mapStateToProps)(Login);
