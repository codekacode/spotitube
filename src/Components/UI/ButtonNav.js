/** @jsxImportSource @emotion/react */
import Icons from "../UI/Icons"
//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Colors from "./Colors"

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: 'Nunito Sans', sans-serif;
  border: none;
  border-left: 4px solid ${Colors.primary};
  background: #030303;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  gap: 9px;
  padding: 8px 20px;
  & img{
    width: 20.5px;
    height: 22.8px;
  }
`;



function ButtonNav({label, icon}){
  return(
    <StyledButton>
      <img alt={`icon_`+ icon} src={Icons[icon]}/>
      {label}
    </StyledButton>
  );
}

export default ButtonNav;