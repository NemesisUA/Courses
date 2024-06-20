import { createSlice } from '@reduxjs/toolkit';
import { authorsAPI } from '../services/authorsAPI';

const initialState = {
	authors: [],
};

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		setAuthors: (state, action) => {
			state.authors = [...action.payload.result];
		},
		addAuthor: (state, action) => {
			state.authors = [...state.authors, action.payload];
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			authorsAPI.endpoints.getAuthors.matchFulfilled,
			(state, action) => {
				state.authors = action.payload.result;
			}
		);
	},
});

export const { setAuthors, addAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
