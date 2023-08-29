import '../Home/home.css';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {allDogs} from '../../redux/actions';
import { useSelector } from 'react-redux';
import Dogs from '../../components/Dogs/dogs';
import Pagination from '../../components/Pagination/pagination';


const Home=()=>{
    const dispatch = useDispatch();
    const getAllDogs= useSelector(state=>state.getAllDogs)
    const filteredDogs = useSelector(state=>state.filteredDogs)
  
    //---GetAllDogs---//
    useEffect(()=>{
        dispatch(allDogs(1));
        },[dispatch]);
  
    //---Paginado---//
    const dogsToShow=filteredDogs.length > 0 ? filteredDogs: getAllDogs
    const dogPerPage=8;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages= Math.ceil(dogsToShow.length/dogPerPage);
   
    const startIndex= (currentPage-1)* dogPerPage;
    const endIndex= startIndex + dogPerPage;

    let currentDog= dogsToShow.slice(startIndex, endIndex);
  
    const pageHandler=(pageNumber)=>{
      setCurrentPage(pageNumber)
    }
        return (
            <div className='centered-container'>
                <Dogs currentDog={currentDog}/>
                <Pagination totalPages={totalPages} pageHandler={pageHandler}/>
            </div>
        )
    }
    export default Home;