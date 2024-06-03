import React, { useState } from 'react';

import { Button, Input, Textarea } from '../../../../common';

import { getCourseDuration } from '../../../../helpers';
import { mockedAuthorsList } from '../../../../constants';
import AuthorItem from '../AuthorItem/AuthorItem';
import CourseAuthorsItem from '../CourseAuthorsItem/CourseAuthorsItem';

import styles from './newCourseForm.module.css';

const NewCourseForm = ({ handleChange, form, errors }) => {
	const [authors, setAuthors] = useState(mockedAuthorsList || []);
	const [courseAuthors, setCourseAuthors] = useState([]);

	function handleCreateAuthor() {
		setAuthors(...authors, { id: Date.now(), name: form.authorName });
	}
	return (
		<form autoComplete='off'>
			<div className={styles.formContent}>
				<div>
					<h2>Main Info</h2>

					<Input
						labelText='Title'
						placeholderText='Input text'
						type='text'
						name='title'
						value={form.title}
						onChange={handleChange}
						required
						error={errors.title}
					/>

					<Textarea
						labelText='Description'
						placeholderText='Input text'
						name='description'
						value={form.description}
						onChange={handleChange}
						required
						error={errors.description}
					/>
				</div>

				<h2>Duration</h2>
				<div className={styles.durationContainer}>
					<Input
						labelText='Duration'
						placeholderText='Input text'
						type='text'
						name='duration'
						value={form.duration}
						onChange={handleChange}
						required
						error={errors.duration}
						styleAdditional='maxWidth400'
					/>
					<b style={{ marginTop: '10px' }}>
						{getCourseDuration(form.duration)}
					</b>
				</div>

				<div className={styles.authorsContainer}>
					<div className={styles.authors}>
						<h2>Authors</h2>

						<Input
							labelText='Author Name'
							placeholderText='Input text'
							name='authorName'
							value={form.authorName}
							onChange={handleChange}
							required
							error={errors.authorName}
						>
							<Button buttonText='create author' onClick={handleCreateAuthor} />
						</Input>

						<h3>Authors List</h3>
						<ul>
							{authors.map((author) => (
								<AuthorItem
									key={author.id}
									{...author}
									setCourseAuthors={setCourseAuthors}
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
									>
										{author.name}
									</CourseAuthorsItem>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</form>
	);
};

export default NewCourseForm;
