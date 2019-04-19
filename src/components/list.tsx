// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import React, { useState, useEffect, useRef, useReducer } from "react";

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <>
      <h1>{count}</h1>
      <input value={step} onChange={e => {
        dispatch({
          type: 'step',
          step: Number(e.target.value)
        });
      }} />
    </>
  );
}

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  const { count, step } = state;
  if (action.type === 'tick') {
    return { count: count + step, step };
  } else if (action.type === 'step') {
    return { count, step: action.step };
  } else {
    throw new Error();
  }
}

// function App() {
//   const [data, setData] = useState({ hits: [] });

//   useEffect(async () => {
//     const fetchData = async () => {
//         const result = await axios(
//             'http://47.93.253.17:1201/rs/users',
//         );
  
//         setData(result.data);
//       };
  
//       fetchData();
//   }, []);

//   return (
//     <ul>
//       {data.hits.map(item => (
//         <li key={item.id}>
//           <a href={item.password}>{item.username}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default App;