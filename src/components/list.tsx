// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import React, { useState, useEffect } from "react";

export default function DataLoader() {
  const [data, setData] = useState({hits: []});

  useEffect(() => {
    fetch("http://47.93.253.17:1201/rs/users")
      .then(response => response.json())
      .then(data => setData({hits: data.data}));
  }, []);

  return (
    <div>
      <ul>
        {data.hits.map(el => (
          <li key={el.id}>{el.username}</li>
        ))}
      </ul>
    </div>
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