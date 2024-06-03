import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CoursesContext } from '../../hoc/CoursesProvider';
import { Button } from '../../common';
import { getCourseDuration, formatCreationDate } from '../../helpers';

import styles from './courseInfo.module.css';
import { AuthorsAllContext } from '../../hoc/AuthorsAllProvider';

const CourseInfo = () => {
	const navigate = useNavigate();

	const { id } = useParams();
	const { courses } = useContext(CoursesContext);
	const { authorsAll } = useContext(AuthorsAllContext);
	const courseInfo = courses.filter((course) => course.id === id)[0];
	const { title, description, duration, creationDate, authors } = courseInfo;

	function navigateBack() {
		navigate('/');
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
						<span className={styles.nowrap}>{id}</span>
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
