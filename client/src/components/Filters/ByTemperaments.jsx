
const ByTemperaments = ({tempList}) => {

  return(
    <div>
      <select id="filterByTemperaments" >
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