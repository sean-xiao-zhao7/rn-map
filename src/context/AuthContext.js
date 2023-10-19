import createDataContext from "./createDataContext";
import { apiRequest } from "./apiRequest";

// reducer
const authReducer = (state, action) => {
    switch (action.type) {
        case "REGISTER":
            return state;
        case "LOGIN":
            return state;
        case "LOGOUT":
            return state;
        default:
            return state;
    }
};

// actions
const registerAction = (dispatch) => {
    return (payload) => {
        apiRequest("/register", "post", payload);
        dispatch("REGISTER", payload);
    };
};
const loginAction = (dispatch) => {
    return (payload) => {
        apiRequest("/login", "post", payload);
        dispatch("LOGIN", payload);
    };
};
const logoutAction = (dispatch) => {
    return () => {
        dispatch("LOGOUT", payload);
    };
};

export const { Context, Provider } = createDataContext(
    authReducer,
    { registerAction, loginAction, logoutAction },
    {
        authStatus: false,
        user: {},
    }
);
