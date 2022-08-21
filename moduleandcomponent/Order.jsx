import React from 'react';

// function Order(){
//     return(// use brackets if it has child
//         <ol>
//         <li>hello</li>
//         <li>sagr</li>
//         <li>ji</li>
//         <li>nknk</li>
//         </ol>
//     )
// }
// export default Order;//not Order() as it will call immediately it is comp not a func
let a={};
let ram='bhjk';
let x=new Date().getHours();
let y='';
if(x<12){
  y='Good Morning';
  a.color='red';
}
else if(x>=12&&x<=19){
  y="good Afternoon";
  a.color='pink'; 
}
function Order(){
    return <h1>hello sir</h1>
}
export default Order;// we can give default to only one var
export {ram};//for other and inside return we also have to use {}