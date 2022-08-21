import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//browserroute- we want to connect your app to the browser's URL:
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App(){
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </>)
}
export default App;

