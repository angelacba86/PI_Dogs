import './App.css';
import { Routes,Route,useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './views/Home/home';
import Landing from './views/Landing/landing';
import Detail from './views/Detail/detail';
import Form from './views/Form/form';
import NavBar from './components/NavBar/navbar';
import {allDogs,getByName} from '../src/redux/actions'
import {handleChange} from '../src/utils/utils'


function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  //---GetAllDogs---//
  useEffect(()=>{
      dispatch(allDogs());
      },[dispatch]);

  //---SearchBar:----//
  const handleSubmit=()=>{ 
    dispatch(getByName(name));
    setName('')
  }
  const [name,setName]=useState('');
  const handleName=handleChange(setName)




// const filteredDogs = useSelector(state => state.filteredDogs);
// const dogsToShow = filteredDogs.length > 0 ? filteredDogs: (getAllDogs ? getAllDogs:null);


  return (
    <div className="App">
       {pathname!=='/' && <NavBar handleName={handleName} handleSubmit={handleSubmit} name={name}/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route exact path='/home' element={<Home />}/>
        <Route path='home/:id' element={<Detail  />}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>

    </div>
  );
}

export default App;
