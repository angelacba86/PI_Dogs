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
            <img src={dogDetails&&dogDetails.image} alt={dogDetails&&dogDetails.name}/>
            <h3>{dogDetails&&dogDetails.name}</h3>
            <p>Temperament: {dogDetails&&dogDetails.temperament}</p>
            <p>Height: {dogDetails&&dogDetails.height}</p>
            <p>Weight: {dogDetails&&dogDetails.weight}</p>
            <p>Span life: {dogDetails&&dogDetails.span_life}</p>

        </div>
      )
}
export default Detail