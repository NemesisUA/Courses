import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input } from '../../../../../../common';
import AuthorItem from '../AuthorItem/AuthorItem';
import CourseAuthorsItem from '../CourseAuthorsItem/CourseAuthorsItem';
import { addAuthor } from '../../../../../../store/authors/thunk';

import styles from './authorsBlock.module.css';

const AuthorsBlock = ({ courseAuthors, setCourseAuthors }) => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.user.token);
	const authorsAll = useSelector((state) => state.authors.authors);

	const [authorAccessible, setAuthorAccessible] = useState(authorsAll);

	const [newAuthorName, setNewAuthorName] = useState('');
	const [newAuthorError, setNewAuthorError] = useState('');

	async function handleCreateAuthor(e) {
		e.preventDefault();

		if (newAuthorName.length < 2) {
			setNewAuthorError('Text length should be at least 2 characters');
			return;
		}
		setNewAuthorError('');
		const newAuthor = { name: newAuthorName };

		const result = await dispatch(addAuthor({ newAuthor, token }));

		setAuthorAccessible([...authorAccessible, result.payload]);
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
					error={newAuthorError}
				>
					<Button buttonText='create author' onClick={handleCreateAuthor} />
				</Input>

				<h3>Authors List</h3>
				<ul>
					{authorAccessible.length > 0 &&
						authorAccessible
							.filter(
								(author) =>
									courseAuthors.map((item) => item.id).includes(author.id) ===
									false
							)
							.map((author) => (
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

AuthorsBlock.propTypes = {
	courseAuthors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
	setCourseAuthors: PropTypes.func.isRequired,
};

export default AuthorsBlock;
