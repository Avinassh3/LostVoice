import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Listen extends React.Component{


render(){
  return(

<div>
      
      <div className="container-fluid">
    <div className="row"  >
  
    <div className="col-sm-6 border border-white" style={{padding:'2rem',margin:'auto'}}>
    <h5 className="card-title text-center">Listen feature</h5>
    <p className="card-text text-center"></p>

    <Link to="/listenImage"><button className='btn  btn-secondary  btn-block'>Image Identification</button></Link>
    <br></br>
    <br></br>
    <Link to="/listenVideo"><button className='btn  btn-secondary  btn-block'>Video Identification</button></Link>
      </div>
      </div>
      </div>
      </div>


  )
}


}

export default Listen;