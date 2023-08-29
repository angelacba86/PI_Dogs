import '../Form/form';
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from 'react';
import { getTemperaments, createDog } from '../../redux/actions';
import { validate } from '../../utils/utils';

const Form =()=>{
  const dispatch = useDispatch();
  
  const [state, setState] = useState({
    name: "",
    image: "",
    temperament: [],
    minWeight: "",
    maxWeight: "",
    minHeight: "",
    maxHeight: "",
    minLife: "",
    maxLife:""
  });

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
    }

    const values = {
      name: state.name,
      image: state.image,
      minHeight: state.minHeight,
      maxHeight: state.maxHeight,
      minWeight: state.minWeight,
      maxWeight: state.maxWeight,
      minYears:  state.minYears,
      maxYears:  state.maxYears,
    };
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDog());
  };

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
                <input name="name" placeholder='Name' onChange={handleInputChange} value={state.name} type="text"></input><br />
                {errors.name&&<p>{errors.name}</p>}
                <label>Image: </label>
                <input name="image" placeholder='URL image' onChange={handleInputChange} value={state.image}></input><br />
                {errors.image&&<p>{errors.image}</p>}
                <label>Height: </label>
                <input name="minHeight" placeholder='Min Height' onChange={handleInputChange} value={state.height.minHeight} type="number"></input><label> - </label>
                <input name="maxHeight" placeholder='Max Height' onChange={handleInputChange} value={state.height.maxHeight} type="number"></input><br />
                {errors.height&&<p>{errors.height}</p>}
                <label>Weight: </label>
                <input name="minWeight" placeholder='Min Weight' onChange={handleInputChange} value={state.weight.minHeight} type="number"></input> <label> - </label>
                <input name="maxWeight" placeholder='Max Weight' onChange={handleInputChange} value={state.weight.maxHeight} type="number"></input><br />
                {errors.weight&&<p>{errors.weight}</p>}
                <label>Life Span: </label>
                <input name="minLife" placeholder='Min' onChange={handleInputChange} value={state.life_span.minYears} type="number"></input> <label> - </label>
                <input name="maxLife" placeholder='Max' onChange={handleInputChange} value={state.life_span.maxYears} type="number"></input><br />
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