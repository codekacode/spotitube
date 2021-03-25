//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import test from "../../assets/test/say_so.mp3"
import Icons from "../ui/Icons"
import Colors from "../ui/Colors"

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

const StyledControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const onClick = (e) =>{
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
    <div>
        <StyledControl>
          <StyledIcon alt="prev.svg" src={Icons.prev}/>
          <StyledPlay id="controls" onClick={onClick}>
            <StyledIcon alt="play_filled.svg" src={Icons.play_filled} className="play"/>
            <StyledIcon alt="play_filled.svg" className="hide pause" src={Icons.stop}/>
          </StyledPlay>
          <StyledIcon alt="next.svg" src={Icons.next}/>
        </StyledControl>
        <audio controls id="audio" className="hide">
          <source src={test} type="audio/mp3"/>
        </audio>
    </div>
  );
}

export default PlayerFooter;
