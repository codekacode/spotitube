import styled from "@emotion/styled";
import InputSign from "../components/signComponents/InputSign";
import Colors from "../components/ui/Colors";
import DividerLine from "../components/signComponents/DividerLine";
import ButtonSign from "../components/signComponents/ButtonSign";

const StyedLogin= styled.div`
  background-color: ${Colors.white};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const StyedLink = styled.div`
  font-size:16px;
  font-weight:400;
  &:hover{
    color: #1da64d;
    text-decoration: underline;
  }
`;

function Login () {

return(
  <StyedLogin>
    <DividerLine dividerText="or"></DividerLine>
    <InputSign
    labelText='Email address or username '
    placeholder='Email address or username '
    inputType='text'
    value=''
    onChange=''
    inputName=''
    />
    <InputSign
      labelText='Password'
      placeholder='Password'
      inputType='password'
      value=''
      onChange=''
      inputName=''
    />
    <div>
      <StyedLink>Forgot your pasword?</StyedLink>
    </div>
    <h2>Don't have an account?</h2>
    <ButtonSign>SIGN UP FOR SPOTIFY</ButtonSign>
  </StyedLogin>
)

};

export default Login;