
export const handleChange = (set) => {
    return (event) => set(event.target.value.trim());
  };


  ///---Create a Dog---///
  export const validate = (values) => {
    let errors = {};
    //Name
    const regexName= /^[a-zA-Z\s]+$/;
    const regexImage=/(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if(values.name.length<4 || values.name.length>10){
        errors.name="Name must be between 5 and 10 characters"
    }
    if(!regexName.test(values.name)){
        errors.name="Numbers or special characters are not allowed"
    }
    //Images:
    if(!regexImage.test(values.image)){
        errors.image="Invalid URL format"
    }
    // //Height:

    if (!values.minHeight || !values.maxHeight) {
      errors.height = "Values are required";
    // } else if (isNaN(Number(values.minHeight)) || isNaN(Number(values.maxHeight))) {
    //   errors.height = "Must be a number";
    } else if (values.minHeight.includes(" ") || values.maxHeight.includes(" ")) {
      errors.height = "Space not allowed";
    } else if(Number(values.minHeight)<10 || Number(values.maxHeight)>99){
      errors.height="Height must be between 10 and 99"
    } else if (Number(values.minHeight) > Number(values.maxHeight)) {
      errors.height = "The first number must be smaller than the second";
    }
    // //Weight:

    if (!values.minWeight || !values.maxWeight) {
      errors.weight = "Values are required";
    // } else if (isNaN(Number(values.minWeight)) || isNaN(Number(values.maxWeight))) {
    //   errors.weight = "Must be a number";
    } else if (values.minWeight.includes(" ") || values.maxWeight.includes(" ")) {
      errors.weight = "Space not allowed";
    } else if(Number(values.minWeight)<1 || Number(values.maxWeight)>80){
      errors.weight="Weight must be between 1 and 80"
    } else if (Number(values.minWeight) > Number(values.maxWeight)) {
      errors.weight = "The first number must be smaller than the second";
    }
    
    // //Life Span:
    if(!values.minYears||!values.maxYears) {
        errors.life_span="Values are required";
    // } else if (isNaN(Number(values.minYears)) || isNaN(Number(values.maxYears))) {
    //     errors.life_span = "Must be a number";
    }else if(values.minYears.includes(" ") || values.maxYears.includes(" ")){
        errors.life_span="Space not allowed"
    }else if(Number(values.minYears)<10 || Number(values.maxYears)>30){
        errors.life_span="Must be between 10 and 30 years"
    }else if(Number(values.minYears)>Number(values.maxYears)){
        errors.life_span= "The first number must be smaller than the second" 
    }

    return errors;
  };

