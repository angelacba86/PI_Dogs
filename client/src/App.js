import './App.css';
import { Routes,Route,useLocation} from 'react-router-dom';
import { useState } from 'react';
import Home from './views/Home/home';
import Landing from './views/Landing/landing';
import Detail from './views/Detail/detail';
import Form from './views/Form/form';
import NavBar from './components/NavBar/navbar';

function App() {
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [name,setName]=useState('');


  return (
    <div className="App">
       {pathname!=='/' && <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} name={name} setName={setName}/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route exact path='/home' element={<Home setCurrentPage={setCurrentPage} currentPage={currentPage} name={name} setName={setName}/>}/>
        <Route path='home/:id' element={<Detail  />}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>

    </div>
  );
}
export default App;
