
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Head from './Head';
const About = () => {
    let navig=useNavigate();
    let gohome=(()=>{
        navig('/');
    })
  return (
    <>
 
      <h1>about</h1>
      <button onClick={gohome}>Homepage</button>
      {/* here inside onclick we should either pass arrow func or direct func w/o brackets o/w it will go under infinite loop */}
      <button onClick={()=>{
        navig(-1);
      }}>🔙</button>

    </>
  )

}

export default About;
