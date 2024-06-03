import React, { useState } from 'react';

import { Button, Input } from '../../../../../../common';
import AuthorItem from '../AuthorItem/AuthorItem';
import CourseAuthorsItem from '../CourseAuthorsItem/CourseAuthorsItem';
import { mockedAuthorsList } from '../../../../../../constants';

import styles from './authorsBlock.module.css';

const AuthorsBlock = ({ handleChange, form, errors }) => {
	const [authors, setAuthors] = useState(mockedAuthorsList || []);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const [newAuthorName, setNewAuthorName] = useState('');

	function handleCreateAuthor(e) {
		e.preventDefault();

		setAuthors([...authors, { id: Date.now(), name: newAuthorName }]);
		setNewAuthorName('');
	}

	return (
		<div className={styles.authorsContainer}>
			<div className={styles.authors}>
				<h2>Authors</h2>

				<Input
					labelText='Author Name'
					placeholderText='Input text'
					name='createAuthor'
					value={newAuthorName}
					onChange={(e) => setNewAuthorName(e.target.value)}
					required
					error={errors.authorName}
				>
					<Button buttonText='create author' onClick={handleCreateAuthor} />
				</Input>

				<h3>Authors List</h3>
				<ul>
					{authors.length > 0 &&
						authors.map((author) => (
							<AuthorItem
								key={author.id}
								{...author}
								setCourseAuthors={setCourseAuthors}
								setAuthors={setAuthors}
							/>
						))}
				</ul>
			</div>

			<div className={styles.authorsList}>
				<h2>Course Authors</h2>
				{!courseAuthors.length ? (
					<p>authors list is empty</p>
				) : (
					<ul>
						{courseAuthors.map((author) => (
							<CourseAuthorsItem
								key={author.id}
								{...author}
								setCourseAuthors={setCourseAuthors}
								setAuthors={setAuthors}
							>
								{author.name}
							</CourseAuthorsItem>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default AuthorsBlock;
