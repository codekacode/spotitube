/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import PlayList from './pages/PlayList';
// import Playlist from './pages/Playlist';
import Template from './pages/Template'
import Artist from './pages/Artist'

function App() {
  return (
    <Router>
      <Route exact path="/Login" component={Login}/>
      <Template>
        <Route exact path="/" component={Home} />
        <Route exact path="/artist" component={Artist} />
        <Route exact path="/playlist/:name" component={PlayList} />
        <Route exact path="/collection/:name" component={PlayList} />
      </Template>
    </Router>
  );
}

export default App;
