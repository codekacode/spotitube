import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch} from "../features/search/searchSlice";
import styled from "@emotion/styled";
import Colors from "../components/ui/Colors";
import NavBar from "../components/contents/NavBar";
import Body from "../components/contents/Body";
import MiniCardPlay from "../components/ui/MiniCardPlay";
import PlaylistInfo from "../components/ui/PlaylistInfo";
import PlaylistSongs from "../components/ui/PlaylistSongs";
import CardPlay from "../components/ui/CardPlay";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentDiv = styled.div`
  display: flex;
  flex-grow : 1;
`;

const StyledContent = styled.div`
  background-color: aqua;
  width: 100%;
  margin: 20px;
`;

function Search() {

  const videos = useSelector((state) => state.search.list);
  
  const items = videos.items;
  console.log("andaaaa: ",items);

const dispatch = useDispatch();
const query = "billie";

// useEffect(()=> {
// dispatch(fetchSearch(query))
// },[dispatch]);

  return (
    <StyledDiv>
        <ContentDiv>
          <NavBar/>
          <StyledContent>
            {items.map((item)=> 
              <div>{item.snippet.title}</div>
            )}
          </StyledContent>
        </ContentDiv>
    </StyledDiv>
  )
}

export  default Search;
