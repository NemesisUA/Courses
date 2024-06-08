import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {
	CourseInfo,
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
import { AuthProvider } from './hoc/AuthProvider';

const App = () => {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route
						index
						element={
							<RequireAuth>
								<HomePage />
							</RequireAuth>
						}
					/>
					<Route path='/courses/:id' element={<CourseInfo />} />
					<Route path='/no-courses' element={<EmptyCourseList />} />
					<Route path='/create-course' element={<CreateCourse />} />
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
					<Route path='*' element={<PageNotFound />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
};

export default App;
