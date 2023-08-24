import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/home';
import Landing from './views/Landing/landing';
import Detail from './views/Detail/detail';
import Form from './views/Form/form';
import NavBar from './components/NavBar/navbar';
import { useLocation } from 'react-router-dom';
import { getByName } from '../src/redux/actions'
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function App() {
  const { pathname } = useLocation();

  //---SearchBar:----//
  const dispatch = useDispatch();
  const handleSubmit=()=>{ 
    dispatch(getByName(name));
    setName('')
  }
  const [name,setName]=useState('');
  const handleChange= (event)=>{setName(event.target.value)}

  return (
    <div className="App">
       {pathname!=='/' && <NavBar handleChange={handleChange} handleSubmit={handleSubmit} name={name} />}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route path='home/:id' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>

    </div>
  );
}

export default App;
