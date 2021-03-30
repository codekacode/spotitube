/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import test from "../../assets/test/say_so.mp3"
import Icons from "../ui/Icons"
import Colors from "../ui/Colors"

const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 100vw;
  gap: 12px;
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

const PlayPause = (e) =>{
  const play = e.currentTarget
  const audio = document.getElementById("audio");
  const play_song = document.getElementById("controls_song");
  const id = document.getElementById("song_id");
  const equal = document.getElementById("song_equal");
  if(audio.paused || audio.ended){
    audio.play();
    play.querySelector(".play").classList.toggle("hide");
    play.querySelector(".pause").classList.toggle("hide");
    play_song.querySelector(".play").classList.toggle("hide");
    play_song.querySelector(".pause").classList.toggle("hide");
    id.classList.toggle("hide");
    equal.classList.toggle("hide");
  }else{
    audio.pause();
    play_song.querySelector(".play").classList.toggle("hide");
    play_song.querySelector(".pause").classList.toggle("hide");
    play.querySelector(".play").classList.toggle("hide");
    play.querySelector(".pause").classList.toggle("hide");
    id.classList.toggle("hide");
    equal.classList.toggle("hide");
  }
} 

const onInput= (e) => {
  const slider = e.currentTarget;
  const selector = document.getElementById("selector");
  console.log(slider.value)
  selector.style.left = slider.value + "%"
}

function Player(){

  return(
    <StyledPlayer>
        <StyledControl>
          <StyledIcon alt="prev.svg" src={Icons.prev}/>
          <StyledPlay id="controls_footer" onClick={PlayPause}>
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
        <audio controls id="audio" className="hide">
          <source src={test} type="audio/mp3"/>
        </audio>
    </StyledPlayer>
  );
}

export default Player;