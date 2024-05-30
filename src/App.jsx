import { useState } from 'react';

import { Courses, EmptyCourseList, Header, CourseInfo } from './components';
import { mockedCoursesList, mockedAuthorsList } from './constants';

import './App.css';
import { SearchBar } from './components/Courses/components';
import { Button } from './common';

function App() {
	const [isShown, setIsShown] = useState(true);
	const [courseInfo, setCourseInfo] = useState({});

	return (
		<div className='app'>
			<Header />
			<div className='wrapper'>
				{isShown && (
					<div className='user-actions-wrapper'>
						<SearchBar />
						<Button buttonText='Add new course' />
					</div>
				)}

				{isShown && mockedCoursesList.length && (
					<Courses
						coursesList={mockedCoursesList}
						authorsList={mockedAuthorsList}
						setCourseInfo={setCourseInfo}
						setIsShown={setIsShown}
					/>
				)}

				{isShown && mockedCoursesList.length === 0 && <EmptyCourseList />}

				{!isShown && (
					<CourseInfo
						{...courseInfo}
						setIsShown={setIsShown}
						setCourseInfo={setCourseInfo}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
