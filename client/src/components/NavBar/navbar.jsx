import '../NavBar/navbar.css';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/searchbar';
import ByTemperaments from '../Filters/byTemperaments';
import ByOrigin from '../Filters/byOrigin';
import AlphaOrder from '../Orders/alphaOrder';
import WeightOrder from '../Orders/weightOrder';

const NavBar=({setCurrentPage,name,setName})=>{
    const { pathname } = useLocation();

    return(
        <div className='navBarContainer'>
            <div className='navBarMenus'>
            <Link to={"/"}><img src="https://i.ibb.co/VgkDR1m/logolow.png" alt="Logo" className='imagen-logo'/></Link>
            <div className='menu'><Link to={'/home'} ><>Home</></Link></div>
            <div className='menu'><Link to={'/form'}><>Form</></Link></div>
            </div>
             <div className='navBarFiltros'>
             {pathname ==='/home' && <>
            <ByTemperaments setCurrentPage={setCurrentPage}/>
            <ByOrigin/>
            <AlphaOrder/>
            <WeightOrder/>
            <SearchBar name={name} setName={setName} setCurrentPage={setCurrentPage} />
             </>}
            </div>   
            </div>
    )
}
export default NavBar;