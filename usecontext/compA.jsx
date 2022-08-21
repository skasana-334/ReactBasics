import React from "react";
import { useContext } from "react";
import {Fname} from '../src/App';
let CompA=()=>{
let use=useContext(Fname);// here we are using use context hook as it helps to return multiple context apis which was difficult with consumer method
return(
    <>
    <h1>my name is {use}</h1>
    </>
)
}
export default CompA;