import { combineReducers } from 'redux';
import authReducer from './authReducers';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeListReducer from './EmployeeListReducer';

export default combineReducers({
    auth: authReducer,
    employeeForm: EmployeeFormReducer,
    employeeList: EmployeeListReducer
});