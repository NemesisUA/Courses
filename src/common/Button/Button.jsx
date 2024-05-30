import React from 'react';

import styles from './button.module.css';

const Button = ({ buttonText, onClick }) => {
	return (
		<button className={styles.btn} onClick={onClick}>
			{buttonText}
		</button>
	);
};

export default Button;
