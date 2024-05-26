// authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  window.location.hostname === 'edutech-hazel.vercel.app'
    ? 'https://api2-tau-navy.vercel.app/'
    : 'http://localhost:8010/api/';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: 'user/signup',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
