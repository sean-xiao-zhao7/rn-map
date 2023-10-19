import { createContext, useReducer } from "react";

export default (reducer, actions, initialState) => {
    const Context = createContext(null);

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const actionsWithDispatch = {};

        for (const key in actions) {
            actionsWithDispatch[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...actionsWithDispatch }}>
                {children}
            </Context.Provider>
        );
    };

    return {
        Context,
        Provider,
    };
};
