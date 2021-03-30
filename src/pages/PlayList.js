import styled from "@emotion/styled";
import PlaylistInfo from '../components/ui/PlaylistInfo';
import PlaylistSongs from '../components/ui/PlaylistSongs';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

function PlayList (){
    return(
        <StyledDiv>
            <PlaylistInfo />
            <PlaylistSongs />
        </StyledDiv>
    );
}

export default PlayList;