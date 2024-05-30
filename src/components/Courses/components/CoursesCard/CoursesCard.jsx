import React from 'react';

import { Button } from '../../../../common';
import { mockedAuthorsList } from '../../../../constants';
import { getCourseDuration, formatCreationDate } from '../../../../helpers';

import styles from './coursesCard.module.css';

function CoursesCard({
	id,
	title,
	description,
	authors = [],
	duration,
	creationDate,
	setCourseInfo,
	setIsShown,
}) {
	function handleClick() {
		setCourseInfo({
			id,
			title,
			description,
			authors,
			duration,
			creationDate,
		});
		setIsShown((isShown) => !isShown);
	}

	return (
		<div className={styles.card}>
			<h2 className={styles.cardTitle}>{title}</h2>
			<div className={styles.cardContainer}>
				<div>
					<p>{description}</p>
				</div>
				<div className={styles.cardAutorsBlock}>
					<p className={styles.nowrap}>
						<b>Authors: </b>
						{authors
							.map(
								(authorId) =>
									mockedAuthorsList.filter(
										(author) => author.id === authorId
									)[0].name
							)
							.join(', ')}
					</p>
					<p>
						<b>Duration: </b>
						{getCourseDuration(duration)}
					</p>
					<p>
						<b>Created: </b>
						{formatCreationDate(creationDate)}
					</p>
					<Button buttonText='show course' onClick={handleClick} />
				</div>
			</div>
		</div>
	);
}

export default CoursesCard;
