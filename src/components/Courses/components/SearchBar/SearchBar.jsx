import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Input } from '../../../../common';

import styles from './searchBar.module.css';

const SearchBar = ({ courseQuery, setSearchParams }) => {
	const [search, setSearch] = useState(courseQuery || '');

	function handleSearch(e) {
		e.preventDefault();

		if (!search.trim()) {
			setSearchParams({});
			return;
		}
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

SearchBar.propTypes = {
	courseQuery: PropTypes.string,
	setSearchParams: PropTypes.func.isRequired,
};

export default SearchBar;
