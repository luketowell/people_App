import { EMPLOYEE_DETAILS } from '../actions/types';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_DETAILS:
            return action.payload;
        default:
            return state;   
    }
};