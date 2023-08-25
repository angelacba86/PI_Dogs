import '../SearchBar/searchbar.css';

const SearchBar=({handleChange, handleSubmit, name} )=>{

    return(
        <div className='searchContainer'>
            <input type='search' value={name} onChange={handleChange} placeholder='Search Here'></input>
            <button onClick={()=>handleSubmit(name)}>Search</button>
        </div>
    )
}
export default SearchBar;