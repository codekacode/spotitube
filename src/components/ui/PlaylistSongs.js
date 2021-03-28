/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
//import Icons from "./Icons";
//import Colors from "./Colors";
//import FavoriteIcon from "@material-ui/icons/Favorite";
//import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {WiTime2} from 'react-icons/wi'
import SongList from './SongList';
//import Album from "../../assets/images/test_album.png"

const TitlesContainer = styled.div`
    display: grid;
    padding: 0 16px;
    grid-gap: 16px;
    grid-template-columns: [index] 16px [first] 4fr [var1] 2fr [last] minmax(120px,1fr);
    height: 56px;
    border: 1px solid transparent;
    border-radius: 4px;
    position: relative;
      & p{
        justify-self: start;
      }
`

export default function PlaylistSongs() {
  return (
    <div>
      <TitlesContainer>
        <p>#</p>
        <p>Titulo</p>
        <p>ÁLBUM</p>
        <p>Agregado el</p>
        <WiTime2 css={css`width:16px; height:16px;`}/>
      </TitlesContainer>
      <SongList/>
    </div>
  )
}