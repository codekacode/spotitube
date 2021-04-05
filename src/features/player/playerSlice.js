import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "player",
    initialState: {
      items: [],
      song_status: false,
      song_id: "",
      status: "idle",
      error: null,
    },
  
    reducers: {
      cleanupPlayer: (state) => {
        state.song_id = "";
        state.song_status = "";
      },
      setStatusSong: (state, action) =>{
        state.song_status = action.playload;
      },
      addSongId: (state, action) => {
        state.song_id = action.payload;
      },
    },
  });
  
  export const{
    cleanupPlayer,
    setStatusSong,
    addSongId,
  } = playerSlice.actions; 
  
  export default playerSlice.reducer;