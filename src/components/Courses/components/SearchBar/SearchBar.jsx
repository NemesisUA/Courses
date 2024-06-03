import React, { useState } from 'react';

import { Button, Input } from '../../../../common';

import styles from './searchBar.module.css';

const SearchBar = ({ courseQuery, setSearchParams }) => {
	const [search, setSearch] = useState(courseQuery || '');

	function handleSearch(e) {
		e.preventDefault();
		setSearchParams({ course: search.trim().toLowerCase() });
	}

	return (
		<div className={styles.container}>
			<Input
				type='search'
				name='search'
				placeholderText='input text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Button buttonText='search' onClick={handleSearch} />
		</div>
	);
};

export default SearchBar;
