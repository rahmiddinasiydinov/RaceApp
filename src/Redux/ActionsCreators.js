import * as actions from './Actions';

export const setGarage = (data)=> ({
    type:actions.GARAGE_SUCCESS, 
    cars:data
});
export const setWinners = data =>({
    type:actions.WINNERS_SUCCESS, 
    winners:data
})
export const getGarage = () => ({type:actions.GET_GARAGE})
export const getWinners = ()=> ({type:actions.GET_WINNERS});