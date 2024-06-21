import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CoursesCard, SearchBar } from './components';
import { Button } from '../../common';
import { useEffect } from 'react';
import { fetchUserRole } from '../../store/user/thunk';
import { fetchCourses } from '../../store/courses/thunk';
import { fetchAuthors } from '../../store/authors/thunk';

const Courses = () => {
	const navigate = useNavigate();

	const courses = useSelector((state) => state.courses.courses);
	const isLoading = useSelector((state) => state.courses.loading);
	const isError = useSelector((state) => state.courses.error);

	const [searchParams, setSearchParams] = useSearchParams();
	const courseQuery = searchParams.get('course') || '';

	const token = useSelector((state) => state.user.token);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserRole(token));
	}, [token, dispatch]);

	useEffect(() => {
		dispatch(fetchAuthors(token));
	}, [token, dispatch]);

	useEffect(() => {
		dispatch(fetchCourses(token));
	}, [token, dispatch]);

	useEffect(() => {
		if (courses?.length === 0) {
			navigate('/courses/empty');
		}
	}, [courses, navigate]);

	return (
		<>
			{isLoading ? (
				<h2 style={{ textAlign: 'center' }}>Loading...</h2>
			) : isError ? (
				<h2 style={{ textAlign: 'center' }}>Failed courses loading</h2>
			) : (
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
			)}

			<ul>
				{courses &&
					courses
						?.filter(
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
