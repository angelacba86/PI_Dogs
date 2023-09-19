import '../Home/home.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {allDogs} from '../../redux/actions';
import { useSelector } from 'react-redux';
import Dogs from '../../components/Dogs/dogs';
import Pagination from '../../components/Pagination/pagination';


const Home=({currentPage,setCurrentPage, name})=>{
    const dispatch = useDispatch();
    const getAllDogs= useSelector(state=>state.getAllDogs)
    const filteredDogs = useSelector(state=>state.filteredDogs)
  
    //---GetAllDogs---//
    useEffect(()=>{
        dispatch(allDogs());
        },[dispatch]);
  
    //---Paginado---//
    const dogsToShow=filteredDogs.length > 0 ? filteredDogs: getAllDogs
    const dogPerPage=8;

    const totalPages= Math.ceil(dogsToShow.length/dogPerPage);
   
    const startIndex= (currentPage-1)* dogPerPage;
    const endIndex= startIndex + dogPerPage;

    let currentDog= dogsToShow.slice(startIndex, endIndex);
  
    const pageHandler=(pageNumber)=>{
      setCurrentPage(pageNumber)
    }
        return (
            <div className='centered-container'>
                <Dogs currentDog={currentDog} name={name}/>
                <Pagination totalPages={totalPages} pageHandler={pageHandler} currentPage={currentPage}/>
            </div>
        )
    }
    export default Home;