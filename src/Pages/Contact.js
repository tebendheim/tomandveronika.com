import axios from 'axios';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Style from '../Components/CSS/Contact.module.css';
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
		const url = 'https://api.tomandveronika.com/api/sendinblue'; //*/

		//const url = 'http://localhost:49510/api/sendinblue'; //*/
		const params = {
			headers: {
				'content-type': 'application/JSON',
				'Access-Control-Allow-Origin': 'vercel.app',
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
			<section className={`section ${Style.sectionC}`} id='contact'>
				<h1 className={`header ${Style.headliner}`}>Contact us</h1>
				<form className={Style.form} onSubmit={this.handleSubmit}>
					<ReCAPTCHA
						sitekey={process.env.REACT_APP_REC_SITE_KEY}
						size='invisible'
						ref={this.reRef}
					/>
					{this.state.result === 'success' ? (
						<div>
							<p>
								{
									'Sign up sucsessfull. Go to loginpage to sign in.'
								}
							</p>
							<fieldset className={Style.fieldset}>
								<p>Add another form?</p>
								<button onClick={this.handleNewForm}>New Form</button>
							</fieldset>
						</div>
					) : this.state.result === 'error' ? (
						<div>
							<p>
								{'An error occured. Please refresh your browser and try again'}
							</p>
							<fieldset className={Style.fieldset}>
								<p>Add another form?</p>
								<button onClick={this.handleNewForm}>New Form</button>
							</fieldset>
						</div>
					) : (
						<div className='container'>
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
									Last name:
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
									Email:
									<input
										className={`${Style.input} ${Style.email}`}
										type='email'
										value={this.state.email}
										name='email'
										onChange={this.handleChange}
										ref={(ref) => (this.input = ref)}
									/>
								</label>
							</fieldset>
							<fieldset className={Style.fieldset}>
								<label className={Style.label}>
									Message:
									<textarea
										className={`${Style.input} ${Style.message}`}
										type='text'
										value={this.state.message}
										name='message'
										onChange={this.handleChange}
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
						</div>
					)}
				</form>
			</section>
		);
	}
}

export default Contact;
