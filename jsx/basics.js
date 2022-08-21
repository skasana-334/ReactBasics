// we have to import two modules to get babel which support modern js so we can write modern js after that
// var React = require('react');old version
import React from 'react';
//to use react.create like methods
// var ReactDom = require('react-dom'); 
import ReactDom from 'react-dom';

/*                     

                    ********************
 import '/.index.css';//to get css file-external css
//here we use  className instaed of class
            
             INLINECSS-we have to make objects then use object in render
let x={
  color:'red',
  textTransform:'capitalise',
  backgroundColor:kkk,
  margin:'100px 500px',
  //here we change from kebab case to camelCase like background-color to backgroundColor

ReactDom.render(<h1 style={x}></h1>,-use braces as we have to use js in html


               INTERNAL CSS
}

 



 */

// ReactDom.render('kya dikhana h','khan',callbackfunsct)-to show o/p thatswhy we import react dom so that we can use render 

// to start server use npm start
ReactDom.render(<h1>hello ji</h1>,document.getElementById('root'));
// here h1 is jsx elements


//            ************************* 
ReactDom.render(
  // to use multiple jsx elements use div or array like method
  // <div>
  //   <h1></h1>
  //   <p></p>
  // </div>,
  //             or

// [
//   <h1></h1>,
//   <h2></h2>
// ],
      //           or

  // <React.Fragment>
  //   <h1></h1>
  //   <h2></h2>
  // </React.Fragment>
    //             or
    
    <>
    <h1></h1>
    <h2></h2>
    </>
);

//         react fragment
// since by convention we do not use aray method  as it will not create the html elements in index.html so we will not able to add css easily
// so we have to use React.Fragment because if we use div then it will create an extra div which create problem

/**********************React jsx expressions */
var name='sagar';
ReactDom.render(<h1>my {name} </h1>,document.getElementById('root'));
//here we use {} to write expressions

/*** jsx template literals */
var fname='sagar';
var lname='kasana';
let x={
  color:'red',
  textTransform:'capitalise',
  fontSize:'25px',
  };
ReactDom.render(<h1 style={x}>{`my name is ${fname} ${lname}`}</h1>,document.getElementById('root'));