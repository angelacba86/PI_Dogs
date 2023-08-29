import '../Form/form';
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from 'react';
import { getTemperaments } from '../../redux/actions';
import { validate } from '../../utils/utils';

const Form =()=>{
  const dispatch = useDispatch();
  
  const [state, setState] = useState({
    name:"",
    image:"",
    height:{
        minHeight:"",
        maxHeight:""
    },
    weight:{
        minWeight:"",
        maxWeight:"",
      },
      life_span:{
        minYears:"",
        maxYears:"",
      }
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const fieldParts = name.split('.');
    if (fieldParts.length === 2) {
      setState((prevState) => ({
        ...prevState,
        [fieldParts[0]]: {
          ...prevState[fieldParts[0]],
          [fieldParts[1]]: value,
        },
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    const values = {
      ...state,
      name: state.name,
      image: state.image,
      minHeight: state.height.minHeight,
      maxHeight: state.height.maxHeight,
      minWeight: state.weight.minWeight,
      maxWeight: state.weight.maxWeight,
      minYears:  state.life_span.minYears,
      maxYears:  state.life_span.maxYears,
    };
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getTemperaments());
  };
  console.log(state)

  //----FiltersList-----//
  useEffect(()=>{
    dispatch(getTemperaments())
  },[dispatch]);
  const tempList=useSelector(state=>state.tempList)

    return(
         <div>
            <h2>Create a Dog</h2>
            <form onSubmit={handleSubmit}> 
                <label>Name: </label>
                <input name="name" placeholder='Name' onChange={handleInputChange} value={state.name}></input><br />
                {errors.name&&<p>{errors.name}</p>}
                <label>Image: </label>
                <input name="image" placeholder='URL image' onChange={handleInputChange} value={state.image}></input><br />
                {errors.image&&<p>{errors.image}</p>}
                <label>Height: </label>
                <input name="height.minHeight" placeholder='Min Height' onChange={handleInputChange} value={state.height.minHeight} type="number"></input><label> - </label>
                <input name="height.maxHeight" placeholder='Max Height' onChange={handleInputChange} value={state.height.maxHeight} type="number"></input><br />
                {errors.height&&<p>{errors.height}</p>}
                <label>Weight: </label>
                <input name="weight.minWeight" placeholder='Min Weight' onChange={handleInputChange} value={state.weight.minHeight} type="number"></input> <label> - </label>
                <input name="weight.maxWeight" placeholder='Max Weight' onChange={handleInputChange} value={state.weight.maxHeight} type="number"></input><br />
                {errors.weight&&<p>{errors.weight}</p>}
                <label>Life Span: </label>
                <input name="life_span.minYears" placeholder='Min' onChange={handleInputChange} value={state.life_span.minYears} type="number"></input> <label> - </label>
                <input name="life_span.maxYears" placeholder='Max' onChange={handleInputChange} value={state.life_span.maxYears} type="number"></input><br />
                {errors.life_span&&<p>{errors.life_span}</p>}
                <select>
                    <option value="">Temperaments</option>
                {tempList?.map(temp => (
                    <option key={temp.id} value={temp.name}>
                        {temp.name}
                    </option>
                ))}
                </select><br />
                <button type="submit">Create a Dog</button>
            </form>
            </div>
    )}
export default Form;