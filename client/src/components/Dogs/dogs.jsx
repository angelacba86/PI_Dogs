import '../Dogs/dogs.css';
import Dog from '../Dog/dog'
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { allDogs } from '../../redux/actions'


const Dogs=({getAllDogs})=>{
    
// //getAllDogs:
//    const dispatch= useDispatch();
//    const getAllDogs= useSelector(state=> state.getAllDogs);
//    useEffect(()=>{
//        dispatch(allDogs())
//    },[dispatch]);


const dogsList=getAllDogs  
    
    return(
        <div className='dogsContainer'>
            {dogsList?.map(dog=>{
               return <Dog 
                key={dog.id}
                id={dog.id}
                image={dog.image}
                name={dog.name}
                temperament={dog.temperament}
                weight={dog.weight}
                />
            })}
      
        </div>
    )
}
export default Dogs;