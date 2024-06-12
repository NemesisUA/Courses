import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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

CoursesProvider.propTypes = {
	children: PropTypes.node,
};

export default CoursesProvider;
