import React from 'react';

import styles from './authorItem.module.css';

const AuthorItem = ({ id, name, setCourseAuthors }) => {
	function addAuthor(idx) {
		setCourseAuthors((prev) => [...prev, { id: idx, name }]);
	}

	return (
		<div className={styles.container}>
			<p>{name}</p>
			<button
				className={styles.add}
				type='button'
				onClick={() => addAuthor(id)}
			>
				&#10009;
			</button>
		</div>
	);
};

export default AuthorItem;
