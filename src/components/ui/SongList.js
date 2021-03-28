/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import Icons from "./Icons";
//import Colors from "./Colors";
//import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {AiOutlineHeart} from 'react-icons/ai'
import Album from "../../assets/images/test_album.png"

const PlayPause = (e) =>{
  const play = e.currentTarget
  const play_footer = document.getElementById("controls_footer");
  const audio = document.getElementById("audio");
  const id = document.getElementById("song_id");
  const equal = document.getElementById("song_equal");
  if(audio.paused || audio.ended){
    audio.play();
    play.querySelector(".play").classList.toggle("hide");
    play.querySelector(".pause").classList.toggle("hide");
    play_footer.querySelector(".play").classList.toggle("hide");
    play_footer.querySelector(".pause").classList.toggle("hide");
    id.classList.toggle("hide");
    equal.classList.toggle("hide");
  }else{
    audio.pause();
    play.querySelector(".play").classList.toggle("hide");
    play.querySelector(".pause").classList.toggle("hide");
    play_footer.querySelector(".play").classList.toggle("hide");
    play_footer.querySelector(".pause").classList.toggle("hide");
    id.classList.toggle("hide");
    equal.classList.toggle("hide");
  }
}

export default function SongList({name, img_url }) {
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
      <AiOutlineHeart/>
      <img alt="album.img" src={Album} css={css`width:40px; height:40px;`}/>
      <MoreHorizIcon />
      <SongList />
    </SongListStyled>
  )
}

const SongListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  gap: 150px;
  & h1{
    font-size: 18px;
    }
  & p {
    color: gray;
    }
  &:hover{
    cursor: pointer;
    background: #000;
    opacity: 0.8;
    & #song_id, #song_equal{
      display: none;
      }
    & #controls_song{
      display: flex;
      }
  }
`;
const StyledSong = styled.div`
  margin: 30px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
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
