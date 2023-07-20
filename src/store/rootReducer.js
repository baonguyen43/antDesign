import { combineReducers } from 'redux';

import counterReducer from './counter/reducer';
import todoReducer from './todo/reducer';
import profileReducer from './profile/reducer';
// import bankReducer from './BankApp/reducers';
// import userReducer from './UsersApp/reducers';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  counterReducer, // Ngăn thực phẩm
  todoReducer,
  profileReducer,
  // bankReducer,
  // userReducer, // Ngăn chứa vật phẩm khác
});

export default rootReducer;
