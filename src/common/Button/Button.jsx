import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

const Button = ({ buttonText, onClick, styleAdditional = '', ...rest }) => {
	return (
		<button
			className={`${styles.btn} ${styles[styleAdditional]}`}
			onClick={onClick}
			{...rest}
		>
			{buttonText}
		</button>
	);
};
Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	rest: PropTypes.object,
};

export default Button;
