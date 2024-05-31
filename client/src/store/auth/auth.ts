// authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  window.location.hostname === 'edutech-hazel.vercel.app'
    ? 'https://apis-eta-smoky.vercel.app/api/'
    : 'http://localhost:8010/api/';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'singin',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: 'singup',
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
