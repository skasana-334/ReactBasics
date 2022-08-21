import React from 'react';

let Check=() => {
  let emoji=['🤣','❤️','👌'];
  let x = emoji[Math.floor(Math.random()*emoji.length)];
let y= emoji[Math.floor(Math.random()*emoji.length)];
let z=emoji[Math.floor(Math.random()*emoji.length)];
  if(x===y && y===z){
  return(
    <>
    <h4>winner</h4>
    <h1>{x} {y} {z}</h1>
    </>
    )}
    else{
      return(
    <>
    <h4>looser</h4>
      <h1>{x} {y} {z}</h1>
    </>
  )
}};
let App=()=>{
   return <Check/>
  
}
 export default App;
