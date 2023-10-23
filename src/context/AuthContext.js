import AsyncStorage from "@react-native-async-storage/async-storage";

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
        case "ERROR":
            return {
                ...state,
                error: action.payload.error,
            };
        case "REGISTER_ERROR":
            return {
                ...state,
                register_error: action.payload.register_error,
            };
        case "CLEAR_ERROR":
            return {
                ...state,
                error: null,
            };
        case "CLEAR_REGISTER_ERROR":
            return {
                ...state,
                register_error: null,
            };
        default:
            return state;
    }
};

// actions
const registerAction = (dispatch) => {
    return async (payload) => {
        if (
            payload.email === "" ||
            payload.password === "" ||
            payload.firstname === "" ||
            payload.lastname === ""
        ) {
            dispatch({
                type: "REGISTER_ERROR",
                payload: { register_error: "Some field(s) is empty." },
            });
        } else if (payload.password !== payload.passwordAgain) {
            dispatch({
                type: "REGISTER_ERROR",
                payload: { register_error: "Two passwords are not equal." },
            });
        } else {
            let result = await apiRequest("/register", "post", payload);

            if (typeof result === "object") {
                dispatch({
                    type: "REGISTER",
                    payload: { jwt: result.jwt, email: payload.email },
                });
                await AsyncStorage.setItem("app-maps-jwt", result.jwt);
                await AsyncStorage.setItem("app-maps-email", payload.email);
            } else {
                if (result.includes("401")) {
                    result = "Wrong email/password.";
                } else {
                    result = "Server error.";
                }
                dispatch({
                    type: "ERROR",
                    payload: { error: result },
                });
            }
        }
    };
};
const loginAction = (dispatch) => {
    return async (payload) => {
        if (payload.email === "" || payload.password === "") {
            dispatch({
                type: "ERROR",
                payload: { error: "Email/password is empty." },
            });
        } else {
            let result = await apiRequest("/login", "post", payload);

            if (typeof result === "object") {
                dispatch({
                    type: "LOGIN",
                    payload: { jwt: result.jwt, email: payload.email },
                });
                await AsyncStorage.setItem("app-maps-jwt", result.jwt);
                await AsyncStorage.setItem("app-maps-email", payload.email);
            } else {
                if (result.includes("401")) {
                    result = "Wrong email/password.";
                } else if (result.includes("404")) {
                    result = "Email is not registered.";
                } else {
                    result = "Server error.";
                }
                dispatch({
                    type: "ERROR",
                    payload: { error: result },
                });
            }
        }
    };
};
const logoutAction = (dispatch) => {
    return () => {
        dispatch({ type: "LOGOUT" });
    };
};

const clearErrorAction = (dispatch) => {
    return () => {
        dispatch({ type: "CLEAR_ERROR" });
    };
};

const clearRegisterErrorAction = (dispatch) => {
    return () => {
        dispatch({ type: "CLEAR_REGISTER_ERROR" });
    };
};

export const { Context, Provider } = createDataContext(
    authReducer,
    {
        registerAction,
        loginAction,
        logoutAction,
        clearErrorAction,
        clearRegisterErrorAction,
    },
    {
        authStatus: false,
        user: {},
        error: null,
        register_error: null,
    }
);
