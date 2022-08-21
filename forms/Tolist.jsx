import React from "react";

function Tolist(props){
    return(<>
    <li>{props.text} <button onClick={()=>{
        props.khtm(props.id);
    }}><DeleteForeverIcon/></button></li>
    </>)
} 
// function App(){
//     let [task,ntask]=useState('add something');
//     let[items,nitems]=useState([]);
//     let Change=(ip)=>{
//   ntask(ip.target.value);
//     }
//     let itemval=()=>{
//    nitems( (prev)=>{
//     return [...prev,task]
//   })
//   ntask('');
//     }
//     let dlt=(id)=>{
//       nitems((prev)=>{
//        return prev.filter((elem,index)=>{
//   return index !== id;
//        }) 
//       })
//   console.log('dlyt');
//     }
//     return(
//       <> 
      
//     <div>
//       <div >
//         <h1>To-do List</h1>
//         <input type="text" placeholder="enter your task" onChange={Change} value={task}/>
//         <button onClick={itemval}>+</button>
//         <ol>
//           {items.map((val,idx)=>{
//             return <Tolist 
//             key={idx}
//             id={idx}
//             text={val}
//             khtm={dlt}
//             />
//           })}
//         </ol>
//       </div>
//       </div> 
   
//     </>
//   )
//   }

// function App(){
//     let [count,change]=useState(0);
//     let inc=()=>{
//       change(count+1);
//     }
//     let dec=()=>{
//       if(count===0){
//          alert('sorry no change');
//       }
//     else{
//       change(count-1);}
      
      
//       }
    
//     return(<>
//   <h1>{count}</h1>
//   <button onClick={inc}>increment</button><span><button onClick={dec}>decrement</button></span>
  
//     </>)
//   }
  
export default Tolist;