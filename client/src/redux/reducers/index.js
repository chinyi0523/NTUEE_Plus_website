import { combineReducers } from 'redux-immutable';
import loginReducer from './loginReducer';

const rootReducer = combineReducers(
    {
        loginReducer
    }
)


export default rootReducer;