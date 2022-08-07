import React from 'react';
import Style from '../Components/CSS/Contact.module.css';
import ReCAPTCHA from 'react-google-recaptcha';

import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';

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
		const captchaToken = await this.reRef.current.executeAsync();
		this.reRef.current.reset();
		const { dispatch, history } = this.props;
		dispatch(login(this.state.email, this.state.password, captchaToken));
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
