import React from 'react';
import Order,{ram} from './Order';
// import Head from './Head';
function App(){
    return (
        <>
        <Order></Order>
       <h1>{ram}</h1>
        </>
    )
}
export default App;

//                    code of index.js
// import React from 'react';
// import ReactDom from 'react-dom';
// import App from './app';
// ReactDom.render(
//   <App/>,document.getElementById('root')
// );

/*              project          ********************/
import React from 'react';

function add(x,y){
    return x+y
}
function sub(x,y){
    return x-y
}
function mul(x,y){
    return x*y
}
function div(x,y){
    return (x/y).toPrecision(3);
}
export {add,sub,mul,div};


 /************************************** INDX>js 
  import {add,sub,mul,div} from './App';
ReactDom.render(
  <>
  <ol>
    <li>{add(5,4)}</li>
    <li>{sub(2,4)}</li>
    <li>{mul(5,4)}</li>
    <li>{div(19,4)}</li>
  </ol>
  </>
 ,document.getElementById('root')
);

 */