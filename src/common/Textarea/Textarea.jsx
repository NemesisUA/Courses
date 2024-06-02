import React from 'react';

import styles from './textarea.module.css';

const Textarea = ({
	rows = 6,
	labelText = '',
	styleAdditional = '',
	type = 'text',
	name,
	placeholderText = '',
	value,
	onChange,
	error,
}) => {
	return (
		<label className={styles.label}>
			{labelText}
			<textarea
				rows={rows}
				className={`${styles.textarea} ${styles[styleAdditional]}`}
				type={type}
				name={name}
				placeholder={placeholderText}
				value={value}
				onChange={onChange}
			/>
			{error ? <div className={styles.errorText}>{error}</div> : <div> </div>}
		</label>
	);
};

export default Textarea;
