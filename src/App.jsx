// import React from 'react'
// import { useState, useEffect } from 'react';
// import Products from './Products';
// import Api from './Api';
// import Forms from './Forms';

// const App = () => {
//   const datas = [
//     {
//       id: 1,
//       name: "Victor",
//       age: 42,
//       isStudent: true,
//     },
//     {
//       id: 2,
//       name: "Rachael",
//       age: 25,
//       isStudent: true,
//     },
//     {
//       id: 3,
//       name: "Motun",
//       age: 23,
//       isStudent: true,
//     },
//     {
//       id: 4,
//       name: "Ibrahim",
//       age: 26,
//       isStudent: true,
//     },
//     {
//       id: 5,
//       name: "Emmanuel",
//       age: 12,
//       isStudent: true,
//     },
//     {
//       id: 6,
//       name: "Amaka",
//       age: 20,
//       isStudent: true,
//     },
//     {
//       id: 7,
//       name: "Sola",
//       age: 50,
//       isStudent: true,
//     },
//     {
//       id: 8,
//       name: "Dorcas",
//       age: 21,
//       isStudent: false,
//     },
//   ];

//   const [array, setArray] = useState(datas)

//   const handleClick = (id) => {
//       setArray((prev)=>(
//         prev.map((i)=>(
//           i.id  === id ? { ...i, isStudent: !i.isStudent } : i
//         ))
//       ))
//   }

//   return (
//     <div className="grid grid-cols-4 gap-2">
//         {/* {array.map((data) => (
//             <div key={data.id} className="w-96 h-auto bg-slate-950 p-4 flex flex-col justify-center items-center gap-5 text-white rounded-lg">
//                 <p>Id: {data.id}</p>
//                 <p>Name: {data.name}</p>
//                 <p>Age: {data.age}</p>
//                 <div className="flex gap-2 items-center">
//                     <p>{data.isStudent ? "Student" : "Not a student"}</p>
//                     <button key={data.id} onClick={()=>handleClick(data.id)} className="py-1 bg-blue-800 text-white px-3 rounded-md">change</button>   
//                 </div>
//             </div>
     
//      ))} */}

//   <Products/>
//   <Api/>
//     </div>
//   );
// };
// export default App


// import React from 'react'
// import Forms from './Forms'


// const App = () => {
//   return (
//     <div>
//       <Forms />
      

      
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Child from './Components/Child'
// import DataContext from './Components/DataContext'


// const App = () => {

//   const student ={

//     name: 'Chiamaka',
//     age: 16
//   }
//   return (
//     <div>
//       <DataContext.Provider value = {student}>

//       <Child/>
//       </DataContext.Provider>
      
      
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Ref from './Components/Ref'


// const App = () => {
//   return (
//     <div>

//       <Ref/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Products from './Products'

const App = () => {
  return (
    <div>


      <Products/>
    </div>
  )
}

export default App
