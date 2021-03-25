import styled from '@emotion/styled';
import Icons from "../ui/Icons";
import Colors from "../ui/Colors";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongList from './SongList';

export default function BodySongs() {
  return (
    <StyledBodySongs>
      <StyledPlay id="controls">
        <StyledIcon alt="play_filled.svg" src={Icons.play_filled} className="play"/>
        <StyledIcon alt="play_filled.svg" className="hide pause" src={Icons.stop}/>
      </StyledPlay>
      <FavoriteIcon fontSize="large" />
      <MoreHorizIcon />
      <SongList />
    </StyledBodySongs>
  )
}

const StyledBodySongs = styled.div`
  margin: 30px 30px;
  display: flex;
  gap: 20px;
`;
const StyledIcon = styled.img`
  width: 14px;
  height: 13px;
`;

const StyledPlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${Colors.white};
  border-radius: 50%;
  box-sizing: border-box;
    & > img{
      width: 10.7px;
      height: 12.32px;
    }
`;