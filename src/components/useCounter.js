import React, { useReducer, useMemo } from 'react';

const CounterContext = React.createContext();

function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return { counter: state.counter + 1};
        case 'decrement':
            return { counter: state.counter - 1};
        default:
            throw new Error();
    }
}

export function CounterProvider (props) {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    const value = useMemo(() => {
        return ({
            state,
            dispatch,
        });
    }, [state]);

    return <CounterContext.Provider value={value} {...props} />
}

export function useCounter() {
    const context = React.useContext(CounterContext);
    if (!context) {
        throw new Error('Bad context');
    }

    return context;
}