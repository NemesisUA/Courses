import { createAsyncThunk } from '@reduxjs/toolkit';
import { LocalStorageService, LS_KEYS } from '../services/LocalStorageService';

export const fetchUserRole = createAsyncThunk(
	'user/fetchUserRole',
	async function (token, { rejectWithValue }) {
		try {
			const response = await fetch('http://localhost:4000/users/me', {
				headers: {
					Authorization: token,
				},
			});

			const result = await response.json();

			if (!result.successful) {
				throw new Error('Failed to get role!');
			}

			const role = result.result.role;

			LocalStorageService.set(LS_KEYS.USER, {
				...LocalStorageService.get(LS_KEYS.USER),
				role: role,
			});

			return role;
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);
