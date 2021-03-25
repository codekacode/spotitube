import styled from "@emotion/styled";
import Body from "../components/contents/Body";
import NavBar from "../components/contents/NavBar";
import PlayerFooter from "../components/contents/PlayerFooter";


function SpotitubeHome() {
  return(
    <Main>
      <div className="player__main">
        <NavBar />
        <Body />
      </div>
      <PlayerFooter />
    </Main>
  )
}

export default SpotitubeHome;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  & .player__main {
    display: flex;
    flex-grow: 1
  }
`;
