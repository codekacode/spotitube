import styled from "@emotion/styled";
import {BiSearch} from 'react-icons/bi';

const StyledDiv = styled.div`
  width: 200px;
  flex: 0.5;
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 30px;
  color: gray;
  align-items: center;
  border: 1px solid black;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: black;
    font-size: 16px;
  }
`;

export default function Input() {
  return (
    <StyledDiv>
      <BiSearch className="icon"/>
      <StyledInput placeholder="Buscar"/>
    </StyledDiv>
  );
}