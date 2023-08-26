import '../Dog/dog.css';
import { NavLink } from 'react-router-dom';

const Dog=({id,image,name,temperament,weight})=>{

    return(
        <div className='dogCard'key={id} >
            <NavLink to={`${id}`}>
            <img className='imagen' src={image} alt={name}/>
            <p>Name: {name} </p>
            <p>Temperament: {temperament}</p>
            <p>Weight {weight} </p>
            </NavLink>
        </div>
    )
}
export default Dog;