import styled from "@emotion/styled";
// import BodyInfo from "../ui/BodyInfo";
// import BodySongs from "../ui/BodySongs";
import Playlist from "../ui/Playlist";
import CardPlay from "../ui/CardPlay";
import MiniCardPlay from "../ui/MiniCardPlay";
import PlaylistInfo from "../ui/PlaylistInfo";
import PlaylistSongs from "../ui/PlaylistSongs";
import Header from "./Header";

export default function Body() {
  return (
    <StyledBody>
      <Header />
      <Playlist />
      {/* <BodyInfo />
      <BodySongs /> */}
      <CardPlay />
      <MiniCardPlay />
      <PlaylistInfo />
      <PlaylistSongs />
    </StyledBody>
  )
}

const StyledBody = styled.div`
  padding: 30px;
  width: 100%;
  height: 100vh;
  flex: 0.8;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(91, 87, 115);
  color: #fff;
`;

