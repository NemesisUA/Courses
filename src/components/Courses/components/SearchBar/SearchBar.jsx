import React from 'react';

import styles from './searchBar.module.css';
import { Button } from '../../../../common';

const SearchBar = () => {
	return (
		<label className={styles.label} htmlFor='search'>
			<input
				className={styles.input}
				id='search'
				type='search'
				placeholder='input text'
			/>
			<Button buttonText='search' />
		</label>
	);
};

export default SearchBar;
