import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch} from "../features/search/searchSlice";
import styled from "@emotion/styled";
import CardSong from "../components/ui/CardSong";
import Iframe from "react-iframe";
import HeaderSearch from "../components/contents/Headers/HeaderSearch";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-grow : 1;
  flex-direction: column;
`;

const StyledContent = styled.div`
  width: 100vw;
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 20px;
`;

const InputContent = styled.div`
  background-color: aliceblue;
  height: 100px;
`;

function Search() {

//------------------------------------
  /* para usar install-> yarn add youtube-search*/
//   const search = require('youtube-search');

// const opts = {
//   maxResults: 5,
//   key: 'AIzaSyBaVOdzcuMKYlByc7LUh16DVFpajUrQs1s'
// };

// const searchSong = (query) => {
// search(`${query} music`, opts, function(err, results) {
//   if(err) {return console.log(err);}
  
//   console.dir(results);
//   return results;
// });
// }

//------------------------------------

  const [query, setQuery] = useState("trend");
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.search.list);
  console.log(videos)

const handleSubmit = (e) => {
  e.preventDefault();

  let timerID;
  // if (query !==""){
  //   timerID = setTimeout(dispatch(fetchSearch(query)), 1000);
  // }
  //searchSong(query);
  console.log(query);
  return () => clearTimeout(timerID);
  //Search.setState({submitted: true});
};

// useEffect(()=>{
//   searchSong(query);
// }, [searchSong]);

useEffect(()=>{
  
  let timerID;
  //dispatch(fetchSearch({query}));
  console.log(query)
  const fetchQ = dispatch(fetchSearch(query));
  if (query !==""){
    timerID = setTimeout(fetchQ, 2000);
  }

  return () => clearTimeout(timerID);

},[query]);

  return (
    <StyledDiv>
        <ContentDiv>
          <InputContent>
          <form id="search" onSubmit={handleSubmit}>
              <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            </form>
            <button type="submit" form="search" >Search</button>
            <HeaderSearch type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          </InputContent>
          <StyledContent>
            {(!videos) ? <div> red</div> :(videos.items.map(item => <Iframe width="200" height="150" url={`http://www.youtube.com/embed/${item.id.videoId}`} /> ))  // <div> blue</div> 
            }
          </StyledContent>
        </ContentDiv>
    </StyledDiv>
  )
}

export  default Search;
