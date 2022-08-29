import {call, put} from 'redux-saga/effects';
import {setGarage} from '../../ActionsCreators';
import {requestGetGarage} from '../Requests/garageRequest';

export function* handleGarage(action){
    try {
         const response = yield call(requestGetGarage);
         const {data}= response;
         console.log(data);
         yield put(setGarage(data));
    } catch (error) {
        console.log(error);
    }
}