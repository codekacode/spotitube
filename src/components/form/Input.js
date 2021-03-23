import styled from "@emotion/styled";
import {BiSearch} from 'react-icons/bi';

const StyledDiv = styled.div`
  padding: 10px 10px;
  width: 300px;
  background: red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
  gap: 16px;
  padding: 4px 41px;
`;

const StyledInput = styled.input`
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  color: black;
  font-size: 18px;
  background: yellow;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: black;
    font-size: 18px;
  }
`;

export default function Input() {
  return (
    <StyledDiv>
      <BiSearch className="icon"/>
      <StyledInput />
    </StyledDiv>
  );
}