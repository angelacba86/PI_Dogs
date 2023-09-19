import '../Dogs/dogs.css';
import Dog from '../Dog/dog'
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Dogs=( {currentDog})=>{

    const noInfo= useSelector(state=> state.noInfo);
    const results= useSelector(state=>state.results)
  
      return (
        <div>
          <div>{results?<p>{results}</p>:""}</div>
        <div className='dogsContainer'>
         {noInfo ? <p>{noInfo}</p>: (currentDog ? currentDog?.map(dog => (
            <Dog
              key={dog.id}
              id={dog.id}
              image={dog.image}
              name={dog.name}
              temperament={dog.temperament}
              minWeight={dog.minWeight}
              maxWeight={dog.maxWeight}
            />
          )):<p>Loading</p>)
          }
        </div>
        </div>
      );
}
export default Dogs;