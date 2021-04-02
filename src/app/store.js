import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videoList/videoSlice";
import playlistReducer from "../features/playList/playlistSlice"

export default configureStore({
  reducer: {
    videos: videosReducer,
    playlist: playlistReducer,
  },
});