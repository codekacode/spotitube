import styled from "@emotion/styled";

export default function BodyInfo() {
  return (
    <StyledBodyInfo>
      <img className="image__body__info" src="https://dancettradio.files.wordpress.com/2013/09/artworks-000057515096-7ajzbl-original.jpg?w=768" />
      <div className="body__infoText">
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>Description</p>
      </div>
    </StyledBodyInfo>
  )
}

const StyledBodyInfo = styled.div`
  display:flex;
  & .body__infoText{
    flex: 1;
  }
  & .body__infoText > h2{
    font-size: 48px;
    margin-bottom: 10px;
  }
  & .image__body__info{
    height: 15vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.3);
  }
`;