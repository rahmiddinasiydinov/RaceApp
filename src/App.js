import './App.scss';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_GARAGE } from './Redux/Actions';
import { getGarage } from './Redux/ActionsCreators';
import { getWinners } from './Redux/ActionsCreators';
import { useSelector } from 'react-redux/es/exports';
import { GenerateCar } from './Helpers/CarGenerate';
import { Garage } from './Garage';
import { Winners } from './Winners';
import {Link} from "react-router-dom"
import { Route, Routes } from 'react-router';
function App() {
  axios.defaults.baseURL='http://localhost:3001/';
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getGarage());
  }, [dispatch])
  const handleGarage = ()=>{
    dispatch(getGarage());
  }
  const handleWinners = ()=>{
    dispatch(getWinners())
  }
 const cars = useSelector(state=>state?.garageCars?.cars);
 const winners = useSelector(state=>state?.winnerCars?.winners);
  return (
    <div className="App">
      <div className="race">
       <Link className='race__btn' to={'/'} onClick={handleGarage}>To Garage</Link>
       <Link className='race__btn' to={'/winners'} onClick={handleWinners}>To Winners</Link>
      </div>

      <Routes><Route path='/' element={<Garage cars={cars}/>}/></Routes>
      <Routes><Route path='/winners' element={<Winners winners={winners} cars={cars}/>}/></Routes>
      

      
     
     
    </div>
  );
}

export default App;
