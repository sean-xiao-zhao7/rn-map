import createDataContext from "./createDataContext";

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

export const { Context, Provider } = createDataContext(
    authReducer,
    {},
    {
        authStatus: false,
        user: {},
    }
);
