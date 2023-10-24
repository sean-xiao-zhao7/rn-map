import AsyncStorage from "@react-native-async-storage/async-storage";

import createDataContext from "./createDataContext";
import { apiRequest } from "./apiRequest";

// reducer
const tracksReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TRACK":
            return {
                ...state,
                authStatus: "registered",
                user: {
                    email: action.payload.email,
                    jwt: action.payload.jwt,
                },
            };
        case "ERROR":
            return {
                ...state,
                error: action.payload.error,
            };
        case "CLEAR_ERROR":
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

// actions
const addTrackAction = (dispatch) => {
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

const clearErrorAction = (dispatch) => {
    return () => {
        dispatch({ type: "CLEAR_ERROR" });
    };
};

export const { Context, Provider } = createDataContext(
    tracksReducer,
    {
        clearErrorAction,
    },
    {
        tracks: {},
        error: null,
    }
);
