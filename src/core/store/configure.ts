import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import user from './shared/reducer/user.slice'
import chart from './shared/reducer/chart.slice'
import project from '../../modules/home/store/reducer/project.slice'
import gateway from '../../modules/home/store/reducer/gateway.slice'
import report from '../../modules/home/store/reducer/report.slice'
import { watcherSaga } from "./rootSaga";

const reducer = combineReducers({
  user,
  project,
  gateway,
  report,
  chart
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
