import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../../common';
import { getCourseDuration, formatCreationDate } from '../../../../helpers';

import styles from './coursesCard.module.css';
import { deleteCourse } from '../../../../store/courses/coursesSlice';

function CoursesCard({
	id,
	title,
	description,
	authors = [],
	duration,
	creationDate,
}) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authorsAll = useSelector((state) => state.authors.authors);

	function navigateCourse() {
		navigate(`/courses/${id}`);
	}

	function handleDelete() {
		dispatch(deleteCourse({ id }));
	}

	function handleEdit() {}

	return (
		<div className={styles.card}>
			<h2 className={styles.cardTitle}>
				{title[0].toUpperCase() + title.slice(1).toLowerCase()}
			</h2>
			<div className={styles.cardContainer}>
				<div className={styles.cardDescription}>
					<p>{description}</p>
				</div>
				<div className={styles.cardAutorsBlock}>
					<p className={styles.nowrap}>
						<b>Authors: </b>
						{authors &&
							authors
								.map(
									(authorId) =>
										authorsAll?.filter((author) => author.id === authorId)[0]
											?.name
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
					<div className={styles.buttonsBlock}>
						<Button buttonText='show course' onClick={navigateCourse} />
						<Button
							buttonText=''
							styleAdditional='deleteIco'
							onClick={handleDelete}
						/>
						<Button
							buttonText=''
							styleAdditional='editIco'
							onClick={handleEdit}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

CoursesCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	authors: PropTypes.arrayOf(PropTypes.string),
	duration: PropTypes.number.isRequired,
	creationDate: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string,
	]).isRequired,
};

export default CoursesCard;
