import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CoursesCard } from './components';
import { CoursesContext } from '../../hoc/CoursesProvider';

const Courses = ({ courseQuery }) => {
	const { courses } = useContext(CoursesContext);
	const navigate = useNavigate();

	if (courses.length === 0) {
		navigate('/no-courses');
	}

	return (
		<>
			<ul>
				{courses &&
					courses
						.filter(
							(course) =>
								course.title.toLowerCase().includes(courseQuery) ||
								course.id.toLowerCase().includes(courseQuery)
						)
						.map((course) => <CoursesCard key={course.id} {...course} />)}
			</ul>
		</>
	);
};

export default Courses;
