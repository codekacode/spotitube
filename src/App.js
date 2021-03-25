import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SpotitubeHome from './pages/SpotitubeHome';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Route exact path="/" component={SpotitubeHome} />
    //   </div>  
    // </Router>
    <SpotitubeHome />
  );
}

export default App;
