import '../NavBar/navbar.css';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/searchbar';
import ByTemperaments from '../Filters/byTemperaments';


const NavBar=({handleName, handleSubmit,name})=>{
    const { pathname } = useLocation();
    return(
        <div className='navBarContainer'>
            <Link to={'/'}><>Landing</></Link>
            <Link to={'/home'}><>Home</></Link>
            <Link to={'/form'}><>Form</></Link>
            {pathname ==='/home' && <><SearchBar handleName={handleName} handleSubmit={handleSubmit} name={name} /><ByTemperaments  /></>}
           
        </div>
    )
}
export default NavBar;