import { getTemperaments, filterByTemperaments } from '../../redux/actions';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';

const ByTemperaments = () => {

  const dispatch = useDispatch();
  //----FiltersList-----//
  useEffect(()=>{
    dispatch(getTemperaments())
  },[dispatch]);
  const tempList=useSelector(state=>state.tempList)
  //----HandleSelect-----//
  const handleSelectChange = event => {
    const targetValue = event.target.value;
    dispatch(filterByTemperaments(targetValue)); 
  };
  return(
    <div>
      <select onChange={handleSelectChange}>
        <option value='' defaultValue>
          by Temperaments
        </option>
        {tempList?.map(temp => (
          <option key={temp.id} value={temp.name}>
            {temp.name}
          </option>
        ))}
      </select>
    </div>
  )
}
export default ByTemperaments;