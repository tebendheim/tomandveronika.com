import React, { useState, useEffect } from 'react';
import Style from '../Components/CSS/Contact.module.css';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			result: '',
		};

		this.handleChange = this.handleChange.bind(this);
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
				<form>
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
								type='text'
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
