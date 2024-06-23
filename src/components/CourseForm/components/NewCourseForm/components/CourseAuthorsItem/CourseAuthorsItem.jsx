import React from 'react';
import PropTypes from 'prop-types';

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

CourseAuthorsItem.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	name: PropTypes.string.isRequired,
	setCourseAuthors: PropTypes.func.isRequired,
	setAuthorAccessible: PropTypes.func.isRequired,
};

export default CourseAuthorsItem;
