import { useDispatch } from "react-redux"
import { orderBy } from "../../redux/actions";

const AlphaOrder=()=>{

const dispatch= useDispatch();
   const handleSelectChange=event=>{
      const order=event.target.value
      dispatch(orderBy(order))
   }
 return(
    <div>
<select id="alphaOrder" onChange={handleSelectChange}>
   <option value="" defaultValue >Sort</option>
   <option value="az">A to Z</option>
   <option value="za">Z to A</option>
 </select>
</div>
 )
}

export default AlphaOrder;