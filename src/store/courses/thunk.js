import { createAsyncThunk } from '@reduxjs/toolkit';
import { courseDeleted } from './coursesSlice';

export const fetchCourses = createAsyncThunk(
	'courses/fetchCourses',
	async function (token, { rejectWithValue }) {
		try {
			const response = await fetch(
				'https://courses-api-a3hw.onrender.com/courses/all',
				{
					headers: {
						Authorization: token,
					},
				}
			);

			const result = await response.json();

			if (!result.successful) {
				throw new Error('Failed to get role!');
			}

			return result.result;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const deleteCourse = createAsyncThunk(
	'courses/deleteCourse',
	async function ({ id, token }, { dispatch, rejectWithValue }) {
		try {
			const response = await fetch(
				`https://courses-api-a3hw.onrender.com/courses/${id}`,
				{
					headers: {
						Authorization: token,
					},
					method: 'DELETE',
				}
			);

			const result = await response.json();

			if (!result.successful) {
				throw new Error('Failed to delete course!');
			}

			dispatch(courseDeleted({ id }));
			return result.result;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const addCourse = createAsyncThunk(
	'courses/addCourse',
	async function ({ newCourse, token }, { dispatch, rejectWithValue }) {
		try {
			const response = await fetch(`http://localhost:4000/courses/add`, {
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
				method: 'POST',

				body: JSON.stringify(newCourse),
			});

			const result = await response.json();

			if (!result.successful) {
				throw new Error('Failed to add new course!');
			}

			const addedCourse = result.result;
			//dispatch(courseAdded({ addedCourse }));
			return addedCourse;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const editCourse = createAsyncThunk(
	'courses/addCourse',
	async function (
		{ courseId: id, newCourse, token },
		{ dispatch, rejectWithValue }
	) {
		try {
			const response = await fetch(`http://localhost:4000/courses/${id}`, {
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
				method: 'PUT',

				body: JSON.stringify(newCourse),
			});

			const result = await response.json();

			if (!result.successful) {
				throw new Error('Failed to edit the course!');
			}

			const updatedCourse = result.result;

			//dispatch(courseUpdated({ updatedCourse }));

			return updatedCourse;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
