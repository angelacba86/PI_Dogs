import '../Detail/detail.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, pageCleaner } from '../../redux/actions';
import { useEffect } from 'react';

const Detail=()=>{

    const {id}= useParams();
    const dispatch=useDispatch();
    const detailDog= useSelector(state=>state.detailDog);

    useEffect(()=>{
        dispatch(getDetail(id))
        return () => {
            dispatch(pageCleaner())}
    },[dispatch,id]);

    const dogDetails=detailDog&&detailDog[0];

      return (
   
        <div>
          {dogDetails ? <><img src={dogDetails && dogDetails.image} alt={dogDetails && dogDetails.name} />
          <h3>{dogDetails && dogDetails.name}</h3>
          <p>Temperaments: {dogDetails && dogDetails.temperaments}</p>
          <p>Height: {dogDetails && dogDetails.minHeight}-{dogDetails && dogDetails.maxHeight}</p><p>Weight: {dogDetails && dogDetails.minWeight}- {dogDetails && dogDetails.maxWeight}</p>
          <p>Life Span: {dogDetails && dogDetails.minLifeSpan}-{dogDetails && dogDetails.maxLifeSpan} years</p>
          <p>Origin:{dogDetails&& dogDetails.origin}</p></> : <p>Loading...</p>}
        </div>
      )
}
export default Detail