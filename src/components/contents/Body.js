import styled from "@emotion/styled";
import Playlist from "../ui/Playlist";
import Header from "../contents/Headers/HeaderLibrary"

export default function Body() {
  return (
    <StyledBody>
      <Header/>
      <Playlist />
    </StyledBody>
  )
}

const StyledBody = styled.div`
  width: 100%;
  height: 100vh;
  flex: 0.8;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(91, 87, 115);
  color: #fff;
`;

