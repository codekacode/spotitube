import styled from "@emotion/styled";

export default function SongList() {
  return (
    <SongListStyled>
      <h1>Hue</h1>
      <p>Sohn</p>
      <p>Hue Album</p>
    </SongListStyled>
  )
}

const SongListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  gap: 150px;
  &:hover{
    cursor: pointer;
    background: #000;
    opacity: 0.8;
  }
  & h1{
    font-size: 18px;
  }
  & p {
    color: gray;
  }
`;
