import React from 'react';

import styles from './button.module.css';

const Button = ({ buttonText, onClick, ...rest }) => {
	return (
		<button className={styles.btn} onClick={onClick} {...rest}>
			{buttonText}
		</button>
	);
};

export default Button;
