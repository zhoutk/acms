// import React, { useState, useEffect } from 'react';
import axios from 'axios';

import React, { useState, useEffect, useRef, useReducer } from "react";

export default function SearchResults() {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    function getFetchUrl() {
      return 'http://47.93.253.17:1201/rs/users';
    }

    async function fetchData() {
      const result = await axios(getFetchUrl());
      setData(result.data);
}

    fetchData();
  }, []);
  return (
    <>
      <ul>
        {data.data.map(item => (
          <li key={item.id}>
            <a href={item.username}>{item.username}</a>
          </li>
        ))}
      </ul>
    </>
  );
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

  // return (
  //   <ul>
  //     {data.hits.map(item => (
  //       <li key={item.id}>
  //         <a href={item.password}>{item.username}</a>
  //       </li>
  //     ))}
  //   </ul>
  // );
// }

// export default App;