import '../NavBar/navbar.css';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/searchbar';
import ByTemperaments from '../Filters/byTemperaments';
import ByOrigin from '../Filters/byOrigin';
import AlphaOrder from '../Orders/alphaOrder';
import WeightOrder from '../Orders/weightOrder';
import { useDispatch } from 'react-redux';
import { allDogs } from '../../redux/actions';


const NavBar=()=>{
    const { pathname } = useLocation();
    const dispatch= useDispatch();

    return(
        <div className='navBarContainer'>
            <div className='navBarMenus'>
            <Link to={'/'}><>Landing</></Link>
            <Link to={'/home'}><>Home</></Link>
            <Link to={'/form'}><>Form</></Link>
            </div>
            <div className='navBarMenus'>
            {pathname ==='/home' && <>
            <SearchBar />
            <ByTemperaments/>
            <ByOrigin/>
            <AlphaOrder/>
            <WeightOrder/>
            <button onClick={()=>{dispatch(allDogs())}} >🗘</button></>}
            </div>
        </div>
    )
}
export default NavBar;