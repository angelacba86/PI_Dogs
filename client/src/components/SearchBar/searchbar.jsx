import '../SearchBar/searchbar.css';

const SearchBar=( )=>{

    return(
        <div className='searchContainer'>
            <input type='search'></input>
            <button onClick={()=>alert('Se precionó boton')}>Buscar</button>
        </div>
    )
}
export default SearchBar;