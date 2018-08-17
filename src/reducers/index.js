import { combineReducers } from 'redux';
import professorsReducer from "./professors"

const rootReducer = combineReducers({
  professors: professorsReducer
});

export default rootReducer;