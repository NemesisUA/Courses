import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button } from '../common';
import { SearchBar } from '../components/Courses/components';
import { Courses } from '../components';

const HomePage = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const courseQuery = searchParams.get('course');
	return (
		<>
			<div className='user-actions-wrapper'>
				<SearchBar
					courseQuery={courseQuery}
					setSearchParams={setSearchParams}
				/>
				<Button
					buttonText='Add new course'
					onClick={() => navigate('/create-course')}
				/>
			</div>

			<Courses courseQuery={courseQuery || ''} />
		</>
	);
};

export default HomePage;
