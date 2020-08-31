import { combineReducers } from 'redux';

//register
const initialStateRegister = {
    form: {
        name: '',
        email: '',
        password: '',
        password_verification: '',
    },
};

const RegisterReducer = (state = initialStateRegister, action) => {
    if (action.type === 'SET_FORM') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType] : action.inputValue, 
            },
        };
    }
    return state;
};

//login
const initialStateLogin = {
    form: {
         email: '',
        password: '',
    },
};

const LoginReducer = (state = initialStateLogin, action) => {
    if (action.type == 'SET_FORM') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType] : action.inputValue,
            },
        };
    }
    return state;
};

//combine reducer
const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
});

export default reducer;
