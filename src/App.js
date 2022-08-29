import './App.scss';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from './Redux/ActionsCreators';
import { GET_GARAGE } from './Redux/Actions';
import { getGarage } from './Redux/ActionsCreators';
import { useSelector } from 'react-redux/es/exports';
import { GenerateCar } from './Helpers/CarGenerate';
import { Garage } from './Garage';
function App() {
  axios.defaults.baseURL='http://localhost:3001/';
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getGarage());
  }, [dispatch])
  const handleClick = ()=>{
    dispatch(getGarage());
  }
 const cars = useSelector(state=>state?.garageCars?.cars);
  return (
    <div className="App">
      <div className="race">
       <button className='race__btn' onClick={handleClick}>To Garage</button>
       <button className='race__btn'>To Winners</button>
      </div>
      <Garage cars={cars}/>

      
     
     
    </div>
  );
}

export default App;
