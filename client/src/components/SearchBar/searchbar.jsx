import '../SearchBar/searchbar.css';

const SearchBar=({handleChange, handleSubmit, name} )=>{

    return(
        <div className='searchContainer'>
            <input type='search' value={name} onChange={handleChange} placeholder='Busca aquí'></input>
            <button onClick={()=>handleSubmit(name)}>Buscar</button>
        </div>
    )
}
export default SearchBar;