import { applyMiddleware} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./Reducers";
import createSagaMiddleware from "@redux-saga/core";
import GarageReducer from "./Reducers/Garage";
import watcherSaga  from "./Sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({reducer: Reducers, middleware:[sagaMiddleware]});

sagaMiddleware.run(watcherSaga);
