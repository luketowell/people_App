import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_CLICKED, LOGIN_COMPLETE, LOGIN_ERRORED} from "../actions/types";
import { auth } from "../../node_modules/firebase";

const INITIALSTATE = {
    email: '',
    password: '',
    loading: false,
    error: '',
    user : null
};

export default (state = INITIALSTATE, action) => {
    switch (action.type){
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
            break;
        case PASSWORD_CHANGED:
            return {...state, password: action.payload}
            break;
        case LOGIN_CLICKED:
            return {...state, loading: action.payload}
            break;
        case LOGIN_COMPLETE:
            return {...state, ...INITIALSTATE, user: action.payload}
            break;
        case LOGIN_ERRORED:
            return {...state, loading: false, error: 'Authentication Failed', password: '', email: ''}
        default:
            return state;
            break;
    }
};