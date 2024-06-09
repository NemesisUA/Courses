import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { CoursesCard, SearchBar } from './components';
import { CoursesContext } from '../../hoc/CoursesProvider';
import { Button } from '../../common';

const Courses = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const courseQuery = searchParams.get('course') || '';

	const { courses } = useContext(CoursesContext);

	useEffect(() => {
		if (courses.length === 0) {
			navigate('/courses/empty');
		}
	}, [courses, navigate]);

	return (
		<>
			<div className='user-actions-wrapper'>
				<SearchBar
					courseQuery={courseQuery}
					setSearchParams={setSearchParams}
				/>
				<Button
					buttonText='Add new course'
					onClick={() => navigate('/courses/add')}
				/>
			</div>

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
