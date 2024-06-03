import { createContext, useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from '../constants';

export const CoursesContext = createContext([]);

const CoursesProvider = ({ children }) => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const value = {
		courses,
		setCourses,
		authors,
		setAuthors,
	};
	return (
		<CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
	);
};

export default CoursesProvider;
