import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
	CourseForm,
	CourseInfo,
	Courses,
	EmptyCourseList,
	Layout,
	Login,
	PrivateRoute,
	Registration,
} from './components';
import PageNotFound from './pages/PageNotFound';

import RequireAuth from './hoc/RequireAuth';

import './App.css';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Navigate to='/courses' />} />
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

				<Route
					path='add'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>

				<Route
					path='update/:courseId'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>
			</Route>
		</Routes>
	);
};

export default App;
