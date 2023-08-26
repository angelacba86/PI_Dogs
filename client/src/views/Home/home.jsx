import '../Home/home.css';
import Dogs from '../../components/Dogs/dogs'


const Home=({dogsToShow})=>{

    
        return (
            <div className='centered-container'>
                <Dogs dogsToShow={dogsToShow}/>
            </div>
        )
    }
    export default Home;