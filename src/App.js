import './App.scss';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from './Redux/ActionsCreators';
import { GET_GARAGE } from './Redux/Actions';
import { getGarage } from './Redux/ActionsCreators';
function App() {
  axios.defaults.baseURL='http://localhost:3001/';
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(getGarage());
  }
  return (
    <div className="App">
   <h1>Hello world</h1>
   <button onClick={handleClick}>Click to test</button>
    </div>
  );
}

export default App;
