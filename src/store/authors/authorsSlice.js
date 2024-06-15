import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	authors: [],
};

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		setAuthors: (state, action) => {
			state.authors = action.payload;
		},
		addAuthor: (state, action) => {
			state.authors = [...state.authors, action.payload];
		},
	},
});

export const { setAuthors, addAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
