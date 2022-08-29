import * as actions from './Actions';

export const setGarage = (data)=> ({
    type:actions.GET_GARAGE, 
    cars:data
});
export const getGarage = () => ({type:actions.GET_GARAGE})
export const getWinners = ()=> ({
    type:actions.GET_WINNERS
});