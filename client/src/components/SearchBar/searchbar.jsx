import '../SearchBar/searchbar.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByName } from '../../redux/actions'; 
import { handleChange } from '../../utils/utils'

const SearchBar=()=>{
    //---SearchBar:----//
    const dispatch = useDispatch();
    const [name,setName]=useState('');
    const handleName=handleChange(setName)
    const handleSubmit=()=>{ 
        dispatch(getByName(name));
        setName('')
      }

    return(
        <div className='searchContainer'>
            <input type='search' value={name} onChange={handleName} placeholder='Search Here'></input>
            <button onClick={()=>handleSubmit(name)}>Search</button>
        </div>
    )
}
export default SearchBar;