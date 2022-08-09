import React, { useState, useRef, useEffect } from 'react';
import Style from '../Components/CSS/Contact.module.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { Route, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/auth';
import auth from '../redux/reducers/auth';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const authState = useSelector((state) => state.auth);
	const handleChange = (event) => {
		event.preventDefault();
		setState({ ...state, [event.target.name]: event.target.value });
	};
	const dispatchLogin = (captchaToken) =>
		new Promise((resolve, reject) => {
			// do anything here
			dispatch(login(state.email, state.password, captchaToken));
			resolve();
		});

	const handleLogin = async (event) => {
		event.preventDefault();
		setState({
			...state,
			[event.target.name]: event.target.value,
			loading: true,
		});
		const captchaToken = await reRef.current.executeAsync();
		reRef.current.reset();
		dispatchLogin(captchaToken).then(() => {
			console.log(authState.isLoggedIn);
			if (authState.isLoggedIn) {
				navigate('/profile', { replace: true });
			}
			//	setState({ ...state, update: null });
		});
	};
	const reRef = useRef(null);
	const [state, setState] = useState({
		email: '',
		password: '',
		loading: false,
		update: null,
	});

	useEffect(() => {
		if (authState.isLoggedIn) {
			navigate('/profile', { replace: true });
		}
	}, [authState]); // Dette fører til at funksjonen føres ved endring i state.
	
	useEffect(() => {
		if (authState.isLoggedIn) {
			navigate('/profile', { replace: true });
		}
	}, []);

	return (
		<section className={`section ${Style.sectionC}`} id='contact'>
			<h1 className={`header ${Style.headliner}`}>Log in</h1>
			<form className={Style.form} onSubmit={handleLogin}>
				<ReCAPTCHA
					sitekey={process.env.REACT_APP_REC_SITE_KEY}
					size='invisible'
					ref={reRef}
				/>
				<fieldset className={`${Style.fieldset} ${Style.fieldsetone}`}>
					<label className={Style.label}>
						E-mail:
						<input
							className={`${Style.input} ${Style.email}`}
							type='email'
							value={state.email}
							name='email'
							onChange={handleChange}
						/>
					</label>
					<label className={Style.label}>
						Password:
						<input
							className={`${Style.input} ${Style.password}`}
							type='password'
							value={state.password}
							name='password'
							onChange={handleChange}
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
};

export default Login;

/*
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
	componentDidMount(event) {
		if (this.props.isLoggedIn) {
			console.log('is logged in');
			this.props.history.push('/profile');
		}
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
		return <Navigate to='/profile' replace />;
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

export default withRouter(connect(mapStateToProps)(Login));


*/
