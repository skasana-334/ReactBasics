
import Cards from './Cards';
import Series from './Series';
//here we make a function to pass as value in array map
// function nseries(val){
//   return(
//     <>
//      <Cards
//         imgsrc={val.imgsrc}
//         title={val.title}
//         link={val.link}
//         />
//     </>
//   )
// }

function App(){
    return(
        <>
        {Series.map((val) => (
          //here we are using arrow function
    <>
     <Cards
        imgsrc={val.imgsrc}
        title={val.title}
        link={val.link}
        />
    </>
  )
)}
       </>

    )
};
export default App;