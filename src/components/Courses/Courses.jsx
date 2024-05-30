import React from 'react';

import { CoursesCard } from './components';
import { Button } from '../../common';

const Courses = ({ coursesList, authorsList, setCourseInfo, setIsShown }) => {
	return (
		<>
			<ul>
				{coursesList.map((course) => (
					<CoursesCard
						key={course.id}
						{...course}
						setCourseInfo={setCourseInfo}
						setIsShown={setIsShown}
					/>
				))}
			</ul>

			<Button buttonText='Add New Course' />
		</>
	);
};

export default Courses;
