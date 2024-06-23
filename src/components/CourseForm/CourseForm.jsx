import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../common';
import { NewCourseForm } from './components';
import { checkNewCourseErrors } from '../../helpers';

import styles from './CourseForm.module.css';
import { addCourse } from '../../store/courses/thunk';

const CourseForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const token = useSelector((state) => state.user.token);

	const [form, setForm] = useState({
		title: '',
		description: '',
		duration: '',
	});

	const [courseAuthors, setCourseAuthors] = useState([]);

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		// numbers only
		if (e.target.name === 'duration') {
			e.target.value = e.target.value.replace(/[^\d]/gi, '');
		}

		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	function createCourse(e) {
		e.preventDefault();
		let newErrors = {};
		newErrors = checkNewCourseErrors(form);
		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			const courseAuthorsIds = courseAuthors.map((author) => author.id);

			const newCourse = {
				title: form.title,
				description: form.description,
				duration: +form.duration,
				authors: courseAuthorsIds,
			};

			dispatch(addCourse({ newCourse, token }));

			navigate('/');
		}
	}

	function resetForm() {
		setForm({
			title: '',
			description: '',
			duration: '',
		});
		setErrors({});
	}

	return (
		<div className={styles.container}>
			<h1>Course Edit/Create Page</h1>

			<NewCourseForm
				handleChange={handleChange}
				form={form}
				courseAuthors={courseAuthors}
				setCourseAuthors={setCourseAuthors}
				errors={errors}
			/>

			<div className={styles.buttonsContainer}>
				<Button buttonText='cancel' type='reset' onClick={resetForm} />
				<Button
					buttonText='create course'
					type='button'
					onClick={createCourse}
				/>
			</div>
		</div>
	);
};

export default CourseForm;
