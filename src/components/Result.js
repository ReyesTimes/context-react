import React from 'react';
import { useCounter } from './useCounter.js';

function Result () {
    const { state } = useCounter();
    return (
        <div>{state.counter}</div>
    );
}

export default Result;