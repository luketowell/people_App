import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
};

export const employeeCreate = ({ firstName, lastName, phone, shift }) => {
    return{
        type: EMPLOYEE_CREATE,
        payload: { firstName, lastName, phone, shift }
    }
}