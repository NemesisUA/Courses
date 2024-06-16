import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CoursesCard, SearchBar } from './components';
import { Button } from '../../common';

import { setCourses } from '../../store/courses/coursesSlice';
import { setAuthors } from '../../store/authors/authorsSlice';

const Courses = () => {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(null);

	const dispatch = useDispatch();
	const courses = useSelector((state) => state.courses.courses);
	const authors = useSelector((state) => state.authors.authors);

	const [searchParams, setSearchParams] = useSearchParams();
	const courseQuery = searchParams.get('course') || '';

	useEffect(() => {
		const url = 'http://localhost:4000/authors/all';

		const fetchData = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Failed to fetch');
				}
				const result = await response.json();

				dispatch(setAuthors(result.result));
			} catch (error) {
				setIsError(error);
			} finally {
				setIsLoading(false);
			}
		};

		if (authors.length < 1) fetchData();
	}, [authors, dispatch]);

	useEffect(() => {
		const url = 'http://localhost:4000/courses/all';

		const fetchData = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Failed to fetch');
				}
				const result = await response.json();

				dispatch(setCourses(result.result));
				if (result.result === 0) {
					navigate('/courses/empty');
				}
			} catch (error) {
				setIsError(error);
			} finally {
				setIsLoading(false);
			}
		};

		if (courses.length < 1) fetchData();
	}, [courses, dispatch, navigate]);

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{isError && <p>Loading Failed</p>}

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
