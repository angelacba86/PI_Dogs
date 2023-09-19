import '../Landing/landing.css';
import { NavLink } from 'react-router-dom';

const Landing=()=>{
    return(
        <div className='contenedor-principal'>
            <div className='contenedor'>
            <h2>Welcome to my App</h2>
            <p>You will find diverse information about dog breeds here. </p>
            <NavLink to='/home'><button className='css-button'>Click Here</button></NavLink>
            </div>
        </div>
    )
}
export default Landing