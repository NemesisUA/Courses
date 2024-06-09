import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {
	CourseInfo,
	Courses,
	CreateCourse,
	EmptyCourseList,
	Layout,
	Login,
	Registration,
} from './components';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

import './App.css';
import RequireAuth from './hoc/RequireAuth';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='login' element={<Login />} />
				<Route path='registration' element={<Registration />} />
				<Route path='*' element={<PageNotFound />} />
			</Route>

			<Route
				path='courses'
				element={
					<RequireAuth>
						<Layout />
					</RequireAuth>
				}
			>
				<Route index element={<Courses />} />
				<Route path=':courseId' element={<CourseInfo />} />
				<Route path='empty' element={<EmptyCourseList />} />
				<Route path='add' element={<CreateCourse />} />
			</Route>
		</Routes>
	);
};

export default App;
