import { createSlice } from '@reduxjs/toolkit';
import { coursesAPI } from '../services/coursesAPI';

const initialState = {
	courses: [],
};

const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		setCourses: (state, action) => {
			state.courses = action.payload;
		},
		addCourse: (state, action) => {
			state.courses = [...state.courses, action.payload];
		},
		deleteCourse: (state, action) => {
			state.courses = state.courses.filter(
				(course) => course.id !== action.payload.id
			);
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			coursesAPI.endpoints.getCourses.matchFulfilled,
			(state, action) => {
				state.courses = action.payload.result;
			}
		);
	},
});

export const { setCourses, addCourse, deleteCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
