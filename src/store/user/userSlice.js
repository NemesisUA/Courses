import { createSlice } from '@reduxjs/toolkit';
import { LocalStorageService, LS_KEYS } from '../services/LocalStorageService';

const initialState = {
	isAuth: LocalStorageService.get(LS_KEYS.TOKEN) ? true : false,
	name: LocalStorageService.get(LS_KEYS.USER)?.name || '',
	email: LocalStorageService.get(LS_KEYS.USER)?.email || '',
	token: LocalStorageService.get(LS_KEYS.TOKEN) || '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logoutUser(state) {
			LocalStorageService.remove(LS_KEYS.TOKEN);
			LocalStorageService.remove(LS_KEYS.USER);

			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.token = '';
		},
		loginUser(state, action) {
			const { result: token, user } = action.payload;

			LocalStorageService.set(LS_KEYS.TOKEN, token);
			LocalStorageService.set(LS_KEYS.USER, user);

			state.isAuth = true;
			state.name = user.name;
			state.email = user.email;
			state.token = token;
		},
	},
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
