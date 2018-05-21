import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { logger } from 'redux-logger';

import Reducers from './app/reducers';


const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['currentUser']
}

const persistedReducer = persistReducer(persistConfig, Reducers)

const initialState = {};

const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(ReduxThunk, logger),
);

const persistor = persistStore(store)

export default store;
