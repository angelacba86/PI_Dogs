import { useDispatch } from "react-redux";
import { filterByOrigin } from "../../redux/actions";

const ByOrigin=()=>{
const dispatch= useDispatch();
//------handleSelect---///
  const handleSelectChange= event =>{
    const opValue= event.target.value;
    dispatch(filterByOrigin(opValue))
  }
  
  return(
    <div>
<select id="filterByOrigin" onChange={handleSelectChange}>
   <option value="" defaultValue>by Origin</option>
   <option value="Original">Original</option>
   <option value="Created">Created</option>
 </select>
</div>
  )
}
export default ByOrigin;