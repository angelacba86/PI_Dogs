import { useDispatch } from "react-redux";
import { orderBy } from "../../redux/actions";

const WeightOrder=()=>{
    const dispatch= useDispatch();
    const handleSelectChange= event=>{
        const order= event.target.value
        dispatch(orderBy(order))
        console.log(order)
    }

    return(
        <div>
<select id="weightOrder" onChange={handleSelectChange}>
   <option value="" defaultValue >Sort by Weight</option>
   <option value="Ascending">Ascending</option>
   <option value="Descending">Descending</option>
 </select>
</div>
    )
}
export default WeightOrder;