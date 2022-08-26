import './App.css';
import Home from './components/Home';
import Dummyrestro from "./components/Dummyrestro";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
  <>
  <Router>
    
    

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/dummyrestro" element={<Dummyrestro/>}/>
    
    </Routes>
       
</Router>
    </>
  );
}

export default App;
