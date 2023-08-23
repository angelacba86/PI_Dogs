import '../NavBar/navbar.css';
import SearchBar from '../SearchBar/searchbar';
import {Link} from 'react-router-dom';

const NavBar=()=>{
    return(
        <div className='navBarContainer'>
            <Link to={'/'}><>Landing</></Link>
            <Link to={'/home'}><>Home</></Link>
            <Link to={'/form'}><>Form</></Link>
            <SearchBar />
        </div>
    )
}
export default NavBar;