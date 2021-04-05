import {setStatusSong, addSongId} from '../features/player/playerSlice'

function ChangeSongId (dispatch, song_id, video_id){
  if(song_id !== video_id){
    dispatch(addSongId(video_id))
  }
}

function ChangeSongStatus (dispatch, song_status) {
  if(song_status === "1"){
    dispatch(setStatusSong("2"))
  }else{
    dispatch(setStatusSong("1"))
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

export {ChangeSongId, ChangeSongStatus, ChangeColorHeart};  