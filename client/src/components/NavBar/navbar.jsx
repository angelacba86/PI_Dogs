import '../NavBar/navbar.css';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/searchbar';
import ByTemperaments from '../Filters/byTemperaments';


const NavBar=({handleChange, handleSubmit,name, tempList})=>{
    return(
        <div className='navBarContainer'>
            <Link to={'/'}><>Landing</></Link>
            <Link to={'/home'}><>Home</></Link>
            <Link to={'/form'}><>Form</></Link>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} name={name} />
            <ByTemperaments tempList={tempList}/>
        </div>
    )
}
export default NavBar;