import React from 'react';
import PropTypes from 'prop-types';

import styles from './input.module.css';

const Input = ({
	labelText = '',
	styleAdditional = '',
	type = 'text',
	name,
	placeholderText = '',
	value,
	onChange,
	error,
	children,
}) => {
	return (
		<label className={`${styles.label} ${styles[styleAdditional]}`}>
			{labelText}
			<div className={styles.align}>
				<input
					className={styles.input}
					type={type}
					name={name}
					placeholder={placeholderText}
					value={value}
					onChange={onChange}
				/>
				{children}
			</div>
			{error ? <div className={styles.errorText}>{error}</div> : <div> </div>}
		</label>
	);
};

Input.propTypes = {
	labelText: PropTypes.string,
	styleAdditional: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholderText: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string,
	children: PropTypes.node,
};

export default Input;
