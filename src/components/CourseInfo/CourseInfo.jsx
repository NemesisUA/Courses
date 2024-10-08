import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from '../../common';
import { getCourseDuration, formatCreationDate } from '../../helpers';

import styles from './courseInfo.module.css';
import PageNotFound from '../../pages/PageNotFound';

const CourseInfo = () => {
	const navigate = useNavigate();

	const { courseId } = useParams();

	const courses = useSelector((state) => state.courses.courses);
	const authorsAll = useSelector((state) => state.authors.authors);

	const courseInfo = courses.find((course) => course.id === courseId);
	if (!courseInfo) {
		return <PageNotFound />;
	}
	const { title, description, duration, creationDate, authors } = courseInfo;

	function navigateBack() {
		navigate('/courses');
	}

	return (
		<div>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.card}>
				<div className={styles.leftBlock}>
					<p>
						<b>Description:</b>
					</p>
					<p>{description}</p>
				</div>

				<div className={styles.rightBlock}>
					<p className={styles.nowrap}>
						<b>ID:</b>
						<span className={styles.nowrap}>{courseId}</span>
					</p>
					<p>
						<b>Duration:</b>
						{getCourseDuration(duration)}
					</p>
					<p>
						<b>Created:</b>
						{formatCreationDate(creationDate)}
					</p>
					<p className={styles.nowrap}>
						<b>Authors:</b>
						<span className={styles.nowrap}>
							{authors
								.map(
									(authorId) =>
										authorsAll.filter((author) => author.id === authorId)[0]
											.name
								)
								.join(', ')}
						</span>
					</p>
				</div>
			</div>

			<div className={styles.backBtnContainer}>
				<Button buttonText='back' onClick={navigateBack} />
			</div>
		</div>
	);
};

export default CourseInfo;
