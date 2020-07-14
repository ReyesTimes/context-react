import React from 'react';
import { useCounter } from './useCounter.js';
function Counter ({ nextStep }) {
    const {state, dispatch} = useCounter();
    
    return (
    <>
        Número de pedidos <br/>
        {state.counter}
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })} disabled={state.counter < 1}>-</button>
        <button onClick={() => nextStep() }>Siguiente</button>
    </>
    );
}

export default Counter;