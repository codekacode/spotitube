/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import Song from './Song';
import {WiTime3} from 'react-icons/wi'


export default function PlaylistSongs() {
  return (
    <StyledSong>
      <ListHeadings>
        <p>#</p>
        <p>Título</p>
        <p>Álbum</p>
        <p>AGREGADO EL</p>
        <HeadTime>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z" fill="currentColor">
            </path>
          </svg>
        </HeadTime>
      </ListHeadings>
      <Song/>
    </StyledSong>
  )
}

const StyledSong = styled.div`
  height: 100%;
  width: 100%;
`;

const ListHeadings = styled.div`
  display: grid;
  padding: 0 16px;
  grid-gap: 16px;
  grid-template-columns: [index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr);
`
const HeadTime = styled.div`
    display: flex;
    padding-right: 32px;
    justify-self: end;
    -webkit-box-align: center;
    align-items: center;
    grid-column: last;
`;