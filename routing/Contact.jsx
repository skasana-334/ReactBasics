import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import Head from './Head';
const Contact = () => {
    let navig=useNavigate();//it is use to naig where we will directed
    let gohome=(()=>{
        navig('/');
    })
  return (
    <>

  
      <h1>contact</h1>
      <button onClick={gohome}>Homepage</button>
      <button onClick={()=>{
        navig(-1);
      }}>🔙</button>

    </>
  )
}

export default Contact
