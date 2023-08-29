import '../Dog/dog.css';
import { NavLink } from 'react-router-dom';

const Dog=({id,image,name,temperaments,minWeight,maxWeight})=>{
console.log(temperaments)
    return(
        <div className='dogCard'key={id} >
            <NavLink to={`${id}`}>
            <img className='imagen' src={image} alt={name}/>
            <p>Name: {name} </p>
            <p>Temperaments: {temperaments}</p>
            <p>Weight {minWeight}-{maxWeight} </p>
            </NavLink>
        </div>
    )
}
export default Dog;