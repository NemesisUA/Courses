import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk(
	'courses/fetchCourses',
	async function (token, { rejectWithValue, dispatch }) {
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
