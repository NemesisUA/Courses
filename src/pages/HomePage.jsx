import React from 'react';

import { Button } from '../common';
import { SearchBar } from '../components/Courses/components';
import { Courses } from '../components';
import { mockedCoursesList, mockedAuthorsList } from '../constants';

const HomePage = () => {
	return (
		<>
			<div className='user-actions-wrapper'>
				<SearchBar />
				<Button buttonText='Add new course' />
			</div>

			<Courses
				mockedCoursesList={mockedCoursesList}
				mockedAuthorsList={mockedAuthorsList}
			/>
		</>
	);
};

export default HomePage;
