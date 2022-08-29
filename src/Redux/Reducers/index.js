import GarageReducer from "./Garage";
import WinnerReducer from "./Winners";
import { combineReducers } from "redux";

export default combineReducers({
    garageCars:GarageReducer, 
    winnerCars:WinnerReducer
})