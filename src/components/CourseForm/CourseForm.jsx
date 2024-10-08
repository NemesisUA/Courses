import React, { useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../common';
import { NewCourseForm } from './components';
import { checkNewCourseErrors } from '../../helpers';

import styles from './CourseForm.module.css';
import { addCourse, editCourse } from '../../store/courses/thunk';

const CourseForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const token = useSelector((state) => state.user.token);
	const courses = useSelector((state) => state.courses.courses);
	const authors = useSelector((state) => state.authors.authors);

	const location = useLocation();
	const currentPath = location.pathname;

	const [form, setForm] = useState({
		title: '',
		description: '',
		duration: '',
	});

	const [courseAuthors, setCourseAuthors] = useState([]);

	const [errors, setErrors] = useState({});

	const { courseId } = useParams();
	let courseInfo = courses?.find((course) => course.id === courseId);

	if (currentPath !== '/courses/add') {
		if (!courseInfo) navigate('/404');
	} else courseInfo = {};

	const {
		title = '',
		description = '',
		duration = '',
		authors: authorsIDs = [],
	} = courseInfo;

	useLayoutEffect(() => {
		setForm({
			title,
			description,
			duration,
		});
		setCourseAuthors(
			authorsIDs.map((authorID) =>
				authors.find((author) => author.id === authorID)
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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

			if (currentPath === '/courses/add') {
				// create new
				dispatch(addCourse({ newCourse, token }));
				alert('Course has been created!');
				navigate('/');
			} else {
				// update
				newCourse.id = courseId;
				dispatch(editCourse({ courseId, newCourse, token }));
				setTimeout(() => navigate('/'), 300);
			}
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
				authors={authors}
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
