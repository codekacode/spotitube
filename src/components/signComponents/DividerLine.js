import styled from "@emotion/styled";

const Line = styled.div`
  display: flex;
  gap: 10px;
  & > div {
    width: 50%;
    margin: auto;
    border: 1px solid #d9dadc;
  }
`;

function DividerLine({dividerText}){

return(
  <Line>
    <div></div>
    {dividerText}
    <div></div>
  </Line>
)
};

export default DividerLine;
