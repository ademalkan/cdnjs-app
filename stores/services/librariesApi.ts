import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchLibrariesI } from "../libraries-store/interface";

export const librariesApi = createApi({
  reducerPath: "librariesApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://api.cdnjs.com/libraries?fields=filename,description,version,github",
  }),
  endpoints: (builder) => ({
    getLibraries: builder.query<FetchLibrariesI, null>({
      query: () => "users",
    }),
    getSearchLibraries: builder.query<FetchLibrariesI, { search: string }>({
      query: (search) => `&search=${search.search}`,
    }),
  }),
});

export const { useGetLibrariesQuery, useGetSearchLibrariesQuery } =
  librariesApi;
