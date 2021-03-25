import styled from "@emotion/styled";
import BodyInfo from "../ui/BodyInfo";
import Header from "./Header";

export default function Body() {
  return (
    <StyledBody>
      <Header />
      <BodyInfo />
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

