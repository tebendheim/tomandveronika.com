import axios from 'axios';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Style from './CSS/Contact.module.css';
require('dotenv').config();

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.reRef = React.createRef(null);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
			result: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleNewForm = this.handleNewForm.bind(this);
	}
	handleNewForm(event) {
		this.setState({
			result: '',
		});
	}

	async handleSubmit(event) {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
		});
		const captchaToken = await this.reRef.current.executeAsync();
		this.reRef.current.reset();
		const url = 'http://localhost:5001/api/sendgrid';
		const params = {
			headers: {
				'content-type': 'application/JSON',
			},
			data: {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				message: this.state.message,
				token: captchaToken,
			},
		};

		return await axios
			.post(url, params)
			.then((res) => {
				console.log(res.status);
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
	handleChange(event) {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	render() {
		return (
			<section className='section' id='contact'>
				<h1 className='header'>Contact us</h1>
				<form onSubmit={this.handleSubmit}>
					<ReCAPTCHA
						sitekey={process.env.REACT_APP_REC_SITE_KEY}
						size='invisible'
						ref={this.reRef}
					/>
					{this.state.result === 'success' ? (
						<div>
							<p>
								{
									'Contact form is sendt. You wil get a confirmation email on youre given email'
								}
							</p>
							<fieldset>
								<p>Add another form?</p>
								<button onClick={this.handleNewForm}>New Form</button>
							</fieldset>
						</div>
					) : this.state.result === 'error' ? (
						<div>
							<p>
								{'An error occured. please refresh youre browser and try again'}
							</p>
							<fieldset>
								<p>Add another form?</p>
								<button onClick={this.handleNewForm}>New Form</button>
							</fieldset>
						</div>
					) : (
						<div className='container'>
							<fieldset>
								<label>
									First Name
									<input
										type='text'
										value={this.state.firstName}
										name='firstName'
										onChange={this.handleChange}
										ref={(ref) => (this.input = ref)}
									/>
								</label>
								<label>
									Last name
									<input
										type='text'
										value={this.state.lastName}
										name='lastName'
										onChange={this.handleChange}
										ref={(ref) => (this.input = ref)}
									/>
								</label>
								<label>
									Email
									<input
										type='email'
										value={this.state.email}
										name='email'
										onChange={this.handleChange}
										ref={(ref) => (this.input = ref)}
									/>
								</label>
							</fieldset>
							<fieldset>
								<label>
									<textarea
										type='text'
										value={this.state.message}
										name='message'
										onChange={this.handleChange}
									/>
								</label>
							</fieldset>
							<fieldset>
								<label>
									<input type='submit' value='submit' />
								</label>
							</fieldset>
						</div>
					)}
				</form>
			</section>
		);
	}
}

export default Contact;
