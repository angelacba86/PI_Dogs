import '../NavBar/navbar.css';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/searchbar';
import ByTemperaments from '../Filters/byTemperaments';


const NavBar=({handleName, handleSubmit,name, tempList, dispatch})=>{
    return(
        <div className='navBarContainer'>
            <Link to={'/'}><>Landing</></Link>
            <Link to={'/home'}><>Home</></Link>
            <Link to={'/form'}><>Form</></Link>
            <SearchBar handleName={handleName} handleSubmit={handleSubmit} name={name} />
            <ByTemperaments tempList={tempList} dispatch={dispatch} />
        </div>
    )
}
export default NavBar;