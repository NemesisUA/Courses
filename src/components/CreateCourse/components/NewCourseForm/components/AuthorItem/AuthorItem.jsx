import React from 'react';
import PropTypes from 'prop-types';

import styles from './authorItem.module.css';

const AuthorItem = ({ id, name, setCourseAuthors, setAuthorAccessible }) => {
	function addAuthor(idx, name) {
		setCourseAuthors((prev) => [...prev, { id: idx, name: name }]);
		setAuthorAccessible((prev) => prev.filter((author) => author.id !== idx));
	}

	return (
		<div className={styles.container}>
			<p>{name}</p>
			<button
				className={styles.add}
				type='button'
				onClick={() => addAuthor(id, name)}
			>
				&#10009;
			</button>
		</div>
	);
};

AuthorItem.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	name: PropTypes.string.isRequired,
	setCourseAuthors: PropTypes.func.isRequired,
	setAuthorAccessible: PropTypes.func.isRequired,
};

export default AuthorItem;
