import React from 'react';

import { Button, Input } from '../../../../common';

import styles from './searchBar.module.css';

const SearchBar = () => {
	return (
		<div className={styles.container}>
			<Input type='search' name='search' placeholderText='input text' />
			<Button buttonText='search' />
		</div>
	);
};

export default SearchBar;
