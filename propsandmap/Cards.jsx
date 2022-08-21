import React from 'react';
function Cards(props){
    //here we are passing the data from one component series to other
   return( <>
  
    <div className='cards'>
      <div className='card'>
        <img src={props.imgsrc} alt="no" className='cardimg'/>
      <div className='cardinfo'>
      <h3 className='cardcategory'>Netflix Original Series</h3>
      <h3 className='cardtitle'>{props.title}</h3>
      <a href={props.link} target=""><button>Watch Now</button></a>
      </div>
      </div>
    </div>
      </>)
}
export default Cards;