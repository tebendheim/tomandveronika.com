import React from 'react';
import Axios from 'axios';
import styles from './CSS/Videos.module.css';
import axios from 'axios';

require('dotenv').config();

class Videos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: '',
			data2: '',
			testData: '',
			test: 'dette er en test',
			direct: '',
			playersReady: false,
			ip: '',
		};
		this.getProps = this.getProps.bind(this);
		//this.postGetProps = this.postGetprops.bind(this);

		this.findIP = this.findIP.bind(this);
	}

	async getProps(ipadress) {
		const url = 'https://creative-daffodil-4335b5.netlify.app/api/youtube';
		const params = {
			headers: {
				maxResults: 10,
				'X-Forwarded-For': ipadress,
				'Access-Control-Allow-Origin': '*',
			},
		};
		return await Axios.get(url, params)
			.then((result) => {
				this.setState({
					testData: result.data,
				});
				console.log(result);
				return result;
			})
			.catch((err) => {
				console.log('Error', err);
				return err;
			});
	}

	async findIP() {
		await axios
			.get('https://geolocation-db.com/json/')
			.then((res) => {
				this.setState({
					ip: res.data.IPv4,
				});
				console.log(res.data.IPv4);
				return res.data.IPv4;
			})
			.catch((err) => {
				return err;
			});
	}

	async componentDidMount(event) {
		await this.findIP();
		console.log('mounted');
		/*const props = */ await this.getProps();
	}

	render() {
		return (
			<section className='section' id='videos'>
				<h1 className={styles.headers}>Dette er video seksjonen</h1>
				<h2>{this.state.data}</h2>
				<ul className={styles.grid}>
					{this.state.testData &&
						this.state.testData.items.map((item) => {
							const { snippet = {} } = item;
							const { title = {}, resourceId } = snippet;
							//const { medium, large = {} } = thumbnails;
							return (
								<li key={item.id} className={styles.card}>
									<p>
										<iframe
											title={title}
											src={`https://www.youtube-nocookie.com/embed/${resourceId.videoId}&origin=netlify.app`}
											//src={`http://localhost:8888/api/test?urlTo=https://www.youtube-nocookie.com/embed/${resourceId.videoId}`}
											frameBorder='0'
											allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
											className={styles.frame}
										></iframe>
									</p>
									<h3>{title}</h3>
								</li>
							);
						})}
				</ul>
			</section>
		);
	}
}

export default Videos;
