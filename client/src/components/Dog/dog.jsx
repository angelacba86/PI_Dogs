import '../Dog/dog.css';
import { NavLink } from 'react-router-dom';

const Dog=({id,image,name,temperament,minWeight,maxWeight})=>{

    return(
        <div className='dogCard'key={id} >
            <NavLink to={`${id}`}>
            <div className='imagen-contenedor'> 
            <img className='imagen' src={image} alt={name}/>
            </div>
            <div className="texto-contenedor">
                <p>Name: {name} </p>
                <p>Temperament: {temperament}</p>
                <p>Weight {minWeight}-{maxWeight} </p>
            </div>
            </NavLink>
        </div>
    )
}
export default Dog;