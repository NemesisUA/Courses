import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../common';
import { SearchBar } from '../components/Courses/components';
import { Courses } from '../components';
import { mockedCoursesList, mockedAuthorsList } from '../constants';

const HomePage = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className='user-actions-wrapper'>
				<SearchBar />
				<Button
					buttonText='Add new course'
					onClick={() => navigate('/create-course')}
				/>
			</div>

			<Courses
				mockedCoursesList={mockedCoursesList}
				mockedAuthorsList={mockedAuthorsList}
			/>
		</>
	);
};

export default HomePage;
