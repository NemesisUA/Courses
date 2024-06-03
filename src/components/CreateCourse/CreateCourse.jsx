import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { CoursesContext } from '../../hoc/CoursesProvider';
import { Button } from '../../common';
import { NewCourseForm } from './components';
import { checkNewCourseErrors } from '../../helpers';

import styles from './createCourse.module.css';

const CreateCourse = () => {
	const { setCourses } = useContext(CoursesContext);
	const navigate = useNavigate();

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
			const id = uuidv4();

			const newCourse = {
				id: id,
				title: form.title,
				description: form.description,
				duration: form.duration,
				creationDate: new Date().toDateString(),
				authors: courseAuthorsIds,
			};

			setCourses((courses) => [...courses, newCourse]);
			alert('New corse was created!');
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

export default CreateCourse;
