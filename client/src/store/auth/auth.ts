// authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  window.location.hostname === 'edutech-hazel.vercel.app'
    ? 'https://apis-eta-smoky.vercel.app/ap'
    : 'http://localhost:8010/api/';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'signin',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: 'signup',
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
