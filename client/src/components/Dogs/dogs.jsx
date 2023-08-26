import '../Dogs/dogs.css';
import Dog from '../Dog/dog'

const Dogs=({dogsToShow})=>{
    
const dogsList=dogsToShow  
    
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