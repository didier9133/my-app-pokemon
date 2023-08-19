import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeApi = createApi({
  reducerPath: "pokeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2",
  }),
  endpoints: (builder) => ({
    getPokemosn: builder.query({
      query: (limit) => `${limit}`,
    }),
  }),
});

export const { useGetPokemosnQuery } = pokeApi;
