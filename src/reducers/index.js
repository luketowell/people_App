import { combineReducers } from 'redux';
import authReducer from './authReducers';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
    auth: authReducer,
    employeeForm: EmployeeFormReducer
});