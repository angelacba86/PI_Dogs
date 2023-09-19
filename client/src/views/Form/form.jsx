import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments } from '../../redux/actions';
import { validate} from '../../utils/utils';
import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: '',
    image: '',
    temperament: '',
    minWeight: '',
    maxWeight: '',
    minHeight: '',
    maxHeight: '',
    minLifeSpan: '',
    maxLifeSpan: '',
  });

  const [errors, setErrors] = useState({});
  const [selectedTemps, setSelectedTemps] = useState([]);
  // const [tempErrors, setTempErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "temperament") {
      if (selectedTemps.includes(value)) {
        alert("This temperament has already been selected!");
      } else {
        const updateTemp = [...selectedTemps, value];
        setSelectedTemps(updateTemp);
      }
    } else {
      setState({
        ...state,
        [name]: value,
      });

      const validationErrors = validate({
        ...state,
        [name]: value,
      });
      setErrors(validationErrors);
    }
  };
  useEffect(()=>{
    setState((prevForm)=>({
      ...prevForm,temperament:selectedTemps.join(', ')
    }))
  },[selectedTemps]);

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    try {
      await axios.post('http://localhost:3001/dogs/', state )
      alert("the dog breed has been created")
      setState({
        name: '',
        image: '',
        temperament: '',
        minWeight: '',
        maxWeight: '',
        minHeight: '',
        maxHeight: '',
        minLifeSpan: '',
        maxLifeSpan: '',
      })
      setSelectedTemps([])

  } catch (error) {
    alert('no hay perro')
  }
  };

  const handleRemove = (selected) => {
    const updateTemp = selectedTemps.filter((temp) => temp !== selected);
    setSelectedTemps(updateTemp);
  };

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const tempList = useSelector((state) => state.tempList);

  return (
    <div className="centered-content">
      <h2>Create a Dog</h2>
      <form onSubmit={handleSubmit} className='form-cont'>
        <label>Name: </label>
        <input
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
          value={state.name}
          type="text"
        />
        <br />
        {errors.name && <p>{errors.name}</p>}
        <label>Image: </label>
        <input
          name="image"
          placeholder="URL image"
          onChange={handleInputChange}
          value={state.image}
        />
        <br />
        {errors.image && <p>{errors.image}</p>}
        <label>Height: </label>
        <input
          name="minHeight"
          placeholder="Min Height"
          onChange={handleInputChange}
          value={state.minHeight}
          type="number"
        />
        <label> - </label>
        <input
          name="maxHeight"
          placeholder="Max Height"
          onChange={handleInputChange}
          value={state.maxHeight}
          type="number"
        />
        <br />
        {errors.height && <p>{errors.height}</p>}
        <label>Weight: </label>
        <input
          name="minWeight"
          placeholder="Min Weight"
          onChange={handleInputChange}
          value={state.minWeight}
          type="number"
        />
        <label> - </label>
        <input
          name="maxWeight"
          placeholder="Max Weight"
          onChange={handleInputChange}
          value={state.maxWeight}
          type="number"
        />
        <br />
        {errors.weight && <p>{errors.weight}</p>}
        <label>Life Span: </label>
        <input
          name="minLifeSpan"
          placeholder="MinLifeSpan"
          onChange={handleInputChange}
          value={state.minLifeSpan}
          type="number"
        />
        <label> - </label>
        <input
          name="maxLifeSpan"
          placeholder="MaxLifeSpan"
          onChange={handleInputChange}
          value={state.maxLifeSpan}
          type="number"
        />
        <br />
        {errors.life_span && <p>{errors.life_span}</p>}
        <select
          name="temperament"
          value={selectedTemps}
          onChange={handleInputChange}
          multiple
        >
          <option value="" className="form-info-cont">Temperaments</option>
          {tempList?.map((temp) => (
            <option key={temp.id} value={temp.name}>
              {temp.name}
            </option>
          ))}
        </select>
        {selectedTemps.length > 0 ? (
          selectedTemps.map((select) => (
            <button
              key={select}
              value={select}
              onClick={() => handleRemove(select)}
            >
              {select}
            </button>
          ))
        ) : (
          <p>No temperaments selected</p>
        )}
        <br />
        <button type="submit">Create a Dog</button>
      </form>
    </div>
  );
};

export default Form;
