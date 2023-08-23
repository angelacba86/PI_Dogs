import {Routes,Route} from 'react-router-dom';
// import { useState,useEffect } from 'react';
import './App.css';
import Home from './views/Home/home';
import Landing from './views/Landing/landing';
import Detail from './views/Detail/detail';
import Form from './views/Form/form';
import NavBar from './components/NavBar/navbar';
import { useLocation } from 'react-router-dom';


function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
       {pathname!=='/' && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route path='home/:idRaza' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>

    </div>
  );
}

export default App;
