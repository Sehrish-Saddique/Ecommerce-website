// import React from 'react'
// import { useState } from 'react'
// export default function Try() {
//     const[count, setCount] = useState(0);
//     const handleClick =() =>{
//         setCount(count+1);
//     }
//   return (
//     //functionbase
//     //usestatebase
//     <div className="m-5 p-5">try file
//     <h1>Count {count} </h1>
//     <button onClick={handleClick}> Click </button><hr/>
//     </div>
//   )
// }

// This is class base component
// import React, { Component } from 'react'

// export default class Try extends Component {
//     state={
//         a:8,
//         text:"Hello",
//     };
//     handleClick=()=>{
//        this.setState((prev)=>({
//         a: prev.a + 1,
//         text: "THisis ipdated value"
//        }));
//     }
//   render() {
//     return (
//       <div className="m-5 p-5">try
//       <h1>Hello{this.state.a}</h1>
//       <button onClick={this.handleClick}>Click</button>
//       </div>
//     )
//   }
// }


import React, { useEffect , useState} from 'react'
 export default function Try(props) {
    const [count,setCount] =useState(0);
    const [data,setData] =useState([]);
    useEffect(()=>{
            async function fetchData(){
                const response = await fetch('https://fakestoreapi.com/products')
                const responseData = await response.json();
                setData(responseData);
                console.log(responseData);
            }
            fetchData();
    },[]);
  return (
    <div className="p-6 m-6">
    <h1>Hello {props.name} Count {count}</h1>
           <button onClick={()=>{
            setCount(count+1);
           }}>Click</button>

           {data.map((item,index)=>(
            <h1>This is {item.title}</h1>
           ))}

    </div>
  )
}
