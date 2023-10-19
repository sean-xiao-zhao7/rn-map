import createDataContext from "./createDataContext";
import { apiRequest } from "./apiRequest";

// reducer
const authReducer = (state, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                authStatus: "registered",
                user: {
                    email: action.payload.email,
                    jwt: action.payload.jwt,
                },
            };
        case "LOGIN":
            return {
                ...state,
                authStatus: "loggedin",
                user: {
                    email: action.payload.email,
                    jwt: action.payload.jwt,
                },
            };
        case "LOGOUT":
            return {
                ...state,
                authStatus: false,
                user: {},
            };
        default:
            return state;
    }
};

// actions
const registerAction = (dispatch) => {
    return (payload) => {
        const result = apiRequest("/register", "post", payload);
        dispatch("REGISTER", { jwt: result.jwt, email: payload.email });
    };
};
const loginAction = (dispatch) => {
    return (payload) => {
        const result = apiRequest("/login", "post", payload);
        dispatch("LOGIN", { jwt: result.jwt, email: payload.email });
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
        error: null,
    }
);
