import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAuthors = createAsyncThunk(
	'authors/fetchAuthors',
	async function (token, { rejectWithValue }) {
		try {
			const response = await fetch('http://localhost:4000/authors/all', {
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
