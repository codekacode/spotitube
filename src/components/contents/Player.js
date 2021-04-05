import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import YouTube from 'react-youtube';
import {setStatusSong} from "../../features/player/playerSlice"
import Icons from "../ui/Icons"
import Colors from "../ui/Colors"


function Player(){
  const dispatch = useDispatch();
  const [ queryVideo, setQueryVideo] = useState();
  const song_id = useSelector((state) => state.player.song_id);
  const song_status = useSelector((state) => state.player.song_status);
  console.log(song_status)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady= (e) => {
    setQueryVideo(e.target);
    e.target.pauseVideo();
  }

  return(
    <StyledPlayer>
        <YouTube containerClassName={"video_audio"} videoId={song_id} opts={opts} id={"test"} onReady={onReady} />
        <StyledControl>
          <StyledIcon alt="prev.svg" src={Icons.prev}/>
          <StyledPlay id="controls_footer" onClick={(e) => PlayPause(e, queryVideo)}>
            <img alt="play_filled.svg" src={Icons.play_filled} className="play"/>
            <img alt="play_filled.svg" className="hide pause" src={Icons.stop}/>
          </StyledPlay>
          <StyledIcon alt="next.svg" src={Icons.next}/>
        </StyledControl>
        <ProgressBar>
          <p>00:00</p>
          <div css={css`
                    width: 60%;
                    position: relative;
                    `}>
                <input type="range" value="50" onInput={onInput} min="0" max="100" 
                css={css`
                  -webkit-appearance: none;
                  height: 6px;
                  width: 100%;
                  border-radius: 5px;
                  outline: none;
                    &::-webkit-slider-thumb{
                      -webkit-appearance: none;
                      width: 48px;
                      height: 48px;
                      cursor: pointer;
                      z-index: 3;
                      position: relative;
                    }
                `}/>
                <div id="selector" css={css`
                      height: 10px;
                      width: 10px;
                      position: absolute;
                      bottom: 2px;
                      left: 50%;
                      transform: translateX(-50%);
                      z-index: 2;
                    `}>
                  <div id="selectorButton" css={css`
                      background: ${Colors.primary};
                      width: 10px;
                      height: 10px;
                      border: none;
                      border-radius: 50%;
                    `}/>
                </div>
          </div>
          <p>00:00</p>
        </ProgressBar>
    </StyledPlayer>
  );
}

const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 100vw;
  gap: 12px;
  background-color: #181818;
  border-top: 1px solid #282828;
  & .video_audio{
    display: none;
  }
`;

const StyledControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
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
  &:hover{
    transform: scale(1.1);
  }
`;

const ProgressBar = styled.div`
  display: flex;
  flex-direction: row;
`;

function PlayPause(e, queryVideo){
  const video_state = queryVideo.getPlayerState();
  console.log(video_state)
  if(video_state===2 || video_state===0){
    queryVideo.playVideo();
  }else{
    queryVideo.pauseVideo();
  }
} 

const onInput= (e) => {
  const slider = e.currentTarget;
  const selector = document.getElementById("selector");
  console.log(slider.value)
  selector.style.left = slider.value + "%"
}


export default Player;