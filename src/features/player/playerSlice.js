import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "player",
    initialState: {
      items: [],
      song_id: "4wv8Oz_j438",
      status: "idle",
      error: null,
    },
  
    reducers: {
      cleanupPlayer: (state) => {
        state.song_id = "";
      },
      addSongId: (state, action) => {
        state.song_id = action.payload;
      },
    },
  });
  
  export const{
    cleanupPlayer,
    addSongId,
  } = playerSlice.actions; 
  
  export default playerSlice.reducer;