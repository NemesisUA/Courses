import { createSlice } from '@reduxjs/toolkit';
import { fetchCourses } from './thunk';

const initialState = {
	courses: [],
	loading: false,
	error: null,
};

const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		addCourse: (state, action) => {
			state.courses = [...state.courses, action.payload];
		},
		deleteCourse: (state, action) => {
			state.courses = state.courses.filter(
				(course) => course.id !== action.payload.id
			);
		},
		updateCourse: () => {},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchCourses.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchCourses.fulfilled, (state, action) => {
				state.loading = false;
				state.courses = action.payload;
			})
			.addCase(fetchCourses.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.courses = [];
			});
	},
});

export const { setCourses, addCourse, deleteCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
