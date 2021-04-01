import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch} from "../features/search/searchSlice";
import styled from "@emotion/styled";
import CardSong from "../components/ui/CardSong";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-grow : 1;
`;

const StyledContent = styled.div`
  width: 100vw;
  margin: 20px;
`;

const InputContent = styled.div`
  background-color: aliceblue;
  height: 100px;
`;

function Search() {

  const [query, setQuery] = useState("anime");
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.search.list);

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(fetchSearch({query}));
};

useEffect(()=>{
  dispatch(fetchSearch({query}));
},[dispatch]);

  return (
    <StyledDiv>
        <ContentDiv>
          <StyledContent>
          <InputContent>
          <form id="search" onSubmit={handleSubmit}>
              <input type="text" onSubmit={(e) => setQuery(e.target.value)} />
            </form>
            <button type="submit" form="search" >Search</button>
          </InputContent>
            {(!videos) ? <div> red</div> : (videos.items.map(item => <CardSong name={item.snippet.title}/> ))  
            }
          </StyledContent>
        </ContentDiv>
    </StyledDiv>
  )
}

export  default Search;
