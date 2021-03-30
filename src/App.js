/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Playlist from './pages/PlayList';
import Template from './pages/Template'
function App() {
  return (
    <Router>
      <Route exact path="/Login" component={Login}/>
      <Template>
        <Route exact path="/" component={Home} />
        <Route exact path="/playlist" component={Playlist} />
      </Template>
    </Router>
  );
}

export default App;
