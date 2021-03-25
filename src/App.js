import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Spotitube from './pages/Spotitube';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Spotitube} />
      </div>  
    </Router>
  );
}

export default App;
