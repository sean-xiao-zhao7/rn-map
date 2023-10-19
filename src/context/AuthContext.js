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
    return async (payload) => {
        const result = apiRequest("/register", "post", payload);
        dispatch({
            type: "REGISTER",
            payload: { jwt: result.jwt, email: payload.email },
        });
    };
};
const loginAction = (dispatch) => {
    return async (payload) => {
        const result = await apiRequest("/login", "post", payload);
        dispatch({
            type: "LOGIN",
            payload: { jwt: result.jwt, email: payload.email },
        });
    };
};
const logoutAction = (dispatch) => {
    return () => {
        dispatch({ type: "LOGOUT" });
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
