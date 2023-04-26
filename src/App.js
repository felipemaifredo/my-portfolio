
//Imports
import './App.css';
import {  HashRouter, Routes, Route,  } from 'react-router-dom';

//Components
import Navbar from './components/navbar/Navbar';

//Pages
import Home from './routes/home/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
