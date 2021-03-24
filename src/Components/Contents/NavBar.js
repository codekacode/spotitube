import ButtonNav from "../UI/ButtonNav"
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  background: #000;
  width: 224px;
  height: 100%;
`;
const List = styled.p`
  color: white;
`;

function NavBar(){
  return(
    <StyledDiv>
      <ButtonNav label="Inicio" icon="home"/>
      <ButtonNav label="Buscar" icon="search_small"/>
      <ButtonNav label="Premium" icon="credit"/>
      <List>Listas de Reproduccion</List>
    </StyledDiv>
  );
}

export default NavBar;