import '../SearchBar/searchbar.css';

const SearchBar=({handleName, handleSubmit, name} )=>{

    return(
        <div className='searchContainer'>
            <input type='search' value={name} onChange={handleName} placeholder='Search Here'></input>
            <button onClick={()=>handleSubmit(name)}>Search</button>
        </div>
    )
}
export default SearchBar;