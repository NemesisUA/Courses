import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import coursesReducer from './courses/coursesSlice';
import authorsReducer from './authors/authorsSlice';

export default configureStore({
	reducer: {
		user: userReducer,
		courses: coursesReducer,
		authors: authorsReducer,
	},
});
