import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import Project from './Components/Project/Project';
import Reach_out from './Components/Reach_out/Reach_out';
import About from './Components/About/About';
import Card from './Components/Card/Card';

function App() {
  return (

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Main />} />
       <Route path='/project' element={<Project />} />
       <Route path='/reach-out' element={<Reach_out />} />
       <Route path='/profile' element={<About />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
