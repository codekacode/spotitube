import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videoList/videoSlice";
import searchReducer from "../features/search/searchSlice";


export default configureStore({
  reducer: {
    videos: videosReducer,
    search: searchReducer,
  },
});