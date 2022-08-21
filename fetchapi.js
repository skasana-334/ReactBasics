import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import axios from 'axios';
function App(){
  let [opt,nopt]=useState('null');
  let [nam,nname]=useState('');
  let [mov,nmov]=useState('');
     //this is how to fetch api using axios
     async function getdata(){
      // let val=await axios.get(`https://pokeapi.co/api/v2/pokemon/${opt}`);
      let x=await fetch(`https://pokeapi.co/api/v2/pokemon/${opt}`);
      let val=await x.json();
      nname(val.data.name);
      nmov(val.data.moves.length);
    }
  useEffect(()=>{ 
 
  getdata();
},[])// we have to use [] in fetch

    return(
        <>
        <h1>you choose {opt}</h1>
        <h1>my name is {nam}</h1>
        <h2>my special move is {mov}</h2>
     <select onChange={(ip)=>{
      nopt(ip.target.value);
     }}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
     </select>
        </>
    )

}
export default App;