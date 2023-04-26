
//Imports
import './App.css';
import {  HashRouter, Routes, Route,  } from 'react-router-dom';

//Components
import Navbar from './components/navbar/Navbar';

//Rotas
import Home from './routes/home/Home';
import Projects from './routes/Projects/Projects';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects/tools' element={<Projects />}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
