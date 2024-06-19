// chatApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  window.location.hostname === 'edutech-hazel.vercel.app'
    ? 'https://apis-eta-smoky.vercel.app/api/'
    : 'http://localhost:9001/api/';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    FormchatSchema: builder.mutation({
      query: (body) => ({
        url: 'FormchatSchema/form',
        method:'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),

  }),
});

export const { useFormchatSchemaMutation } = chatApi;
