import logo from './logo.svg';
import './App.css';
import MusicSearch from './components/MusicSearch';
import Playlist from './pages/Playlist';


function App() {
  return (
    <div className="App">
      <MusicSearch />
      <Playlist />
    </div>
  );
}

export default App;
