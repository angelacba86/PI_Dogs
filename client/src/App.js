import './App.css';
import { Routes,Route,useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './views/Home/home';
import Landing from './views/Landing/landing';
import Detail from './views/Detail/detail';
import Form from './views/Form/form';
import NavBar from './components/NavBar/navbar';
import {  allDogs,getByName, getTemperaments } from '../src/redux/actions'
import {handleChange} from '../src/utils/utils'


function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  //---GetAllDogs---//

  const getAllDogs= useSelector(state=> state.getAllDogs);
  
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

//----Filters-----//
const tempList=useSelector(state=>state.tempList)
useEffect(()=>{
  dispatch(getTemperaments())
},[dispatch]);
const filteredDogs = useSelector(state => state.filteredDogs);

const dogsToShow = filteredDogs.length > 0 ? filteredDogs: getAllDogs;

  return (
    <div className="App">
       {pathname!=='/' && <NavBar handleName={handleName} handleSubmit={handleSubmit} name={name} tempList={tempList} dispatch={dispatch}
 />}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route exact path='/home' element={<Home dogsToShow={dogsToShow} filteredDogs={filteredDogs}/>}/>
        <Route path='home/:id' element={<Detail  />}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>

    </div>
  );
}

export default App;
