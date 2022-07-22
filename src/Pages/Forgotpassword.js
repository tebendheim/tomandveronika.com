import React, { useState, useEffect, useRef } from 'react';
import Style from '../Components/CSS/Contact.module.css';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
require('dotenv').config();

function Forgotpassword(props) {
	const [state, setState] = useState({
		email: '',
		result: '',
	});
	const reRef = useRef(null);

	const handleChange = (event) => {
		event.preventDefault();
		setState({ ...state, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setState({ ...state, [event.target.name]: event.target.value });
		const captchaToken = await reRef.current.executeAsync();
		reRef.current.reset();
		const url = 'https://api.tomandveronika.com/api/forgotpassword';
		const testurl = '/api/forgotpassword';
		const params = {
			headers: {
				'content-type': 'application/JSON',
				'Access-Control-Allow-Origin': '*',
			},
			data: {
				email: state.email,
				token: captchaToken,
			},
		};
		try {
			const res = await axios.post(url, params);
			console.log(res.status);
			console.log(res.data);
			console.log(res);
			if (res.status === 200) {
				setState({ ...state, result: 'success' });
				return res.status;
			} else {
				setState({ ...state, result: 'error' });
				return res.status;
			}
		} catch (err) {
			console.log(err);
			setState({ ...state, result: 'error' });
		}

		//*/
	};
	return (
		<section className={`section ${Style.sectionC}`} id='contact'>
			<h1 className={`header ${Style.headliner}`}>Forgot password?</h1>
			{state.result === 'success' ? (
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
			) : (
				<form className={Style.form} onSubmit={handleSubmit}>
					<fieldset className={`${Style.fieldset} ${Style.fieldsetone}`}>
						<label className={Style.label}>
							E-mail:
							<input
								className={`${Style.input} ${Style.email}`}
								type='text'
								value={state.email}
								name='email'
								onChange={handleChange}
							/>
						</label>
					</fieldset>
					<fieldset className={`${Style.fieldset} ${Style.submitfield}`}>
						<label className={`${Style.label} ${Style.submitLabel}`}>
							<ReCAPTCHA
								sitekey={process.env.REACT_APP_REC_SITE_KEY}
								size='invisible'
								ref={reRef}
							/>
							<input
								className={`${Style.input} ${Style.submit}`}
								type='submit'
								value='Submit'
							/>
						</label>
					</fieldset>
				</form>
			)}
		</section>
	);
}

export default Forgotpassword;
