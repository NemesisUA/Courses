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

export default Input;
