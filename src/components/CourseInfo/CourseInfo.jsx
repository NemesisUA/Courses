import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '../../common';
import { getCourseDuration, formatCreationDate } from '../../helpers';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';

import styles from './courseInfo.module.css';

const CourseInfo = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const courseInfo = mockedCoursesList.filter((item) => item.id === id)[0];
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
										mockedAuthorsList.filter(
											(author) => author.id === authorId
										)[0].name
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
