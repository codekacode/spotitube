import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Playlist from './pages/PlayList';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Playlist} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Playlist" component={Playlist} />
      </div>  
    </Router>
  );
}

export default App;
