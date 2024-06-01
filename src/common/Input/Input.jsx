import React from 'react';

import styles from './input.module.css';

const Input = ({
	labelText = '',
	styleAdditional = '',
	type = 'text',
	name,
	placeholderText = '',
	value,
	onChange,
}) => {
	return (
		<label className={styles.label}>
			{labelText}
			<input
				className={`${styles.input} ${styles[styleAdditional]}`}
				type={type}
				name={name}
				placeholder={placeholderText}
				value={value}
				onChange={onChange}
			/>
		</label>
	);
};

export default Input;
