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
    title: 'Login',
};

const LoginReducer = (state = initialStateLogin, action) => {
    return state;
};

//global
const initialState = {
    name: 'Pak Eko',
};

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
});

export default reducer;
