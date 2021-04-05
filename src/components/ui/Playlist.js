import styled from "@emotion/styled";
import MiniCardPlay from "./MiniCardPlay";
import CardPlay from "./CardPlay";
import dataPlaylists from '../../app/defaultLists'

export default function Playlist(props) {

  return (
    <StyledPlaylist>
      <h1 className="title">!Buenas tardes!</h1>
      <MiniWrapper>
        {dataPlaylists.map((playlist) => (
          <MiniCardPlay playlist={playlist}/>
        ))}
      </MiniWrapper>
      <h3>Your Playlist</h3>
      <YourPlaylist>
        {dataPlaylists.map((playlist) => (
          <CardPlay playlist_data={playlist} />
        ))}
      </YourPlaylist>
      <h3>Escuchados Recientemente</h3>
      <CurrentPlaylist>
      {dataPlaylists.map((playlist) => (
        <CardPlay playlist_data={playlist} />
      ))}
      </CurrentPlaylist>
      
    </StyledPlaylist>
  )
}
const MiniWrapper = styled.div`
  background: #000;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin: 40px 0;
`;

const StyledPlaylist = styled.div`
  padding: 30px;
  background: #000;
  & h3{
    font-size: 26px;
  }
  & .title{
    font-size: 34px;
  }
`;

const YourPlaylist = styled.div`
  background: #000;
  display: flex;
  margin: 30px 0;
  
`;
const CurrentPlaylist = styled.div`
  background: #000;
  display: flex;
  margin: 30px 0;
`;