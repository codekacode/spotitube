//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Colors from "../components/ui/Colors"
import Player from "../components/contents/Player"
import NavBar from "../components/contents/NavBar";
import Body from "../components/contents/Body";


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentDiv = styled.div`
  display: flex;
  flex-grow : 1;
`;

const PlayerDiv = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 96px;
  background: ${Colors.black3};
`;

function Template ({children}){
  return(
    <StyledDiv>
        <ContentDiv>
          <NavBar/>
          <Body />
        </ContentDiv>
        <PlayerDiv>
          <Player />
        </PlayerDiv>
    </StyledDiv>
  )
}

export default Template

