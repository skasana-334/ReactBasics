function App(){
    const [naam,nname]=useState({
      fname:"",
      lname:"",
      mail:"",
      phn:"",
     });
    let change=(ip)=>{
      let v=ip.target.value;
      let n=ip.target.name;
    nname((prev) => {
    // if(n==="fname"){
    //   return{
    //     fname:v,
    //     lname:prev.lname,
    //     mail:prev.mail,
    //     phn:prev.phn,
    //   };
    // }
    // else if(n==="lname"){
    //   return{
    //     fname:prev.fname,
    //     lname:v,
    //     mail:prev.mail,
    //     phn:prev.phn,
    //   };
    // }
    // else if(n==="nMail"){
    //   return{
    //     fname:prev.fname,
    //     lname:prev.lname,
    //     mail:v,
    //     phn:prev.phn,
    //   };
    // }
    // else if(n==="Phn"){
    //   return{
    //     fname:prev.fname,
    //     lname:prev.lname,
    //     mail:prev.mail,
    //     phn:v,
    //   };
    // }
    return{
      ...prev,//by this we are getting prev values
      [n]:v,//this is object manipulation where we do['name'] but here we don't need ' '
    }
    })
    
      }
    
      return(
        <>
        <form onSubmit={(ip)=>{ip.preventDefault();}
          } >
        <div>
          <h1>hello {naam.fname} {naam.lname}</h1>
          <h2>{naam.mail}</h2>
          <h2>{naam.phn}</h2>
          <input type='text' placeholder="enter first name" name="fname" onChange={change} value= {naam.fname}/>
          <input type='text' placeholder="enterlast name"  name="lname" onChange={change} value={naam.lname}/>
          <input type='email' placeholder="enter email" name="mail" onChange={change}  value={naam.mail}/>
          <input type='number' placeholder="mobile no" name="phn" onChange={change} value={naam.phn} />
          <button>submit</button>
        </div>
        </form>
        </>
      )
    }