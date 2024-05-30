import React from 'react';

import { Button } from '../../common';
import { getCourseDuration, formatCreationDate } from '../../helpers';
import { mockedAuthorsList } from '../../constants';

import styles from './courseInfo.module.css';

const CourseInfo = ({
	id,
	title,
	description,
	authors = [],
	duration,
	creationDate,
	setIsShown,
	setCourseInfo,
}) => {
	function handleBack() {
		setCourseInfo({});
		setIsShown((isShown) => !isShown);
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
				<Button buttonText='back' onClick={handleBack} />
			</div>
		</div>
	);
};

export default CourseInfo;
