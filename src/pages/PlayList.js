import styled from "@emotion/styled";
import PlaylistInfo from '../components/contents/PlaylistInfo';
import PlaylistSongs from '../components/contents/PlaylistSongs';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
`;
//const TestDiv = styled.div`
//    height: 232px;
//    width: 100%;
//    float: left;
//    background-color: rgb(216, 40, 48);
//    background-clip: padding-box;
//    background-image: linear-gradient(rgba(0,0,0,.6),#121212);
//`;

const DivContent = styled.div`
    height: auto;
    background: #121212;
    isolation: isolate;
`;
const ListOptions = styled.div`
    height: 104px;
    background-color: transparent;
`;

function PlayList (){
    return(
        <StyledDiv>
            <PlaylistInfo />
            <DivContent>
                <ListOptions/>
                <PlaylistSongs />
            </DivContent>
        </StyledDiv>
    );
}

export default PlayList;