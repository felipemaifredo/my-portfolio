//Imports
import './App.css';
import {  HashRouter, Routes, Route,  } from 'react-router-dom';

//Routes
import Home from './Routes/Home';
import ProjectsPage from './Routes/ProjectsPage';
import Works from './Routes/Works';
import Gallery from './Routes/Gallery';
import Library from './Routes/Library';

//Components
import Navbar from './Components/Navbar/Navbar';
import NavConfig from './Components/NavConfig/NavConfig';

function App() {
  return (
    <div className="App">
     <HashRouter>
        <Navbar />
        <NavConfig />

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/projects' element={<ProjectsPage />}/>
          <Route path='/works' element={<Works />}/>
          <Route path='/library' element={<Library />}/>
          <Route path='/galery' element={<Gallery />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
