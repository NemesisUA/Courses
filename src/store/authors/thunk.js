import { createAsyncThunk } from '@reduxjs/toolkit';
import { authorAdded } from './authorsSlice';

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

export const addAuthor = createAsyncThunk(
	'authors/addAuthor',
	async function ({ newAuthor, token }, { dispatch, rejectWithValue }) {
		try {
			const response = await fetch(`http://localhost:4000/authors/add`, {
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
				method: 'POST',

				body: JSON.stringify(newAuthor),
			});

			const result = await response.json();

			if (!result.successful) {
				throw new Error('Failed to add new author!');
			}

			dispatch(authorAdded({ result }));

			return result.result;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
