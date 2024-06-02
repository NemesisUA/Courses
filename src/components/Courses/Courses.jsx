import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CoursesCard } from './components';

const Courses = ({ mockedCoursesList, mockedAuthorsList }) => {
	const [coursesList, setCoursesList] = useState(mockedCoursesList);
	const navigate = useNavigate();

	if (!coursesList || coursesList.length === 0) {
		navigate('/no-courses');
	}

	return (
		<>
			<ul>
				{coursesList.map((course) => (
					<CoursesCard key={course.id} {...course} />
				))}
			</ul>
		</>
	);
};

export default Courses;
