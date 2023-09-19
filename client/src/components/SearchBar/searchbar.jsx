import '../SearchBar/searchbar.css';
import { useDispatch } from 'react-redux';
import { clearSearch, getByName,pageCleaner } from '../../redux/actions'; 
import { handleChange } from '../../utils/utils';



const SearchBar=({name,setName,setCurrentPage})=>{
    //---SearchBar:----//
    const dispatch = useDispatch();
    const handleName=handleChange(setName)
    const handleSubmit=()=>{ 
        dispatch(getByName(name));
      }
     const handleCleanSearch= ()=>{
        dispatch(clearSearch())
        dispatch(pageCleaner())
        setName("")
        setCurrentPage(1)
     } 

    return(
        <div className='searchContainer'>
            <input type='search' value={name} onChange={handleName}  placeholder='Search Here'className='minimal-input'></input><button onClick={()=>handleCleanSearch()}>x</button>
            <button onClick={()=>handleSubmit(name)} className='search-button' >Search</button>
        </div>
    )
}
export default SearchBar;