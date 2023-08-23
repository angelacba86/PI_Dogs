import '../Dog/dog.css';

const Dog=({image,name,temperament,weight})=>{

    return(
        <div className='dogCard'>
            <img className='imagen' src={image} alt={name}/>
            <p>Raza: {name} </p>
            <p>Temperamento: {temperament}</p>
            <p>Peso: {weight} </p>
        </div>
    )
}
export default Dog;