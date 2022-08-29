import * as actions from '../Actions';
const initialState = {cars:[]};
export default (state = initialState, action)=>{
    switch(action.type){
        case actions.GET_GARAGE:
            const {cars} = action;
            return {...state, cars};
            default:
                return state;

    }
}