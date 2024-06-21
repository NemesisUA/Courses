import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import coursesReducer from './courses/coursesSlice';
import authorsReducer from './authors/authorsSlice';

import { authorsAPI } from './services/authorsAPI';

export default configureStore({
	reducer: {
		user: userReducer,
		courses: coursesReducer,
		authors: authorsReducer,
		//[coursesAPI.reducerPath]: coursesAPI.reducer,
		[authorsAPI.reducerPath]: authorsAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authorsAPI.middleware),
	//.concat(coursesAPI.middleware),
});
