import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3999/api/v1/'
  }),
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body: { user: { email: string; password: string } }) => ({
        url: 'auth/sign-in',
        method: 'post',
        body
      })
    }),
    signupUser: builder.mutation({
      query: (body: {
        user: {
          firstName: string;
          lastName: string;
          login: string;
          email: string;
          password: string;
        };
      }) => ({
        url: 'auth/sign-up',
        method: 'post',
        body
      })
    }),
    getInfoUser: builder.mutation({
      query: () => ({
        url: 'user',
        method: 'get',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    })
  })
});

export const { useSigninUserMutation, useSignupUserMutation, useGetInfoUserMutation } = authApi;
