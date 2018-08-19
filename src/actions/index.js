import firebase from 'firebase';
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_COMPLETE, LOGIN_ERRORED, LOGIN_CLICKED} from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

const loginSuccess = (dispatch, user) => {
    dispatch({type: LOGIN_COMPLETE, payload: user});
    Actions.employeeList();
}

const loginFail = (dispatch, error) => {
    console.log('login failed');
    dispatch({type: LOGIN_ERRORED, payload: error.message});
}


export const loginUser = (username, password) => {
    return (dispatch) => { 
        dispatch({type: LOGIN_CLICKED, payload: true});
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then(user => loginSuccess(dispatch, user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(username, password)
            .then(user => loginSuccess(dispatch, user))
            .catch(error => loginFail(dispatch, error));
        })
    };
};
