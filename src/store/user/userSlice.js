import { createSlice } from '@reduxjs/toolkit';
import { LocalStorageService, LS_KEYS } from '../services/LocalStorageService';
import { fetchUserRole } from './thunk';

const initialState = {
	isAuth: LocalStorageService.get(LS_KEYS.TOKEN) ? true : false,
	name: LocalStorageService.get(LS_KEYS.USER)?.name || '',
	email: LocalStorageService.get(LS_KEYS.USER)?.email || '',
	role: LocalStorageService.get(LS_KEYS.USER)?.role || '',
	token: LocalStorageService.get(LS_KEYS.TOKEN) || '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logoutUser(state) {
			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.role = '';
			state.token = '';
		},
		loginUser(state, action) {
			const { result: token, user } = action.payload;
			state.isAuth = true;
			state.name = user.name;
			state.email = user.email;
			state.token = token;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserRole.fulfilled, (state, action) => {
			state.role = action.payload;
		});
	},
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
