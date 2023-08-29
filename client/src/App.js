import './App.css';
import { Routes,Route,useLocation} from 'react-router-dom';
import Home from './views/Home/home';
import Landing from './views/Landing/landing';
import Detail from './views/Detail/detail';
import Form from './views/Form/form';
import NavBar from './components/NavBar/navbar';

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
       {pathname!=='/' && <NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route path='home/:id' element={<Detail  />}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>

    </div>
  );
}
export default App;
