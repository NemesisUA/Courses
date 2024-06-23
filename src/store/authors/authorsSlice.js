import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthors } from './thunk';

const initialState = {
	authors: [],
	loading: false,
	error: null,
};

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		authorAdded: (state, action) => {
			state.authors = [...state.authors, action.payload.result];
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchAuthors.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAuthors.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.authors = action.payload;
			})
			.addCase(fetchAuthors.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.courses = [];
			});
	},
});

export const { authorAdded } = authorsSlice.actions;

export default authorsSlice.reducer;
