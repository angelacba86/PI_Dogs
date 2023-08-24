import '../Home/home.css';
import Dogs from '../../components/Dogs/dogs'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allDogs } from '../../redux/actions'



const Home=()=>{
// //getAllDogs:
   const dispatch= useDispatch();
   const getAllDogs= useSelector(state=> state.getAllDogs);
   
   useEffect(()=>{
       dispatch(allDogs());
       },[dispatch]);
    
  // Función de limpieza (desmontaje)
  useEffect(() => {
    return () => {
      alert('desmontaje!');
    };
  }, []);

    return (
        <div className='centered-container'>
            <Dogs getAllDogs={getAllDogs}/>
        </div>
    )
}
export default Home;