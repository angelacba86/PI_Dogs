import '../Landing/landing';
import { NavLink } from 'react-router-dom';

const Landing=()=>{
    return(
        <div>
            <p>Este es el landing</p>
            <NavLink to='/home'><button>home</button></NavLink>
        </div>
    )
}
export default Landing