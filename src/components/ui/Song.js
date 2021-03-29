/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Icons from "./Icons";
import X_Y from '../../assets/logo/X&Y.png'
//import Colors from "./Colors";
import {AiOutlineHeart} from 'react-icons/ai'
import {PlayPause} from '../../utils/SongEvents'


export default function SongList({name, img_url, artist_name, album_name, date, time}) {
  return (
    <SongListStyled>
      <SongId>
        <p id="song_id">1</p>
        <img alt="equal.img" css={css`width: 14px; height: 14px;`} id="song_equal" src="https://open.scdn.co/cdn/images/equaliser-animated-green.73b73928.gif" className="hide"/>
        <StyledPlay id="controls_song" onClick={PlayPause}>
          <img alt="play_filled.svg" src={Icons.play_filled} className="play"/>
          <img alt="play_filled.svg" className="pause hide" src={Icons.stop}/>
        </StyledPlay>
      </SongId>
      <SongInfo>
        <img alt="album.img" src={img_url ? img_url:X_Y} css={css`width:40px; height: 40px;`}/>
        <div>
          <p>{name ? name:"NameSong"}</p>
          <p>{artist_name ? artist_name:"ArtisSong"}</p>
        </div>
      </SongInfo>
      <p>{album_name ? album_name:"NameAlbum"}</p>
      <p>{date ? date:"29 de Mazdo del 2021"}</p>
      <SongTime>
        <AiOutlineHeart/>
        <p>{time ? time:"3:00"}</p>
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-ulyrgf-0 hJgLcF">
          <path d="M2 6.5a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 002 6.5zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 0014 6.5z" fill="currentColor">
          </path>
        </svg>
      </SongTime>
    </SongListStyled>
  )
}

const SongListStyled = styled.div`
  display:grid;
  height: 56px;
  padding: 0 16px;
  grid-gap: 16px;
  grid-template-columns: [index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr);
  border: 1px solid transparent;
  border-radius: 4px;
  align-items: center;
  &:hover{
    cursor: pointer;
    background-color: hsla(0,0%,100%,.3);
    &:hover{
    & #song_id, #song_equal{
      display: none;
    }
    & #controls_song{
      display: flex;
    }
  }
  }
  & h1{
    font-size: 18px;
  }
  & p {
    color: gray;
  }
`;

const SongId = styled.div`
  & #song_id{
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: normal;
    text-transform: none;
  }
`;

const StyledPlay = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-sizing: border-box;
  & img {
    width: 16px;
    height: 16px;
  }
`;
const SongInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const SongTime = styled.div`
    display: flex;
    justify-self: end;
    -webkit-box-align: center;
    align-items: center;
    grid-column: last;
    gap: 16px;
`;