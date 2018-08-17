import { EMAIL_CHANGED, PASSWORD_CHANGED } from "../actions/types";

const INITIALSTATE = {email: '', password: ''};

export default (state = INITIALSTATE, action) => {
    switch (action.type){
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
            break;
        case PASSWORD_CHANGED:
            console.log(action.payload)
            return {...state, password: action.payload}
            break;
        default: 
            return state;
            break;
    }
};