import { createContext, useState } from 'react';
import { mockedCoursesList } from '../constants';

export const CoursesContext = createContext(null);

const CoursesProvider = ({ children }) => {
	const [courses, setCourses] = useState(mockedCoursesList);

	return (
		<CoursesContext.Provider value={{ courses, setCourses }}>
			{children}
		</CoursesContext.Provider>
	);
};

export default CoursesProvider;
