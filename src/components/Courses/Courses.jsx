import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CoursesCard } from './components';
import { CoursesContext } from '../../hoc/CoursesProvider';

const Courses = () => {
	const { courses } = useContext(CoursesContext);
	const navigate = useNavigate();

	if (courses.length === 0) {
		navigate('/no-courses');
	}

	return (
		<>
			<ul>
				{courses &&
					courses.map((course) => <CoursesCard key={course.id} {...course} />)}
			</ul>
		</>
	);
};

export default Courses;
