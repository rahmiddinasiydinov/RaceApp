import {takeLatest} from 'redux-saga/effects';
import { handleGarage } from './Handlers/garageHandler';
import { GET_GARAGE } from '../Actions';

export default function* watcherSaga(){
    yield takeLatest(GET_GARAGE, handleGarage);
}