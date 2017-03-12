import { combineReducers } from 'redux';
import filterReducer from './filter';
import todoReducer from './todos';
const rootReducer = combineReducers({
  todoData: todoReducer,
  filterData: filterReducer,
});
export default rootReducer;