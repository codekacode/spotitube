function PlayPause (id_song){
    const play = document.getElementById(`play_${id_song}`);
    const play_footer = document.getElementById("controls_footer");
    const audio = document.getElementById("audio");
    const id = document.getElementById(`song_${id_song}`);
    const equal = document.getElementById(`equal_${id_song}`);
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

const ChangeColorHeart = (e) =>{
  const svg = e.currentTarget;
  const heart = svg.querySelector(".heart");
  const fill_heart = svg.querySelector(".fill_heart")
  svg.classList.toggle("svg_select")
  heart.classList.toggle("hide")
  fill_heart.classList.toggle("hide")
}

export {PlayPause, ChangeColorHeart};  