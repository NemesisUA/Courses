import React from 'react';

import styles from './authorItem.module.css';

const AuthorItem = ({ id, name, setCourseAuthors, setAuthors }) => {
	function addAuthor(idx) {
		setCourseAuthors((prev) => [...prev, { id: idx, name }]);
		setAuthors((prev) => prev.filter((author) => author.id !== idx));
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
