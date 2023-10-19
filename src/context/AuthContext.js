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
const registerAction = (dispatch) => {};
const loginAction = (dispatch) => {};
const logoutAction = (dispatch) => {};

export const { Context, Provider } = createDataContext(
    authReducer,
    {},
    {
        authStatus: false,
        user: {},
    }
);
