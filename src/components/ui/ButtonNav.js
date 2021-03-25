/** @jsxImportSource @emotion/react */
import Icons from "./Icons"
import styled from "@emotion/styled";
import Colors from "./Colors"

function ButtonNav({label, icon}){
  return(
    <StyledButton className="option">
      <img alt={`icon_`+ icon} src={Icons[icon]}/>
      {label}
    </StyledButton>
  );
}

export default ButtonNav;

const StyledButton = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 40px;
  font-family: 'Nunito Sans', sans-serif;
  transition: 200ms color ease-in;
  border: none;
  border-left: 4px solid #030303;;
  background: #030303;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #7d7d7d;
  margin-top: 10px;
  gap: 10px;
  padding: 8px 20px;
  & img{
    width: 20.5px;
    height: 22.8px;
  }
  &:hover{
    color:white;
    border-left: 4px solid ${Colors.primary};
  }
`;

