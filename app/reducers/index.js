import { combineReducers } from 'redux';
import currentUser from './currentUser';
import createUser from './createUser';
import posts from './posts';

const appReducer = combineReducers({
  currentUser,
  createUser,
  posts,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return appReducer(state = {}, action);
  }

  return appReducer(state, action);
}

export default rootReducer;
