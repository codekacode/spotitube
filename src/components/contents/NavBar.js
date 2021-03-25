import ButtonNav from "../ui/ButtonNav"
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: #000;
  flex: 0.2;
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