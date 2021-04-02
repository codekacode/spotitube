import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../features/videoList/videoSlice";
//import { fetchPlaylist} from '../features/playList/playlistSlice'
import Body from '../components/contents/Body'
export default function Home() {
 const dispatch = useDispatch();
 const videos = useSelector((state) => state.videos.items);
 const playlist = useSelector((state) => state.playlist.items);
 const status = useSelector((state) => state.videos.status);

  if (status === "idle") {
    dispatch(fetchVideos("coldplay"));
  }
  
  

  console.log(videos, playlist)
  
  return (
    <Body/>
  )
}