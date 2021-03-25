import styled from "@emotion/styled";
import {BiSearch} from 'react-icons/bi';

export default function Input() {
  return (
    <StyledDiv>
      <BiSearch className="icon"/>
      <StyledInput placeholder="Buscar" type="text"/>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 250px;
  flex: 0.5;
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 30px;
  color: gray;
  align-items: center;
  & .icon {
    margin-right: 10px;
  }
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: grey;
    font-size: 16px;
  }
`;