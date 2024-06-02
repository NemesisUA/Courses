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

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='/courses/:id' element={<CourseInfo />} />
				<Route path='/no-courses' element={<EmptyCourseList />} />
				<Route path='/create-course' element={<CreateCourse />} />
				<Route path='login' element={<Login />} />
				<Route path='registration' element={<Registration />} />
				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
