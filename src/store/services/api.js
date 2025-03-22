import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }), // Cambiá esto si tu API está en otro host.
  tagTypes: ['Entries'], // Esto permite invalidar caché por tipo de dato.
  endpoints: (builder) => ({
    getEntries: builder.query({
      query: () => '/entries',
      providesTags: ['Entries'],
    }),
    getEntryCards: builder.query({
      query: () => '/entries/entry-cards'
    }),
    createEntry: builder.mutation({
      query: (newEntry) => ({
        url: '/entries',
        method: 'POST',
        body: newEntry,
      }),
      invalidatesTags: ['Entries'],
    }),
    getEntryById: builder.query({
      query: (id) => `/entries/${id}`,
      providesTags: (result, error, id) => [{ type: 'Entries', id }],
    }),
  }),
});

// Exportamos los hooks para usar en los componentes
export const {
  useGetEntriesQuery,
  useGetEntryCardsQuery,
  useGetEntryByIdQuery,
  useCreateEntryMutation,
} = api;
