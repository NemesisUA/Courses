import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CourseInfo, EmptyCourseList, Layout } from './components';
import HomePage from './pages/HomePage';

import './App.css';
import PageNotFound from './pages/PageNotFound';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='/courses/:id' element={<CourseInfo />} />
				<Route path='/no-courses' element={<EmptyCourseList />} />
				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
