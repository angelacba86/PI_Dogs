import { useDispatch } from "react-redux";
import { filtersByOrigin } from "../../redux/actions";

const ByOrigin=()=>{
const dispatch= useDispatch();
//------handleSelect---///
  const handleSelectChange= event =>{
    const opValue= event.target.value;
    dispatch(filtersByOrigin(opValue))
  }
  
  return(
    <div>
<select id="filterByOrigin" onChange={handleSelectChange}>
   <option value="" defaultValue>All Origin</option>
   <option value="Original">Original</option>
   <option value="Created">Created</option>
 </select>
</div>
  )
}
export default ByOrigin;