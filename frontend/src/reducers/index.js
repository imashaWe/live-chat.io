import {combineReducers} from 'redux';
import FormReducer from "./form-reducer";
// create root reducer
const rootReducer = combineReducers({
    formState: FormReducer
});

export default rootReducer;
