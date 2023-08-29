import '../Dogs/dogs.css';
import Dog from '../Dog/dog'
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Dogs=( {currentDog})=>{

    const noInfo= useSelector(state=> state.noInfo);
  
      return (
        
        <div className='dogsContainer'>
         {noInfo ? <p>{noInfo}</p>: (currentDog ? currentDog?.map(dog => (
            <Dog
              key={dog.id}
              id={dog.id}
              image={dog.image}
              name={dog.name}
              temperaments={dog.temperaments}
              minWeight={dog.minWeight}
              maxWeight={dog.maxWeight}
            />
          )):<p>Loading</p>)
          }
        </div>
      );
}
export default Dogs;