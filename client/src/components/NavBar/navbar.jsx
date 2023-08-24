import '../NavBar/navbar.css';
import SearchBar from '../SearchBar/searchbar';
import {Link} from 'react-router-dom';

const NavBar=({handleChange, handleSubmit,name})=>{
    return(
        <div className='navBarContainer'>
            <Link to={'/'}><>Landing</></Link>
            <Link to={'/home'}><>Home</></Link>
            <Link to={'/form'}><>Form</></Link>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} name={name} />
        </div>
    )
}
export default NavBar;