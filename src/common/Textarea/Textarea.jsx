import React from 'react';
import PropTypes from 'prop-types';

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

Textarea.propTypes = {
	rows: PropTypes.number,
	labelText: PropTypes.string,
	styleAdditional: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholderText: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string,
};

export default Textarea;
