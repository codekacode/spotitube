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

export {PlayPause};  