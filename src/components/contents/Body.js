import styled from "@emotion/styled";
import Playlist from "../ui/Playlist";
import Header from "../contents/Headers/Header"
import React from 'react';
import YouTube from 'react-youtube';

export default function Body() {
  let id_video ;
  const opts = {
    display: 'none',
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onPlayVideo = (e) => {
    const video = document.getElementById("test")
    console.log(video)
    id_video.playVideo();
  }

  const onPauseVideo = (e) =>{
    id_video.pauseVideo();
  }
  const onReady= (e) => {
    console.log(e.target)
    id_video = e.target;
    e.target.pauseVideo();
  }
  return (
    <StyledBody>
      <Header/>
      <button onClick={onPlayVideo}>Play</button>
      <button onClick={onPauseVideo}>Pause</button>
      <YouTube videoId="4wv8Oz_j438" opts={opts} id={"test"} onReady={onReady}/>
      <Playlist />
    </StyledBody>
  )
}

const StyledBody = styled.div`
  width: 100%;
  height: 100vh;
  flex: 0.8;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(91, 87, 115);
  color: #fff;
  & #test{
    
  }
`;

