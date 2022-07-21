import React, { useState } from 'react';
import Style from '../Components/CSS/Contact.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Reset(props) {
	const handleChange = (event) => {
		event.preventDefault();
		setInfo({ ...info, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setInfo({ ...info, [event.target.name]: event.target.value });

		//Videre følger axios req til backend
		const url = '';
		const body = '';
		axios.post(url, body);
	};
	const { token } = useParams(); // henter ut paramfra URL
	const [info, setInfo] = useState({
		newPassword: '',
		repeatPassword: '',
		token: token, //setter state token til token
	});

	return (
		<section className={`section ${Style.sectionC}`} id='contact'>
			<h1 className={`header ${Style.headliner}`}>Dette er siden</h1>
			<h1>token {info.token}</h1>
			<h1>{info.newPassword} </h1>
			<h1>{info.repeat}</h1>
			<form className={Style.form} onSubmit={handleSubmit}>
				<fieldset className={`${Style.fieldset} ${Style.fieldsetone}`}>
					<label className={Style.label}>
						Set new password:
						<input
							className={`${Style.input} ${Style.email}`}
							type='text'
							value={info.newPassword}
							name='newPassword'
							onChange={handleChange}
						/>
					</label>

					<label className={Style.label}>
						repeat new password:
						<input
							className={`${Style.input} ${Style.email}`}
							type='text'
							value={info.repeat}
							name='repeatPassword'
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
}

export default Reset;

/*
class Reset extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			result: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}
	/*componentDidMount() {
		console.log(this.props.match.params.id, 'kjhj');
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	render() {
		const { id } = this.props;
		return (

		);
	}
}
*/
