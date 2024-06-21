import React, { useEffect } from 'react';

import styles from './emptyCourseList.module.css';
import { Button } from '../../common';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EmptyCourseList = () => {
	const navigate = useNavigate();
	const courses = useSelector((state) => state.courses.courses);

	useEffect(() => {
		if (courses?.length > 0) {
			navigate('/courses');
		}
	}, [courses, navigate]);

	return (
		<div className={styles.container}>
			<h2>Course List is Empty</h2>
			<p className={styles.subtitle}>
				Please use "Add New Course" button to add your first course
			</p>
			<Button
				buttonText='Add New Course'
				onClick={() => navigate('/courses/add')}
			/>
		</div>
	);
};

export default EmptyCourseList;
