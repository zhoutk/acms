import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import createReducer from '../common/createReducer';

export default function Counter({ initialCount }) {
  const initialState = { count: initialCount };

  const reducer = createReducer(initialState, {
    reset: () => initialState,
    increment: state => ({ count: state.count + 1 }),
    decrement: state => ({ count: state.count - 1 })
  });

  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Counter initialCount={0} />, rootElement);