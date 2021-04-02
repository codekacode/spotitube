import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI_PLAYLIST, KEY_API } from "../../app/config"

export const fetchPlaylist = createAsyncThunk(
  "video/fetchPlaylist",
  async (Search_id) => {
    const response = await fetch(`${BASE_URI_PLAYLIST + Search_id + KEY_API}&maxResults=20` , {
      method: "GET",   
    });

  const data = await response.json();
    if (!response.ok) {
      console.log(data);
      throw new Error("Something went wrong");
    }
    return { playlist: data };
  }
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    items: [],
    list_id: "",
    status: "idle",
    error: null,
  },
  reducers: {
    cleanupPlayListId: (state) => {
      state.items = [];
    },
    addPlayListId: (state, action) => {
      state.items.push(action.payload.item);
    },
    removeItemFromCart: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.item.id),
      };
    },
  },
  extraReducers: {
    [fetchPlaylist.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPlaylist.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload.playlist;
    },
    [fetchPlaylist.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default playlistSlice.reducer;