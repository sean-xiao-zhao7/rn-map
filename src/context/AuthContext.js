import createDataContext from "./createDataContext";

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
        dispatch("REGISTER", payload);
    };
};
const loginAction = (dispatch) => {
    return (payload) => {
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
