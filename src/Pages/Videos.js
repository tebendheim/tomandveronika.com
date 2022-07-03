import React from 'react';
import Axios from 'axios';
import styles from '../Components/CSS/Videos.module.css';
import axios from 'axios';
import Spinner from '../Components/Spinner';

require('dotenv').config();

class Videos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Data: '',
			playersReady: false,
			ip: '',
			isLoading: true,
			length: 0,
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
					Data: result.data,
					len: result.data.items.length,
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
		await this.getProps().then(() => {
			this.setState({
				isLoading: false,
			});
		});
	}

	render() {
		return (
			<section className={`section ${styles.videos_section}`} id='videos'>
				<h1 className={`header ${styles.headers}`}>Videos</h1>
				<h3>{this.state.isLoading && <Spinner />}</h3>
				<ul className={styles.grid}>
					{this.state.Data &&
						this.state.Data.items.map((item, index) => {
							const { snippet = {} } = item;
							const { title = {}, resourceId } = snippet;
							//const { medium, large = {} } = thumbnails;
							return (
								<li key={item.id} className={styles.card}>
									{this.state.isLoading && (
										<Spinner className={styles.spinner} />
									)}

									<iframe
										className={
											this.state.isLoading ? styles.hide : styles.iframe
										}
										allowFullScreen='1'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										src={`https://www.youtube.com/embed/${resourceId.videoId}?origin=https://tomandveronika.com&showinfo=0&video-id=${resourceId.videoId}&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0`}
										data-title='video_title'
										title='video_title'
										frameBorder='0'
									></iframe>

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
