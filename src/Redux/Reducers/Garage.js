import * as actions from '../Actions';
const initialState = {cars:[]};
export default (state = initialState, action)=>{
    switch(action.type){
        case actions.GARAGE_SUCCESS:
            const {cars} = action;
            return {...state, cars};
            default:
                return state;

    }
}