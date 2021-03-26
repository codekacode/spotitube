import ButtonNav from "../ui/ButtonNav"
import styled from "@emotion/styled";

function NavBar(){
  return(
    <StyledDiv>
      <img className="navbar__logo" alt="SpotifyLogo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>
      <ButtonNav label="Inicio" icon="home"/>
      <ButtonNav label="Buscar" icon="search_small"/>
      <ButtonNav label="Premium" icon="credit"/>
      <List>Listas de Reproduccion</List>
    </StyledDiv>
  );
}

export default NavBar;

const StyledDiv = styled.div`
  display: flex;
  height: 100vh;
  min-width: 230px;
  flex-direction: column;
  background: #040404;
  color: #fff;
  flex: 0.2;
  & .navbar__logo{
    margin-right: auto;
    object-fit: contain;
    height: 85px;
    padding: 10px;
  }
`;
const List = styled.p`
  margin-top: 50px;
  margin-left: 10px;
  padding: 5px;
  font-size: 16px;
`;