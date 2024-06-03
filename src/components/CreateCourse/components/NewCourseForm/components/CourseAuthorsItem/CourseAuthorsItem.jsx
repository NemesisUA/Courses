import React from 'react';

import styles from './courseAuthorsItem.module.css';

const CourseAuthorsItem = ({
	id,
	name,
	setCourseAuthors,
	setAuthorAccessible,
}) => {
	function deleteAuthor(idx) {
		setCourseAuthors((prev) => prev.filter((author) => author.id !== idx));
		setAuthorAccessible((prev) => [...prev, { id: idx, name }]);
	}

	return (
		<div className={styles.container}>
			<p>{name}</p>
			<button
				className={styles.delete}
				type='button'
				onClick={() => deleteAuthor(id)}
			>
				&#x1F5D1;
			</button>
		</div>
	);
};

export default CourseAuthorsItem;
