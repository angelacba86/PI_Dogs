import { filterByTemperaments } from '../../redux/actions';

const ByTemperaments = ({tempList,dispatch}) => {

  const handleSelectChange = event => {
    const targetValue = event.target.value;
    dispatch(filterByTemperaments(targetValue)); 
  };
  return(
    <div>
      <select onChange={handleSelectChange} >
        <option value="defaultValue">
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