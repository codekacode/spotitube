import NavBar from "../components/Contents/NavBar"
//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Colors from "../components/UI/Colors"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: ${Colors.black2};
`;

const PlayerDiv = styled.div`
  width: 100%;
  height: 96px;
  background: ${Colors.black3};
`;

function Template ({children}){
  return(
    <StyledDiv>
        <ContentDiv>
          <NavBar/>
          {children}
        </ContentDiv>
        <PlayerDiv>
          <p>Payer</p>
        </PlayerDiv>
    </StyledDiv>
  )
}

export default Template