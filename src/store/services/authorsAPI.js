import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authorsAPI = createApi({
	reducerPath: 'authorsAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4000/authors/',
		prepareHeaders: (headers, { getState }) => {
			const token = getState().user.token;
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getAuthors: builder.query({
			query: () => 'all',
		}),
	}),
});

export const { useGetAuthorsQuery } = authorsAPI;
