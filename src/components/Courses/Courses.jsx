import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CoursesCard, SearchBar } from './components';
import { Button } from '../../common';
import { useEffect } from 'react';
import { fetchUserRole } from '../../store/user/thunk';

const Courses = () => {
	const navigate = useNavigate();

	const courses = useSelector((state) => state.courses.courses);

	const [searchParams, setSearchParams] = useSearchParams();
	const courseQuery = searchParams.get('course') || '';

	const token = useSelector((state) => state.user.token);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserRole(token));
	}, [token, dispatch]);

	useEffect(() => {
		if (courses?.length === 0) {
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
