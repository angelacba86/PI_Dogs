import '../Detail/detail.css'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const [dogDetails, setDogDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchDogDetails() {
      try {
        const response = await axios.get(`http://localhost:3001/dogs/${id}`);
        setDogDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDogDetails();
  }, [id]);
  console.log(dogDetails)

  return (
    <div>
      {dogDetails ? (
        <>
          <img src={dogDetails.image} alt={dogDetails.name} />
          <h3>{dogDetails.name}</h3>
          <p>Temperament: {dogDetails.temperament}</p>
          <p>
            Height: {dogDetails.minHeight}-{dogDetails.maxHeight}
          </p>
          <p>
            Weight: {dogDetails.minWeight}- {dogDetails.maxWeight}
          </p>
          <p>
            Life Span: {dogDetails.minLifeSpan}-{dogDetails.maxLifeSpan}
          </p>
          <p>Origin:{dogDetails.origin}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail


