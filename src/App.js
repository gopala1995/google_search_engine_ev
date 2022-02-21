
import './App.css';
import { Search } from './components/google';
import {Route,Routes} from "react-router-dom"
import { Home } from './components/home';

function App() {
  return (
    <div className="App">

     <Search/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/search/:id" element={<Search/>}></Route>
       
     </Routes>

    </div>
  );
}

export default App;
