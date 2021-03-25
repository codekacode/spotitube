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
  height: 100%;
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
  const audio = document.getElementById("audio")
  if(audio.paused || audio.ended){
    play.querySelector(".play").classList.toggle("hide")
    play.querySelector(".pause").classList.toggle("hide")
    audio.play();
  }else{
    audio.pause();
    play.querySelector(".play").classList.toggle("hide")
    play.querySelector(".pause").classList.toggle("hide")
  }
}

function PlayerFooter(){
  return(
    <StyledPlayer>
        <StyledControl>
          <StyledIcon alt="prev.svg" src={Icons.prev}/>
          <StyledPlay id="controls" onClick={PlayPause}>
            <StyledIcon alt="play_filled.svg" src={Icons.play_filled} className="play"/>
            <StyledIcon alt="play_filled.svg" className="hide pause" src={Icons.stop}/>
          </StyledPlay>
          <StyledIcon alt="next.svg" src={Icons.next}/>
        </StyledControl>
        <ProgressBar>
          <p>00:00</p>
          <input type="range" min="0" max="100" 
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
          <p>00:00</p>
        </ProgressBar>  
        <audio controls id="audio" className="hide">
          <source src={test} type="audio/mp3"/>
        </audio>
    </StyledPlayer>
  );
}

export default PlayerFooter;
