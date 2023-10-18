import { createContext, useReducer } from "react";

export default (reducer, actions, defaultState) => {
    const Context = createContext(null);

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultState);

        const boundActions = {};

        for (const key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };

    return {
        Context,
        Provider,
    };
};
