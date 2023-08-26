import '../Dogs/dogs.css';
import Dog from '../Dog/dog'
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Dogs=( )=>{

    const noInfo= useSelector(state=> state.noInfo);
    const getAllDogs= useSelector(state=>state.getAllDogs)
    const filteredDogs = useSelector(state=>state.filteredDogs)
    const dogsToShow = filteredDogs.length > 0 ? filteredDogs: getAllDogs

      return (
        
        <div className='dogsContainer'>
         {noInfo ? <p>{noInfo}</p>:
          dogsToShow?.map(dog => (
            <Dog
              key={dog.id}
              id={dog.id}
              image={dog.image}
              name={dog.name}
              temperament={dog.temperament}
              weight={dog.weight}
            />
          ))}
        </div>
      );
}
export default Dogs;