import { createContext, useReducer } from "react";

export default (reducer, actions, initialState) => {
    const Context = createContext(null);

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        // each child context has its own actions. However, initially they don't have access to this reducer's dispatch.
        const actionsWithDispatch = {};

        for (const actionName in actions) {
            // each action returns a function that uses this reducer's dispatch
            actionsWithDispatch[actionName] = actions[actionName](dispatch);
        }

        return (
            // context provides the state and key/value pairs of actions. Key is name of action.
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
