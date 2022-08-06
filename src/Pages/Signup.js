import React, { useState, useEffect } from 'react';
import Style from '../Components/CSS/Contact.module.css';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { connect } from 'react-redux';
require('dotenv').config();

const inState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPass: '',
	result: '',
	resultMess: '',
};

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.reRef = React.createRef(null);
		this.state = {
			...inState,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNewForm = this.handleNewForm.bind(this);
	}
	handleNewForm(event) {
		event.preventDefault();
		this.setState({
			...inState,
		});
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	//mangler en handlesubmit.
	async handleSubmit(event) {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
		});
		if (!this.state.password === this.state.confirmPass) {
			this.setState({
				result: 'matchError',
			});
			return;
		}
		const captchaToken = await this.reRef.current.executeAsync();
		this.reRef.current.reset();
		const params = {
			headers: {
				'content-type': 'application/JSON',
				'Access-Control-Allow-Origin': '*',
			},
			data: {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				password: this.state.password,
				confirmationPass: this.state.confirmPass,
				token: captchaToken,
			},
		};
		const testurl = 'http://localhost:8888/api/register';
		const url = 'https://api.tomandveronika.com/api/register';
		return await axios
			.post(url, params)
			.then((res) => {
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
			})
			.catch((err) => {
				console.log(err.status);
				console.log(err.response);
				this.setState({
					result: 'error',
					resultMess: err.response.data,
				});
			});
	}
	render() {
		return (
			<section className={`section ${Style.sectionC}`} id='contact'>
				<h1 className={`header ${Style.headliner}`}>
					Sign up 
				</h1>
				{this.state.result === 'success' ? (
					<div>
						<p>
							{
								'If email exists, an email with a resetlink will be sendt to you shortly.'
							}
						</p>
						<fieldset className={Style.fieldset}>
							<p>Add another form?</p>
							<button onClick={(event) => (window.location.href = '/login')}>
								Login
							</button>
						</fieldset>
					</div>
				) : this.state.result === 'error' ? (
					<div>
						<p>An error occured. Please refresh your browser and try again</p>
						<fieldset className={Style.fieldset}>
							<p>Add another form?</p>
							<button onClick={this.handleNewForm}>Try again</button>
						</fieldset>
					</div>
				) : (
					<form className={Style.form} onSubmit={this.handleSubmit}>
						<ReCAPTCHA
							sitekey={process.env.REACT_APP_REC_SITE_KEY}
							size='invisible'
							ref={this.reRef}
						/>
						<fieldset className={`${Style.fieldset} ${Style.fieldsetone}`}>
							<label className={Style.label}>
								First Name:
								<input
									className={`${Style.input} ${Style.firstName}`}
									type='text'
									value={this.state.firstName}
									name='firstName'
									onChange={this.handleChange}
									ref={(ref) => (this.input = ref)}
								/>
							</label>
							<label className={Style.label}>
								Last Name:
								<input
									className={`${Style.input} ${Style.lastName}`}
									type='text'
									value={this.state.lastName}
									name='lastName'
									onChange={this.handleChange}
									ref={(ref) => (this.input = ref)}
								/>
							</label>
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
							<label className={Style.label}>
								Confirm password:
								<input
									className={`${Style.input} ${Style.password}`}
									type='password'
									value={this.state.confirmPass}
									name='confirmPass'
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
									value='Sign up'
								/>
							</label>
						</fieldset>
					</form>
				)}
			</section>
		);
	}
}
function mapStateToProps(state) {
	const { user } = state.auth;
	return {
		user,
	};
}
//måten jeg nå kan ha tilgang til redux state er ved dette: {[this.props.user.Roles]}.
//hadde jeg i mapstatetoprops funsksjonen skrecet return state, så hadde det blitt hetende det.
export default connect(mapStateToProps)(Signup);
