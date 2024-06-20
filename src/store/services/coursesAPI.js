import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coursesAPI = createApi({
	reducerPath: 'coursesAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4000/courses/',
		prepareHeaders: (headers, { getState }) => {
			const token = getState().user.token;
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getCourses: builder.query({
			query: () => 'all',
		}),
	}),
});

export const { useGetCoursesQuery } = coursesAPI;
