
//Imports
import './App.css';
import {  HashRouter, Routes, Route,  } from 'react-router-dom';

//Components
import Navbar from './components/navbar/Navbar';

//Rotas
import Home from './routes/home/Home';
import Projects from './routes/Projects/Projects';
import Library from './routes/Library/Library.js';
import Works from './routes/Works/Works.js';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/works' element={<Works />}/>
            <Route path='/gallery' element={<Home />}/>
            <Route path='/library' element={<Library />}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
