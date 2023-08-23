import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useGetOneByLibrarieQueryI } from "./types/useGetOneByLibrarieQuery";
import { FetchLibrariesI } from "./types/useGetSearchLibrariesQuery";

export const librariesApi = createApi({
  reducerPath: "librariesApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.cdnjs.com/libraries",
  }),
  endpoints: (builder) => ({
    getOneByLibrarie: builder.query<
      useGetOneByLibrarieQueryI,
      { librarie: string }
    >({
      query: (librarie) => `/${librarie.librarie}`,
    }),
    getSearchLibraries: builder.query<FetchLibrariesI, { search: string }>({
      query: (search) =>
        `?fields=filename,description,version,github&search=${search.search}`,
    }),
  }),
});

export const { useGetOneByLibrarieQuery, useGetSearchLibrariesQuery } =
  librariesApi;
