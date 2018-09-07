import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
};

export const employeeCreate = ({ firstName, lastName, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
        .push({firstName, lastName, phone, shift})
        .then(() => {
            dispatch({type: EMPLOYEE_CREATE, payload: true});
            Actions.pop();
        })
    };

}