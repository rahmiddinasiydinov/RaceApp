import * as actions from '../Actions';

const initialState = {winners:[]};

export default (state=initialState, action)=>{
    switch(action.type){
        case actions.WINNERS_SUCCESS:
            return {...state, winners:action.winners};
        default:
            return state;
    }
}