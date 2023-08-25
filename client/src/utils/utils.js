export const filterObjByProperty = (array, property, searchTerm) => {
    return array.filter(obj =>
      obj[property].split(', ').some(temp =>
        temp.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  export const handleChange = (set) => {
    return (event) => set(event.target.value);
  };
