import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

const Button = ({ buttonText, onClick, ...rest }) => {
	return (
		<button className={styles.btn} onClick={onClick} {...rest}>
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
