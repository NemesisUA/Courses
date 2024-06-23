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
		courseAdded: (state, action) => {
			state.courses = [...state.courses, action.payload.addedCourse];
		},
		courseDeleted: (state, action) => {
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
				state.error = null;
			})
			.addCase(fetchCourses.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.courses = action.payload;
			})
			.addCase(fetchCourses.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.courses = [];
			});
	},
});

export const { setCourses, courseAdded, courseDeleted } = coursesSlice.actions;

export default coursesSlice.reducer;
