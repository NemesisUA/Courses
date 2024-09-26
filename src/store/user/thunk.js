import { createAsyncThunk } from '@reduxjs/toolkit';
import { LocalStorageService, LS_KEYS } from '../services/LocalStorageService';
import { logoutUser } from './userSlice';

export const fetchUserRole = createAsyncThunk(
	'user/fetchUserRole',
	async function (token, { rejectWithValue }) {
		try {
			const response = await fetch(
				'https://courses-api-a3hw.onrender.com/users/me',
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

export const requestLogout = createAsyncThunk(
	'user/requestLogout',
	async function (_, { rejectWithValue, dispatch, getState }) {
		const token = getState().user.token;
		try {
			const response = await fetch(
				'https://courses-api-a3hw.onrender.com/logout',
				{
					headers: {
						Authorization: token,
					},
					method: 'DELETE',
				}
			);

			if (!response.ok) {
				throw new Error('Failed to logout');
			}

			dispatch(logoutUser());

			LocalStorageService.remove(LS_KEYS.TOKEN);
			LocalStorageService.remove(LS_KEYS.USER);
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);
