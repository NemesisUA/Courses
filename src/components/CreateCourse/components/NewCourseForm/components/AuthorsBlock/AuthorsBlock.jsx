import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AuthorsAllContext } from '../../../../../../hoc/AuthorsAllProvider';
import { Button, Input } from '../../../../../../common';
import AuthorItem from '../AuthorItem/AuthorItem';
import CourseAuthorsItem from '../CourseAuthorsItem/CourseAuthorsItem';

import styles from './authorsBlock.module.css';

const AuthorsBlock = ({ courseAuthors, setCourseAuthors, errors }) => {
	const { authorsAll, setAuthorsAll } = useContext(AuthorsAllContext);
	const [authorAccessible, setAuthorAccessible] = useState(authorsAll);

	const [newAuthorName, setNewAuthorName] = useState('');

	function handleCreateAuthor(e) {
		e.preventDefault();

		const newAuthor = { id: uuidv4(), name: newAuthorName };

		setAuthorsAll([...authorsAll, newAuthor]);
		setAuthorAccessible([...authorAccessible, newAuthor]);
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
					{authorAccessible.length > 0 &&
						authorAccessible.map((author) => (
							<AuthorItem
								key={author.id}
								{...author}
								setCourseAuthors={setCourseAuthors}
								setAuthorAccessible={setAuthorAccessible}
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
								setAuthorAccessible={setAuthorAccessible}
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
