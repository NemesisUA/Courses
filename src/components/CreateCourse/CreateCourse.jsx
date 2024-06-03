import React, { useState } from 'react';

import { Button } from '../../common';
import { useNavigate } from 'react-router-dom';

import { checkNewCourseErrors } from '../../helpers';

import styles from './createCourse.module.css';
import { NewCourseForm } from './components';

const CreateCourse = () => {
	const navigate = useNavigate();

	const [form, setForm] = useState({
		title: '',
		description: '',
		duration: '',
		authors: '',
	});
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

	function createCourse() {
		let newErrors = {};
		newErrors = checkNewCourseErrors(form);
		setErrors(newErrors);

		// ToDo
		if (Object.keys(newErrors).length === 0) {
			console.log('new course created!!!');
			//navigate('/');
		}
	}

	function resetForm() {
		setForm({
			title: '',
			description: '',
			duration: '',
			authors: '',
		});

		setErrors({});
	}

	return (
		<div className={styles.container}>
			<h1>Course Edit/Create Page</h1>

			<NewCourseForm handleChange={handleChange} form={form} errors={errors} />

			<div className={styles.buttonsContainer}>
				<Button buttonText='cancel' onClick={resetForm} />
				<Button buttonText='create course' onClick={createCourse} />
			</div>
		</div>
	);
};

export default CreateCourse;
