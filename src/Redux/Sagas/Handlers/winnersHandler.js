import {call, put} from 'redux-saga/effects'
import { requestToWinners } from '../Requests/winnersRequest';
import { setWinners } from '../../ActionsCreators';

export function* handleWinners(){
  try {
    const response = yield call(requestToWinners);
    const {data} = response;
    console.log(data);
    yield put(setWinners(data));
  } catch (error) {
    console.log(error);
  }
}