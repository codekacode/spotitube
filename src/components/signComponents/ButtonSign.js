import styled from "@emotion/styled";


const StyledButton = styled.button`
  border-radius: 500px;
  border: 2px solid #616467;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 450px;
  min-width: 160px;
  &:hover{
    color: #FFFFFF;
    background-color: ${(props) => (props.color)};
  }
`; 

function ButtonSign({color='#616467', children}){

  return(
    <StyledButton color={color}>
      {children}
    </StyledButton>
  )
};

export default ButtonSign;