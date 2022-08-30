import { faAllergies } from '@fortawesome/free-solid-svg-icons';
import {takeLatest} from 'redux-saga/effects';
import { GET_GARAGE, GET_WINNERS } from '../Actions';
import { handleGarage } from './Handlers/garageHandler';
import { handleWinners } from './Handlers/winnersHandler';
import {all} from 'redux-saga/effects'
function* garage(){
    yield takeLatest(GET_GARAGE, handleGarage);
}
function* winners(){
    yield takeLatest(GET_WINNERS, handleWinners);
}

export default function* watcherSaga(){
    yield all([
        garage(), 
        winners()
    ])
}