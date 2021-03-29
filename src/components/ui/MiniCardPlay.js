import styled from "@emotion/styled";
import { ReactComponent as PlayIcon } from '../../svgs/playIcon.svg'

export default function MiniCardPlay() {
  return (
    <div className="card-wrapper">
      <StyleCard>
        <StyleCardImg>
          <img src='https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'/>
        </StyleCardImg>
        <StyleCardContent>
          <h3>Playlist Name</h3>
        </StyleCardContent>
        <StyleIcon className="play-icon">
          <PlayIcon />
        </StyleIcon>
      </StyleCard>
    </div>
  )
}

const StyleCard = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  width: 400px;
  position: relative;
  cursor: pointer;
  background: #3c4347;
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    background: #282828;
    transition: 180ms background ease-in-out;
    .play-icon{
      opacity: 1;
      transition: 180ms opacity ease-in-out;
    }
  }
`;

const StyleCardImg = styled.div`
  height: 90px;
  width: 90px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyleCardContent = styled.div`
  display: flex;
  margin-top: 8px;
  & h3 {
    font-weight: 600;
    font-size: 1.2rem;
    margin-left: 20px;
    margin-bottom: 0;
    letter-spacing: 0.6px;
  }
  span {
    margin-top: 8px;
    font-size: 1rem;
    color: #b3b3b3;
  }
`;

const StyleIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  background: #1db954;
  margin-left: auto;
  opacity: 0;
  position: absolute;
  right:20px;
  bottom: 25px;
  & svg {
    margin: auto;
    height: 15px;
    width: 15px
  }
`;
