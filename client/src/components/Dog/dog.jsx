import '../Dog/dog.css';
import { NavLink } from 'react-router-dom';

const Dog=({id,image,name,temperament,weight})=>{

    return(
        <div className='dogCard' >
            <NavLink to={`${id}`}>
            <img className='imagen' src={image} alt={name}/>
            <p>Raza: {name} </p>
            <p>Temperamento: {temperament}</p>
            <p>Peso: {weight} </p>
            </NavLink>
        </div>
    )
}
export default Dog;