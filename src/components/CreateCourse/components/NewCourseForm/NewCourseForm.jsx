import React from 'react';
import PropTypes from 'prop-types';

import { Input, Textarea } from '../../../../common';
import { getCourseDuration } from '../../../../helpers';
import { AuthorsBlock } from './components/idex';

import styles from './newCourseForm.module.css';

const NewCourseForm = ({
	handleChange,
	form,
	courseAuthors,
	setCourseAuthors,
	errors,
}) => {
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

				<AuthorsBlock
					handleChange={handleChange}
					form={form}
					courseAuthors={courseAuthors}
					setCourseAuthors={setCourseAuthors}
					errors={errors}
				/>
			</div>
		</form>
	);
};

NewCourseForm.propTypes = {
	handleChange: PropTypes.func.isRequired,
	form: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
			.isRequired,
	}).isRequired,
	courseAuthors: PropTypes.array.isRequired,
	setCourseAuthors: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
};

export default NewCourseForm;
