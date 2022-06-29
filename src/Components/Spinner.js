import style from './CSS/Spinner.module.css';

import React from 'react';

const Spinner = () => {
	return (
		<div className={style.spinnerContainer}>
			<div className={style.loadingSpinner}></div>
		</div>
	);
};

export default Spinner;
