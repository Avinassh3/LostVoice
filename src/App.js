  
import React, { Component } from 'react';

import signs from './signs.gif';

import {Link} from 'react-router-dom';
class App extends Component{

  render(){
  return (
    
    
    
      
  <div className="container-fluid">

  
  <div className="row border-0 " >
  <div className="col-sm-6 border border-white" style={{padding:'2rem',margin:'0'}}>
  
        <h5 className="card-title">Speak</h5>
        <p className="card-text">Want to Speak In American Sign Language? But you don't know signs.
        Don't worry we are here to solve this issue Just enter words that you want to communicate 
        we provide you GIF's that helps to communicate in American Sign Language 
        try it out by clicking below button.</p>
        <Link to="/speak">
        <button type="button" className="btn btn-outline-light btn-lg  display-4" >Speak</button>
        </Link>
        </div>
    
  
        <div className="col-sm-6 border border-white" style={{padding:'2rem',margin:'0'}}>
        <h5 className="card-title">Listen</h5>
        <p className="card-text">Want to Understand American Sign Language used by other people? But you don't know signs. Don't worry we are here to solve this issue by Machine Learning. 
        Just capture video and upload it to our Neural Net which analyses it and sends you the meaning of it,  which makes it easy for you to understand American Sign Language. try it out by clicking below button.</p>
        <Link to="/Listen">
        <button type="button" className="btn btn-outline-light btn-lg  display-4" >Listen</button>
        </Link>
      </div>
    </div>
  







<div className="row border border-white " style={{padding:'2rem'}}>
  <div className="container " >
    <h5 className="card-title text-center">Signs that we follow</h5>
    <p className="card-text text-center">
    <img src={signs} alt="loading..." /></p>
  </div>
</div>
  
    
</div>
  
    
);
}
}

export default App;
