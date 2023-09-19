import '../NavBar/navbar.css'
import { getTemperaments, filtersByTemperaments } from '../../redux/actions';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect} from 'react';

const ByTemperaments = ({setCurrentPage}) => {

  const dispatch = useDispatch();

  //----FiltersList-----//
  useEffect(()=>{
    dispatch(getTemperaments())
  },[dispatch]);
  const tempList=useSelector(state=>state.tempList)
  const getAllDogs= useSelector(state=>state.getAllDogs)
  const tempSelectedDogs= new Set(getAllDogs.flatMap(select => select.temperament?.split(',').map(temp => temp.trim().toLowerCase())))
  const listToShow= tempList?.filter( temp=> tempSelectedDogs.has(temp.name.toLowerCase()))
  
  //----HandleSelect-----/
  const handleSelectChange = event => {
    const tempValue = event.target.value;
    dispatch(filtersByTemperaments(tempValue)); 
    setCurrentPage(1)
  };
  return(
    <div className='select-contenedor'>
      <select onChange={handleSelectChange}>
        <option value='' defaultValue>
          All Temperaments
        </option>
        {listToShow?.map(temp => (
          <option key={temp.id} value={temp.name} className='select-estilizado'>
            {temp.name}
          </option>
        ))}
      </select>
    </div>
  )
}
export default ByTemperaments;