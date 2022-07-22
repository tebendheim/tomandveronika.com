import React, { useState, useEffect } from 'react';
import Style from '../Components/CSS/Contact.module.css';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
require('dotenv').config();

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.reRef = React.createRef(null);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPass: '',
			result: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
				'content-type': 'text/plain',
				'Access-Control-Allow-Origin': 'vercel.app',
			},
			data: {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				password: this.state.password,
				confirmPass: this.state.confirmPass,
				token: captchaToken,
			},
		};
		const url =
			'https://main--creative-daffodil-4335b5.netlify.app/api/register';
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
				console.log(err);
				this.setState({
					result: 'error',
				});
			});
	}
	render() {
		return (
			<section className={`section ${Style.sectionC}`} id='contact'>
				<h1 className={`header ${Style.headliner}`}>Sign up</h1>
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
			</section>
		);
	}
}

export default Signup;
