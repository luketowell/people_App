import { EMAIL_CHANGED, PASSWORD_CHANGED } from "../actions/types";

const INITIALSTATE = {email: ''};

export default (state = INITIALSTATE, action) => {
    switch (action.type){
        EMAIL_CHANGED:
            return state
            break;
        PASSWORD_CHANGED:
            return state
            break;
        default: 
            return state;
            break;
    }
};