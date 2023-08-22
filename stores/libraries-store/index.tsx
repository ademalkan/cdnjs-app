import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchLibrariesI, initialStateI } from "./interface";
import { librariesMock } from "@/mocks/librariesMock";

const initialState: initialStateI = {
  libraries: librariesMock,
  loading: true,
  error: false,
  searchQuery: "",
};

export const fetchLibraries = createAsyncThunk<FetchLibrariesI>(
  "cdn/getAllLibraries",
  async () => {
    const response = await fetch(
      "https://api.cdnjs.com/libraries?fields=filename,description,version,github"
    );
    const libraries = response.json();
    return libraries;
  }
);

export const { reducer, actions } = createSlice({
  name: "libraries",
  initialState,
  reducers: {
    SEARCH_QUERY: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLibraries.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(fetchLibraries.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.libraries = action?.payload;
    });
    builder.addCase(fetchLibraries.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});
