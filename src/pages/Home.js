import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../features/videoList/videoSlice";
import Template from "./Template"

export default function Home() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.items);
  const status = useSelector((state) => state.videos.status);
  console.log(videos)
  if (status === "idle") {
    dispatch(fetchVideos("the Weekend"));
  }
  return (
    <Template>
    </Template>
  )
}