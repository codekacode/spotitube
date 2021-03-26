import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videoList/videoSlice";


export default configureStore({
  reducer: {
    videos: videosReducer,
  },
});
