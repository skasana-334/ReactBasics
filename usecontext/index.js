import React, { useContext } from "react";
import CompA from './usecontext/compA';
let Fname=React.createContext();//here we are  creaTING THE context
function App(){
    return(
        <>
      <Fname.Provider value={'kasana'}>
        {/* here we are providing the data to object that should pass to other comp */}
        <CompA/>
      </Fname.Provider>
        </>
    )
}
export default App;
export  {Fname};
