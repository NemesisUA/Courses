import { createAsyncThunk } from '@reduxjs/toolkit';
import { courseDeleted } from './coursesSlice';

export const fetchCourses = createAsyncThunk(
	'courses/fetchCourses',
	async function (token, { rejectWithValue }) {
		try {
			const response = await fetch('http://localhost:4000/courses/all', {
				headers: {
					Authorization: token,
				},
			});

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
			const response = await fetch(`http://localhost:4000/courses/${id}`, {
				headers: {
					Authorization: token,
				},
				method: 'DELETE',
			});

			const result = await response.json();

			if (!result.successful) {
				throw new Error('Failed to delete course!');
			}

			dispatch(courseDeleted({ id }));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
