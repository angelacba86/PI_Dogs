import '../Home/home.css';
import Dogs from '../../components/Dogs/dogs'


const Home=({getAllDogs})=>{

    
        return (
            <div className='centered-container'>
                <Dogs getAllDogs={getAllDogs}/>
            </div>
        )
    }
    export default Home;